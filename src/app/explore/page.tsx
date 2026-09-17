"use client";

import { useMemo, useState } from "react";
import { cocktails, mocktails } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";

const all = [...cocktails, ...mocktails];

const spirits = ["All", "Whiskey", "Rum", "Vodka", "Gin", "Tequila", "Brandy"];
const difficulties = ["All", "easy", "medium", "advanced"];
const methods = ["All", "shaken", "stirred", "built", "blended"];

export default function ExplorePage() {
  const [type, setType] = useState<"all" | "cocktail" | "mocktail">("all");
  const [spirit, setSpirit] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [method, setMethod] = useState("All");

  const drinks = useMemo(() => {
    return all.filter((d) => {
      if (type !== "all" && d.type !== type) return false;
      if (spirit !== "All" && d.base?.toLowerCase() !== spirit.toLowerCase()) return false;
      if (difficulty !== "All" && d.difficulty !== difficulty) return false;
      if (method !== "All" && d.method !== method) return false;
      return true;
    });
  }, [type, spirit, difficulty, method]);

  function Pill({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`filter-pill ${active ? "active" : ""}`}
      >
        {label}
      </button>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-6 pb-28 pt-28 text-white lg:px-10 lg:pt-32">
      <div className="container mx-auto">

        <header className="max-w-4xl">
          <p className="eyebrow">Discover</p>
          <h1 className="page-title">Explore drinks</h1>
          <p className="page-lead">
            Browse the Como collection and find something worth making.
          </p>
        </header>

        {/* ── Filters ───────────────────────────────────── */}
        <div className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/[.022] p-5">

          {/* Type */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-20 shrink-0 text-xs text-white/35 uppercase tracking-wider">Type</span>
            {(["all", "cocktail", "mocktail"] as const).map((v) => (
              <Pill
                key={v}
                label={v === "all" ? "All" : v.charAt(0).toUpperCase() + v.slice(1) + "s"}
                active={type === v}
                onClick={() => setType(v)}
              />
            ))}
          </div>

          {/* Spirit */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-20 shrink-0 text-xs text-white/35 uppercase tracking-wider">Spirit</span>
            {spirits.map((s) => (
              <Pill key={s} label={s} active={spirit === s} onClick={() => setSpirit(s)} />
            ))}
          </div>

          {/* Difficulty */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-20 shrink-0 text-xs text-white/35 uppercase tracking-wider">Level</span>
            {difficulties.map((d) => (
              <Pill
                key={d}
                label={d === "All" ? "All" : d.charAt(0).toUpperCase() + d.slice(1)}
                active={difficulty === d}
                onClick={() => setDifficulty(d)}
              />
            ))}
          </div>

          {/* Method */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-20 shrink-0 text-xs text-white/35 uppercase tracking-wider">Method</span>
            {methods.map((m) => (
              <Pill
                key={m}
                label={m === "All" ? "All" : m.charAt(0).toUpperCase() + m.slice(1)}
                active={method === m}
                onClick={() => setMethod(m)}
              />
            ))}
          </div>
        </div>

        {/* ── Result count + reset ─────────────────────── */}
        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-sm text-white/45">
            <span className="font-medium text-white">{drinks.length}</span>{" "}
            {drinks.length === 1 ? "drink" : "drinks"} found
          </p>
          {(type !== "all" || spirit !== "All" || difficulty !== "All" || method !== "All") && (
            <button
              type="button"
              onClick={() => { setType("all"); setSpirit("All"); setDifficulty("All"); setMethod("All"); }}
              className="text-xs text-white/40 transition hover:text-white"
            >
              Reset filters ×
            </button>
          )}
        </div>

        {/* ── Grid ─────────────────────────────────────── */}
        {drinks.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {drinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[.025] px-8 py-20 text-center">
            <p className="text-xl font-semibold">No drinks match these filters.</p>
            <p className="mt-3 text-sm text-white/42">Try a different combination.</p>
          </div>
        )}

      </div>
    </main>
  );
}
