"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cocktails, mocktails } from "@/data/drinks";
import { loadMyBar, saveMyBar, type MyBarItem } from "@/lib/myBar";
import {
  ingredientSuggestions,
  matchDrinks,
  productSuggestions,
  resolveInventoryInput,
  type DrinkMatch,
} from "@/lib/inventoryMatcher";

const drinks = [...cocktails, ...mocktails];

const quickSearches = ["Whiskey", "Rum", "Gin", "Vodka", "Lemon", "Lime"];

function MatchCard({ match }: { match: DrinkMatch }) {
  const matched = match.matched.slice(0, 5);
  const missing = match.missing.slice(0, 5);
  const isExact = match.exactMatch;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111] shadow-[0_20px_70px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <Link href={`/drink/${match.drink.slug}`} className="block">
        <div className="relative aspect-[4/4.6] overflow-hidden bg-[#171717]">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.025]"
            style={{ backgroundImage: `url(${match.drink.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="tag">{match.drink.type}</span>
              {match.drink.base && <span className="tag">{match.drink.base}</span>}
            </div>
            <span className="rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[11px] font-semibold backdrop-blur">
              {match.percentage}%
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-white/45">
              {isExact ? "Ready now" : `${match.missing.length} missing`}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">{match.drink.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm leading-5 text-white/55">{match.drink.description}</p>
          </div>
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[.2em] text-white/30">Match</p>
            <p className="mt-1 text-sm font-medium text-white/80">
              {isExact ? "You have everything" : `${match.percentage}% of ingredients`}
            </p>
          </div>
          {isExact && (
            <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10px] uppercase tracking-[.15em] text-white/70">
              Make now
            </span>
          )}
        </div>

        {matched.length > 0 && (
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-[.18em] text-white/30">You have</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {matched.map((ingredient) => (
                <span key={ingredient.id} className="flavor">✓ {ingredient.name}</span>
              ))}
              {match.matched.length > matched.length && (
                <span className="flavor">+{match.matched.length - matched.length} more</span>
              )}
            </div>
          </div>
        )}

        {missing.length > 0 && (
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-[.18em] text-white/30">Missing</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {missing.map((ingredient) => (
                <span key={ingredient.id} className="flavor border border-white/8 bg-white/[.025] text-white/55">
                  + {ingredient.name}
                </span>
              ))}
              {match.missing.length > missing.length && (
                <span className="flavor">+{match.missing.length - missing.length} more</span>
              )}
            </div>
          </div>
        )}

        <Link
          href={`/drink/${match.drink.slug}`}
          className="mt-6 inline-flex items-center text-sm font-medium text-white/75 transition hover:text-white"
        >
          View recipe <span className="ml-2 transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

function ResultSection({
  eyebrow,
  title,
  description,
  matches,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  matches: DrinkMatch[];
}) {
  if (matches.length === 0) return null;

  return (
    <section>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{title}</h2>
          {description && <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">{description}</p>}
        </div>
        <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/[.025] px-3 py-2 text-xs text-white/40 sm:inline-flex">
          {matches.length} {matches.length === 1 ? "drink" : "drinks"}
        </span>
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => <MatchCard key={match.drink.id} match={match} />)}
      </div>
    </section>
  );
}

export default function WhatCanIMakePage() {
  const [query, setQuery] = useState("");
  const [inventory, setInventory] = useState<MyBarItem[]>([]);
  const [minimum, setMinimum] = useState(25);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setInventory(loadMyBar());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveMyBar(inventory);
  }, [inventory, hydrated]);

  const suggestions = useMemo(() => {
    if (!query.trim()) return { products: [], ingredients: [] };
    return {
      products: productSuggestions(query, 4),
      ingredients: ingredientSuggestions(query, 6),
    };
  }, [query]);

  const results = useMemo(
    () => matchDrinks(
      drinks,
      inventory.map(({ quantity, unit, ...item }) => item),
      minimum,
    ),
    [inventory, minimum],
  );

  const exactMatches = results.filter((match) => match.exactMatch);
  const almostMatches = results.filter(
    (match) => !match.exactMatch && match.missing.length <= 2,
  );
  const otherMatches = results.filter(
    (match) => !match.exactMatch && match.missing.length > 2,
  );

  function addItem(value: string) {
    const resolved = resolveInventoryInput(value);
    if (!resolved.label) return;

    const newItem: MyBarItem = {
      ...resolved,
      quantity: 1,
      unit: resolved.product ? "bottle" : "count",
    };

    setInventory((current) => {
      const exists = current.some(
        (item) =>
          item.ingredientId === newItem.ingredientId &&
          item.product?.product === newItem.product?.product &&
          item.label === newItem.label,
      );

      return exists ? current : [...current, newItem];
    });
    setQuery("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;

    const normalized = value.toLowerCase();
    const product = suggestions.products[0];
    const ingredient = suggestions.ingredients[0];

    if (product && product.product.toLowerCase().includes(normalized)) {
      addItem(product.product);
      return;
    }
    if (ingredient && ingredient.name.toLowerCase().includes(normalized)) {
      addItem(ingredient.name);
      return;
    }
    addItem(value);
  }

  function removeItem(index: number) {
    setInventory((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 pb-28 pt-28 text-white sm:px-8 lg:px-10 lg:pt-32">
      <div className="container mx-auto">
        <header className="max-w-4xl">
          <p className="eyebrow">Your bar, your options</p>
          <h1 className="page-title">What can I make?</h1>
          <p className="page-lead max-w-2xl">
            Start with what you already have. Como will match your bar against every recipe and show you what you can make now — plus what&apos;s worth picking up next.
          </p>
        </header>

        <section className="relative mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-5 sm:p-7 lg:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[.035] blur-3xl" />
          <div className="relative">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white/80">Build your bar</p>
                <p className="mt-1 text-xs leading-5 text-white/35">Add spirits, ingredients, or a specific product.</p>
              </div>
              {inventory.length > 0 && (
                <button
                  type="button"
                  onClick={() => setInventory([])}
                  className="text-left text-xs text-white/35 transition hover:text-white sm:text-right"
                >
                  Clear all
                </button>
              )}
            </div>

            <form onSubmit={submit} className="mt-5">
              <label htmlFor="inventory-search" className="sr-only">Add an ingredient or product</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    id="inventory-search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Try Johnnie Walker Red Label, lemon, honey..."
                    className="min-h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-black/40"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="button-primary min-h-14 min-w-24 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Add
                </button>
              </div>
            </form>

            {query && (suggestions.products.length > 0 || suggestions.ingredients.length > 0) && (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">
                <div className="grid sm:grid-cols-2">
                  {suggestions.products.map((product) => (
                    <button
                      key={`product-${product.product}`}
                      type="button"
                      onClick={() => addItem(product.product)}
                      className="border-b border-white/8 p-4 text-left transition hover:bg-white/[.045] sm:border-r"
                    >
                      <span className="block text-sm font-medium text-white">{product.product}</span>
                      <span className="mt-1 block text-[10px] uppercase tracking-[.14em] text-white/30">
                        Product · {product.category}
                      </span>
                    </button>
                  ))}
                  {suggestions.ingredients.map((ingredient) => (
                    <button
                      key={`ingredient-${ingredient.id}`}
                      type="button"
                      onClick={() => addItem(ingredient.name)}
                      className="border-b border-white/8 p-4 text-left transition hover:bg-white/[.045]"
                    >
                      <span className="block text-sm font-medium text-white">{ingredient.name}</span>
                      <span className="mt-1 block text-[10px] uppercase tracking-[.14em] text-white/30">
                        Ingredient · {ingredient.category.replaceAll("_", " ")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[10px] uppercase tracking-[.16em] text-white/25">Quick add</span>
              {quickSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => addItem(item)}
                  className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-xs text-white/50 transition hover:border-white/20 hover:bg-white/[.06] hover:text-white"
                >
                  + {item}
                </button>
              ))}
            </div>

            <div className="mt-7 border-t border-white/8 pt-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] uppercase tracking-[.2em] text-white/30">What you have</p>
                {inventory.length > 0 && (
                  <p className="text-xs text-white/30">{inventory.length} item{inventory.length === 1 ? "" : "s"}</p>
                )}
              </div>
              {inventory.length === 0 ? (
                <div className="mt-3 rounded-2xl border border-dashed border-white/10 px-5 py-7 text-sm text-white/30">
                  Your bar is empty. Add an ingredient or product above to start matching.
                </div>
              ) : (
                <div className="mt-3 flex flex-wrap gap-2">
                  {inventory.map((item, index) => (
                    <button
                      key={`${item.label}-${index}`}
                      type="button"
                      onClick={() => removeItem(index)}
                      aria-label={`Remove ${item.label}`}
                      className="group rounded-full border border-white/12 bg-white/[.055] px-4 py-2 text-sm text-white/75 transition hover:border-white/25 hover:bg-white/[.08]"
                    >
                      {item.label}
                      <span className="ml-2 text-white/25 transition group-hover:text-white/70">×</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {inventory.length === 0 ? (
          <section className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Tell us what you have", "Add spirits, mixers, citrus, sweeteners, or recognizable brands."],
              ["02", "Como checks the recipes", "Your bar is compared against the normalized ingredients in every cocktail and mocktail."],
              ["03", "Choose your next drink", "See complete matches first, then the recipes that are closest to what you already own."],
            ].map(([number, title, body]) => (
              <div key={number} className="rounded-[28px] border border-white/10 bg-white/[.025] p-6 sm:p-7">
                <span className="text-[10px] tracking-[.22em] text-white/25">{number}</span>
                <h2 className="mt-8 text-lg font-medium tracking-tight">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/40">{body}</p>
              </div>
            ))}
          </section>
        ) : (
          <section className="mt-16">
            <div className="flex flex-col gap-5 border-b border-white/8 pb-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow">Your matches</p>
                <h2 className="mt-2 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Drinks from your bar</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                  {results.length > 0
                    ? `Showing drinks with at least ${minimum}% of their recipe ingredients covered.`
                    : "Nothing meets the current threshold yet."}
                </p>
              </div>
              <label className="flex shrink-0 items-center gap-3 text-xs text-white/40">
                Minimum match
                <select
                  value={minimum}
                  onChange={(event) => setMinimum(Number(event.target.value))}
                  className="rounded-xl border border-white/10 bg-[#151515] px-3 py-2.5 text-xs text-white outline-none"
                >
                  <option value={25}>25%</option>
                  <option value={50}>50%</option>
                  <option value={75}>75%</option>
                  <option value={100}>100%</option>
                </select>
              </label>
            </div>

            {results.length === 0 ? (
              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[.025] px-6 py-16 text-center">
                <p className="eyebrow">No matches at this level</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Add another ingredient or lower the threshold.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
                  Try adding a spirit, citrus, sweetener, or mixer. Como will update the results instantly.
                </p>
              </div>
            ) : (
              <div className="mt-10 space-y-16">
                <ResultSection
                  eyebrow="Ready now"
                  title="You can make these"
                  description="Every recipe ingredient is covered by your current bar."
                  matches={exactMatches}
                />
                <ResultSection
                  eyebrow="Almost there"
                  title="One or two ingredients away"
                  description="These are the closest recipes to what you already have."
                  matches={almostMatches}
                />
                <ResultSection
                  eyebrow="More options"
                  title="Keep exploring"
                  description="Good matches that need a few more ingredients."
                  matches={otherMatches}
                />
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
