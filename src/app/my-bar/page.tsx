"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";

import { drinks } from "@/data/drinks";

import {
  ingredientSuggestions,
  matchDrinks,
  productSuggestions,
  resolveInventoryInput,
  type InventoryItem,
} from "@/lib/inventoryMatcher";

import {
  clearMyBar,
  loadMyBar,
  saveMyBar,
  type MyBarItem,
} from "@/lib/myBar";

const quickSearches = [
  "Whiskey",
  "Rum",
  "Gin",
  "Vodka",
  "Tequila",
  "Lemon",
  "Lime",
  "Honey",
];

const categoryOrder = [
  "spirit",
  "liqueur",
  "citrus",
  "juice_or_puree",
  "syrup_or_sweetener",
  "mixer",
  "bitters",
  "other",
];

function itemKey(item: InventoryItem) {
  return [
    item.product?.product ?? "",
    item.ingredientId ?? "",
    item.label.toLowerCase(),
  ].join("|");
}

function prettyCategory(value?: string) {
  return (value ?? "other")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

/**
 * My Bar stores extra information such as quantity and unit.
 * The drink matcher only needs the underlying InventoryItem.
 */
function toInventoryItems(items: MyBarItem[]): InventoryItem[] {
  return items.map(({ quantity, unit, ...inventoryItem }) => inventoryItem);
}

export default function MyBarPage() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<MyBarItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [category, setCategory] = useState("all");

  // Load saved My Bar items once.
  useEffect(() => {
    setItems(loadMyBar());
    setHydrated(true);
  }, []);

  // Save whenever the inventory changes.
  useEffect(() => {
    if (!hydrated) return;

    saveMyBar(items);
  }, [items, hydrated]);

  const suggestions = useMemo(() => {
    return {
      products: productSuggestions(query, 5),
      ingredients: ingredientSuggestions(query, 7),
    };
  }, [query]);

  /**
   * Calculate My Bar statistics.
   *
   * Important:
   * MyBarItem extends InventoryItem with quantity/unit.
   * We strip those extra fields before calling matchDrinks().
   */
  const counts = useMemo(() => {
    const inventory = toInventoryItems(items);
    const matches = matchDrinks(drinks, inventory);

    return {
      ready: matches.filter((match) => match.exactMatch).length,

      almost: matches.filter(
        (match) =>
          !match.exactMatch &&
          match.missing.length > 0 &&
          match.missing.length <= 2,
      ).length,
    };
  }, [items]);

  const categories = useMemo(() => {
    const availableCategories = new Set(
      items.map(
        (item) =>
          item.product?.category?.toLowerCase() ??
          item.category ??
          "other",
      ),
    );

    return categoryOrder.filter((value) =>
      availableCategories.has(value),
    );
  }, [items]);

  const visibleItems = useMemo(() => {
    if (category === "all") {
      return items;
    }

    return items.filter(
      (item) =>
        (item.product?.category?.toLowerCase() ??
          item.category ??
          "other") === category,
    );
  }, [items, category]);

  function addItem(value: string) {
    const resolved = resolveInventoryInput(value);

    if (!resolved.label.trim()) {
      return;
    }

    setItems((current) => {
      const existingIndex = current.findIndex(
        (item) => itemKey(item) === itemKey(resolved),
      );

      // If the item already exists, increase its quantity.
      if (existingIndex >= 0) {
        const updated = [...current];

        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };

        return updated;
      }

      // New product = bottle.
      // New ingredient = count.
      const newItem: MyBarItem = {
        ...resolved,
        quantity: 1,
        unit: resolved.product ? "bottle" : "count",
      };

      return [...current, newItem];
    });

    setQuery("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = query.trim();

    if (!value) {
      return;
    }

    const normalized = value.toLowerCase();

    const product = suggestions.products[0];
    const ingredient = suggestions.ingredients[0];

    if (
      product &&
      (product.product.toLowerCase().includes(normalized) ||
        normalized.includes(product.product.toLowerCase()))
    ) {
      addItem(product.product);
      return;
    }

    if (
      ingredient &&
      (ingredient.name.toLowerCase().includes(normalized) ||
        normalized.includes(ingredient.name.toLowerCase()))
    ) {
      addItem(ingredient.name);
      return;
    }

    addItem(value);
  }

  function removeItem(index: number) {
    setItems((current) =>
      current.filter((_, itemIndex) => itemIndex !== index),
    );
  }

  function changeQuantity(index: number, delta: number) {
    setItems((current) =>
      current.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          quantity: Math.max(1, item.quantity + delta),
        };
      }),
    );
  }

  function changeUnit(index: number, unit: MyBarItem["unit"]) {
    setItems((current) =>
      current.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          unit,
        };
      }),
    );
  }

  function clearBar() {
    setItems([]);
    clearMyBar();
    setCategory("all");
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 pb-28 pt-28 text-white sm:px-8 lg:px-10 lg:pt-32">
      <div className="container mx-auto">

        {/* Header */}
        <header className="max-w-4xl">
          <p className="eyebrow">Your personal bar</p>

          <h1 className="page-title">
            My Bar
          </h1>

          <p className="page-lead max-w-2xl">
            Keep track of what you have at home. Como uses your bar to find
            drinks you can make right now and recipes that are only one or two
            ingredients away.
          </p>
        </header>

        {/* Stats */}
        <section className="mt-10 grid gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/30">
              In your bar
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {items.length}
            </p>

            <p className="mt-1 text-xs text-white/35">
              saved {items.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/30">
              Ready to make
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {counts.ready}
            </p>

            <p className="mt-1 text-xs text-white/35">
              complete recipe matches
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/30">
              Almost there
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {counts.almost}
            </p>

            <p className="mt-1 text-xs text-white/35">
              missing 1–2 ingredients
            </p>
          </div>

        </section>

        {/* Add to bar */}
        <section className="relative mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-5 sm:p-7 lg:p-8">

          <div className="relative">

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white/80">
                  Add to your bar
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Search ingredients, spirits, or recognizable products.
                </p>
              </div>

              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearBar}
                  className="text-xs text-white/35 transition hover:text-white"
                >
                  Clear bar
                </button>
              )}
            </div>

            <form
              onSubmit={submit}
              className="mt-5 flex flex-col gap-3 sm:flex-row"
            >
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try Johnnie Walker Red Label, lemon, honey..."
                className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/25"
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={!query.trim()}
                className="button-primary min-h-14 min-w-24 disabled:opacity-35"
              >
                Add
              </button>
            </form>

            {/* Suggestions */}
            {query &&
              (suggestions.products.length > 0 ||
                suggestions.ingredients.length > 0) && (
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">
                  <div className="grid sm:grid-cols-2">

                    {suggestions.products.map((product) => (
                      <button
                        key={product.product}
                        type="button"
                        onClick={() => addItem(product.product)}
                        className="border-b border-white/8 p-4 text-left transition hover:bg-white/[.045]"
                      >
                        <span className="block text-sm font-medium">
                          {product.product}
                        </span>

                        <span className="mt-1 block text-[10px] uppercase tracking-[.14em] text-white/30">
                          Product · {product.category}
                        </span>
                      </button>
                    ))}

                    {suggestions.ingredients.map((ingredient) => (
                      <button
                        key={ingredient.id}
                        type="button"
                        onClick={() => addItem(ingredient.name)}
                        className="border-b border-white/8 p-4 text-left transition hover:bg-white/[.045]"
                      >
                        <span className="block text-sm font-medium">
                          {ingredient.name}
                        </span>

                        <span className="mt-1 block text-[10px] uppercase tracking-[.14em] text-white/30">
                          Ingredient · {prettyCategory(ingredient.category)}
                        </span>
                      </button>
                    ))}

                  </div>
                </div>
              )}

            {/* Quick add */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[10px] uppercase tracking-[.16em] text-white/25">
                Quick add
              </span>

              {quickSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => addItem(item)}
                  className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-xs text-white/50 transition hover:border-white/20 hover:text-white"
                >
                  + {item}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Inventory */}
        <section className="mt-10 rounded-[32px] border border-white/10 bg-white/[.025] p-6 sm:p-8">

          <div className="flex flex-col gap-5 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">
                Inventory
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-[-.04em]">
                Your bar
              </h2>
            </div>

            <span className="text-xs text-white/30">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Category filters */}
          {items.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-5">

              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  category === "all"
                    ? "border-white/25 bg-white/10 text-white"
                    : "border-white/10 text-white/40 hover:text-white"
                }`}
              >
                All
              </button>

              {categories.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setCategory(value)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    category === value
                      ? "border-white/25 bg-white/10 text-white"
                      : "border-white/10 text-white/40 hover:text-white"
                  }`}
                >
                  {prettyCategory(value)}
                </button>
              ))}

            </div>
          )}

          {/* Empty state */}
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-white/80">
                Your bar is empty.
              </p>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/35">
                Add what you have above. Your saved bar will power drink
                matching automatically.
              </p>
            </div>
          ) : (
            <div className="grid gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-3">

              {visibleItems.map((item) => {
                const realIndex = items.indexOf(item);

                const categoryLabel = item.product
                  ? `Product · ${item.product.category}`
                  : `Ingredient · ${prettyCategory(item.category)}`;

                return (
                  <div
                    key={`${itemKey(item)}-${realIndex}`}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4"
                  >

                    {/* Item header */}
                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white/90">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[.14em] text-white/30">
                          {categoryLabel}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(realIndex)}
                        aria-label={`Remove ${item.label}`}
                        className="text-lg text-white/25 transition hover:text-white"
                      >
                        ×
                      </button>

                    </div>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/8 pt-3">

                      <div className="flex items-center gap-2">

                        <button
                          type="button"
                          onClick={() =>
                            changeQuantity(realIndex, -1)
                          }
                          className="h-8 w-8 rounded-lg border border-white/10 text-white/50 transition hover:text-white"
                          aria-label={`Decrease ${item.label} quantity`}
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            changeQuantity(realIndex, 1)
                          }
                          className="h-8 w-8 rounded-lg border border-white/10 text-white/50 transition hover:text-white"
                          aria-label={`Increase ${item.label} quantity`}
                        >
                          +
                        </button>

                      </div>

                      <select
                        value={item.unit}
                        onChange={(event) =>
                          changeUnit(
                            realIndex,
                            event.target.value as MyBarItem["unit"],
                          )
                        }
                        className="rounded-lg border border-white/10 bg-[#151515] px-2 py-2 text-xs text-white/60 outline-none"
                      >
                        <option value="bottle">
                          bottle
                        </option>

                        <option value="ml">
                          ml
                        </option>

                        <option value="count">
                          count
                        </option>
                      </select>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

        </section>

        {/* CTA */}
        <section className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/10 bg-[#111] p-6 sm:p-8 lg:flex-row lg:items-center">

          <div>
            <p className="eyebrow">
              Next step
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              See what your bar can make.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
              Jump straight into recipe matches based on your saved inventory.
            </p>
          </div>

          <Link
            href="/what-can-i-make"
            className="button-primary shrink-0"
          >
            What can I make? →
          </Link>

        </section>

      </div>
    </main>
  );
}