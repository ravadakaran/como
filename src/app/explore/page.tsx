"use client";

import { useMemo, useState } from "react";
import { cocktails, mocktails } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";

const all = [...cocktails, ...mocktails];
const spirits = ["All", "Whiskey", "Rum", "Vodka", "Gin", "Tequila", "Brandy"];
const difficulties = ["All", "easy", "medium", "advanced"];
const methods = ["All", "shaken", "stirred", "built", "blended"];

function FilterRow({ label, options, active, onChange }: {
  label: string;
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="w-16 shrink-0 text-[10px] uppercase tracking-wider text-white/35 sm:w-20">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`filter-pill ${active === o ? "active" : ""}`}
          >
            {o === "All" ? "All" : o.charAt(0).toUpperCase() + o.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  const [type, setType] = useState("All");
  const [spirit, setSpirit] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [method, setMethod] = useState("All");

  const drinks = useMemo(() => {
    return all.filter((d) => {
      if (type !== "All" && d.type !== type.toLowerCase().replace("s", "")) return false;
      if (spirit !== "All" && d.base?.toLowerCase() !== spirit.toLowerCase()) return false;
      if (difficulty !== "All" && d.difficulty !== difficulty) return false;
      if (method !== "All" && d.method !== method) return false;
      return true;
    });
  }, [type, spirit, difficulty, method]);

  const hasFilters = type !== "All" || spirit !== "All" || difficulty !== "All" || method !== "All";

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 pb-24 pt-24 text-white sm:px-8 sm:pt-28 lg:px-10">
      <div className="container mx-auto">
        <header className="max-w-4xl">
          <p className="eyebrow">Discover</p>
          <h1 className="page-title">Explore drinks</h1>
          <p className="page-lead">Browse the Como collection and find something worth making.</p>
        </header>

        {/* Filters */}
        <div className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/[.022] p-4 sm:p-5">
          <FilterRow
            label="Type"
            options={["All", "Cocktails", "Mocktails"]}
            active={type}
            onChange={setType}
          />
          <FilterRow label="Spirit" options={spirits} active={spirit} onChange={setSpirit} />
          <FilterRow
            label="Level"
            options={difficulties}
            active={difficulty}
            onChange={setDifficulty}
          />
          <FilterRow label="Method" options={methods} active={method} onChange={setMethod} />
        </div>

        {/* Count + reset */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-white/45">
            <span className="font-medium text-white">{drinks.length}</span>{" "}
            {drinks.length === 1 ? "drink" : "drinks"} found
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => { setType("All"); setSpirit("All"); setDifficulty("All"); setMethod("All"); }}
              className="text-xs text-white/40 transition hover:text-white"
            >
              Reset ×
            </button>
          )}
        </div>

        {/* Grid */}
        {drinks.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {drinks.map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
          </div>
        ) : (
          <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[.025] px-6 py-16 text-center">
            <p className="text-xl font-semibold">No drinks match.</p>
            <p className="mt-2 text-sm text-white/40">Try a different combination.</p>
          </div>
        )}
      </div>
    </main>
  );
}
