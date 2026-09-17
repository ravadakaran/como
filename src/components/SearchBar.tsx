"use client";

import { FormEvent, useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { cocktails, mocktails } from "@/data/drinks";
import { productAliases } from "@/lib/drinkSearch";

const allDrinks = [...cocktails, ...mocktails];

const popularSpirits = [
  { label: "Whiskey", href: "/cocktails?base=whiskey" },
  { label: "Gin", href: "/cocktails?base=gin" },
  { label: "Tequila", href: "/cocktails?base=tequila" },
  { label: "Rum", href: "/cocktails?base=rum" },
  { label: "Vodka", href: "/cocktails?base=vodka" },
  { label: "Mocktails", href: "/mocktails" },
];

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
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close when tapping or clicking outside on desktop and mobile
  useEffect(() => {
    function handleOutside(e: Event) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  const suggestions = useMemo<Suggestion[]>(() => {
    const q = normalize(value);
    if (!q) return [];
    const results: Suggestion[] = [];

    // 1. Matches by drink name
    allDrinks
      .filter((d) => normalize(d.name).includes(q))
      .slice(0, 5)
      .forEach((d) =>
        results.push({
          type: "drink",
          label: d.name,
          sub: d.type === "cocktail" ? (d.base ?? "Cocktail") : "Mocktail",
          href: `/drink/${d.slug}`,
        })
      );

    // 2. Matches by spirit category
    if (results.length < 6) {
      const spirits = new Set<string>();
      allDrinks
        .filter((d) => d.base && normalize(d.base).includes(q))
        .forEach((d) => d.base && spirits.add(d.base));

      [...spirits].slice(0, 2).forEach((s) =>
        results.push({
          type: "spirit",
          label: s,
          sub: "Browse spirit",
          href: `/cocktails?base=${encodeURIComponent(s.toLowerCase())}`,
        })
      );
    }

    // 3. Matches by recognized brand or product
    if (results.length < 7) {
      productAliases
        .filter(
          (p) =>
            normalize(p.product).includes(q) ||
            normalize(p.brand).includes(q) ||
            p.aliases.some((a) => normalize(a).includes(q))
        )
        .slice(0, 2)
        .forEach((p) =>
          results.push({
            type: "product",
            label: p.product,
            sub: `${p.category} · Brand`,
            href: `/search?q=${encodeURIComponent(p.product)}`,
          })
        );
    }

    return results.slice(0, 7);
  }, [value]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = value.trim();
    setOpen(false);
    inputRef.current?.blur();
    router.push(`/search${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  }

  function pick(href: string) {
    setOpen(false);
    setValue("");
    inputRef.current?.blur();
    router.push(href);
  }

  const typeIcon: Record<string, string> = {
    drink: "🍹",
    spirit: "✦",
    product: "🏷",
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <form
        onSubmit={submit}
        className="flex items-center gap-1.5 rounded-2xl border border-white/15 bg-[#121212]/90 p-1.5 shadow-lg backdrop-blur-xl transition duration-200 focus-within:border-white/35 focus-within:ring-1 focus-within:ring-white/20 sm:gap-2 sm:p-2"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center pl-1 text-white/40 sm:h-10 sm:w-10 sm:pl-1.5">
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="M15 15l-3-3" strokeLinecap="round" />
          </svg>
        </span>

        {/* text-base prevents iOS Safari from zooming on input focus */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              inputRef.current?.blur();
            }
          }}
          className="min-w-0 flex-1 bg-transparent py-2 text-base text-white outline-none placeholder:text-white/35 sm:py-2.5 sm:text-sm"
          placeholder="Search drinks, spirits, brands..."
          aria-label="Search drinks"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
        />

        {value && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              inputRef.current?.focus();
            }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white active:scale-95"
            aria-label="Clear search"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}

        <button
          type="submit"
          className="flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white px-3.5 text-xs font-semibold text-black transition hover:bg-white/90 active:scale-95 sm:h-11 sm:px-5 sm:text-sm"
        >
          <span>Search</span>
        </button>
      </form>

      {/* Suggestions or Quick-Chips Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[min(50vh,340px)] overflow-y-auto overscroll-contain rounded-2xl border border-white/12 bg-[#141414]/98 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all sm:p-2">
          {/* If user typed something and there are suggestions */}
          {suggestions.length > 0 ? (
            <div>
              {suggestions.map((s, i) => (
                <button
                  key={`${s.href}-${i}`}
                  type="button"
                  onClick={() => pick(s.href)}
                  className="flex min-h-[46px] w-full items-center gap-3 rounded-xl border-b border-white/5 px-3 py-2.5 text-left transition last:border-0 hover:bg-white/[.07] active:bg-white/[.12]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-sm">
                    {typeIcon[s.type]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white/95">{s.label}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{s.sub}</p>
                  </div>
                  <span className="shrink-0 text-xs text-white/25">→</span>
                </button>
              ))}

              <button
                type="button"
                onClick={() => pick(`/search?q=${encodeURIComponent(value.trim())}`)}
                className="mt-1 flex min-h-[44px] w-full items-center gap-2.5 rounded-xl bg-white/[.03] px-3 py-2 text-left text-xs text-white/60 transition hover:bg-white/[.06] active:bg-white/[.09]"
              >
                <span className="text-sm text-white/40">⌕</span>
                <span className="truncate">
                  Search all results for <strong className="text-white">&ldquo;{value}&rdquo;</strong>
                </span>
              </button>
            </div>
          ) : value.trim() ? (
            /* User typed something but no direct suggestion */
            <div className="px-3 py-4 text-center">
              <p className="text-xs text-white/40">No instant drink matches for &ldquo;{value}&rdquo;</p>
              <button
                type="button"
                onClick={() => pick(`/search?q=${encodeURIComponent(value.trim())}`)}
                className="button-primary mt-3 inline-flex min-h-9 px-4 text-xs"
              >
                Run full search →
              </button>
            </div>
          ) : (
            /* Empty input focus - quick explore pills for touch devices */
            <div className="px-2 py-2">
              <p className="px-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                Quick explore
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {popularSpirits.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => pick(item.href)}
                    className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs text-white/75 transition hover:border-white/20 hover:bg-white/[.08] active:scale-95"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
