"use client";

import { FormEvent, useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { cocktails, mocktails } from "@/data/drinks";
import { productAliases } from "@/lib/drinkSearch";

const allDrinks = [...cocktails, ...mocktails];

function normalize(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

type Suggestion =
  | { type: "drink"; label: string; sub: string; href: string }
  | { type: "spirit"; label: string; sub: string; href: string }
  | { type: "product"; label: string; sub: string; href: string };

export default function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const suggestions = useMemo<Suggestion[]>(() => {
    const q = normalize(value);
    if (!q || q.length < 1) return [];

    const results: Suggestion[] = [];

    // 1. Drink name matches
    const drinkMatches = allDrinks
      .filter((d) => normalize(d.name).includes(q))
      .slice(0, 5)
      .map((d): Suggestion => ({
        type: "drink",
        label: d.name,
        sub: d.type === "cocktail" ? (d.base ?? "Cocktail") : "Mocktail",
        href: `/drink/${d.slug}`,
      }));
    results.push(...drinkMatches);

    // 2. Spirit / base matches (deduplicated)
    if (results.length < 6) {
      const spirits = new Set<string>();
      allDrinks
        .filter((d) => d.base && normalize(d.base).includes(q))
        .forEach((d) => d.base && spirits.add(d.base));
      [...spirits].slice(0, 2).forEach((spirit) => {
        results.push({
          type: "spirit",
          label: spirit,
          sub: "Browse spirit",
          href: `/cocktails?base=${encodeURIComponent(spirit.toLowerCase())}`,
        });
      });
    }

    // 3. Branded product matches
    if (results.length < 7) {
      productAliases
        .filter(
          (p) =>
            normalize(p.product).includes(q) ||
            normalize(p.brand).includes(q) ||
            p.aliases.some((a) => normalize(a).includes(q)),
        )
        .slice(0, 2)
        .forEach((p) => {
          results.push({
            type: "product",
            label: p.product,
            sub: `${p.category} · Brand`,
            href: `/search?q=${encodeURIComponent(p.product)}`,
          });
        });
    }

    return results.slice(0, 7);
  }, [value]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = value.trim();
    setOpen(false);
    router.push(`/search${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  }

  function pick(href: string) {
    setOpen(false);
    setValue("");
    router.push(href);
  }

  const typeIcon: Record<string, string> = {
    drink: "🍹",
    spirit: "✦",
    product: "🏷",
  };

  return (
    <div ref={containerRef} className="relative">
      <form
        onSubmit={submit}
        className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/30 p-2 backdrop-blur-md transition focus-within:border-white/30"
      >
        <span className="pl-3 text-white/35">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="M15 15l-3-3" strokeLinecap="round" />
          </svg>
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => { setFocused(true); setOpen(true); }}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
          className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-white/35"
          placeholder="Search drinks, spirits, or brands..."
          aria-label="Search drinks"
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            onClick={() => { setValue(""); inputRef.current?.focus(); }}
            className="px-1 text-white/30 transition hover:text-white"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
        <button
          className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Suggestions dropdown */}
      {open && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/12 bg-[#111]/98 shadow-2xl backdrop-blur-xl">
          {suggestions.map((s, i) => (
            <button
              key={`${s.href}-${i}`}
              type="button"
              onMouseDown={(e) => { e.preventDefault(); pick(s.href); }}
              className="flex w-full items-center gap-3 border-b border-white/6 px-4 py-3 text-left transition last:border-0 hover:bg-white/[.06]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-base">
                {typeIcon[s.type]}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white/90">{s.label}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/35">{s.sub}</p>
              </div>
              <span className="ml-auto shrink-0 text-white/20">→</span>
            </button>
          ))}

          {/* "Search for …" footer row */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); pick(`/search?q=${encodeURIComponent(value.trim())}`); }}
            className="flex w-full items-center gap-3 bg-white/[.025] px-4 py-3 text-left transition hover:bg-white/[.05]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 text-sm text-white/40">
              ⌕
            </span>
            <p className="text-sm text-white/55">
              Search for <span className="font-medium text-white/80">&ldquo;{value}&rdquo;</span>
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
