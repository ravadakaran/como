"use client";

import Link from "next/link";
import type { Drink } from "@/types/drink";
import { useFavorites } from "@/lib/favorites";

const difficultyColor: Record<string, string> = {
  easy: "text-emerald-400",
  medium: "text-amber-400",
  advanced: "text-rose-400",
};

export default function DrinkCard({ drink }: { drink: Drink }) {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(drink.id);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.028] transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,.5)]">
      <Link href={`/drink/${drink.slug}`} className="block">
        <div className="drink-card-image" style={{ backgroundImage: `url(${drink.image})` }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          {/* Top badges */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="tag">{drink.type}</span>
            {drink.base && <span className="tag">{drink.base}</span>}
          </div>

          {/* Prep time */}
          <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] text-white/70 backdrop-blur-sm">
            ⏱ {drink.preparationTime} min
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold leading-tight">{drink.name}</h3>
            <span className={`shrink-0 text-[10px] font-medium uppercase tracking-wider ${difficultyColor[drink.difficulty] ?? "text-white/50"}`}>
              {drink.difficulty}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/48">{drink.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {drink.flavors.slice(0, 3).map((flavor) => (
              <span key={flavor} className="flavor">{flavor}</span>
            ))}
          </div>
        </div>
      </Link>

      {/* Favorite heart button */}
      <button
        type="button"
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        onClick={() => toggle(drink)}
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-base backdrop-blur-sm transition hover:scale-110"
      >
        {fav ? "♥" : "♡"}
      </button>
    </div>
  );
}
