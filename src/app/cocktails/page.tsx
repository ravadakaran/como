"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DrinkCard from "@/components/DrinkCard";
import { cocktails } from "@/data/drinks";

const spirits = ["All", "Whiskey", "Rum", "Vodka", "Gin", "Tequila", "Brandy"];

function CocktailsContent() {
  const searchParams = useSearchParams();
  const initialBase = searchParams.get("base") ?? "all";

  const [base, setBase] = useState(
    spirits.map((s) => s.toLowerCase()).includes(initialBase.toLowerCase())
      ? initialBase.toLowerCase()
      : "all",
  );

  const filtered = useMemo(() => {
    if (base === "all") return cocktails;
    return cocktails.filter((d) => d.base?.toLowerCase() === base);
  }, [base]);

  return (
    <>
      {/* Spirit filter pills */}
      <div className="mt-10 flex flex-wrap gap-2">
        {spirits.map((spirit) => {
          const value = spirit.toLowerCase();
          const active = base === value || (spirit === "All" && base === "all");
          return (
            <button
              key={spirit}
              type="button"
              onClick={() => setBase(spirit === "All" ? "all" : value)}
              className={`filter-pill ${active ? "active" : ""}`}
            >
              {spirit}
            </button>
          );
        })}
      </div>

      {/* Result count */}
      <p className="mt-6 text-sm text-white/40">
        <span className="font-medium text-white">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "cocktail" : "cocktails"}
        {base !== "all" && (
          <span> · {base.charAt(0).toUpperCase() + base.slice(1)}</span>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[.025] px-8 py-20 text-center">
          <p className="text-xl font-semibold">No cocktails found for this spirit.</p>
          <button
            type="button"
            onClick={() => setBase("all")}
            className="button-primary mt-6 inline-flex"
          >
            Show all cocktails
          </button>
        </div>
      )}
    </>
  );
}

export default function CocktailsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] px-6 pb-28 pt-28 text-white lg:px-10 lg:pt-32">
      <div className="container mx-auto">
        <header className="max-w-4xl">
          <p className="eyebrow">The collection</p>
          <h1 className="page-title">Cocktails</h1>
          <p className="page-lead">Classic and modern drinks, organized by spirit and flavor.</p>
        </header>

        <Suspense fallback={
          <div className="mt-10 flex flex-wrap gap-2">
            {spirits.map((s) => (
              <div key={s} className="shimmer h-9 w-20 rounded-full" />
            ))}
          </div>
        }>
          <CocktailsContent />
        </Suspense>
      </div>
    </main>
  );
}
