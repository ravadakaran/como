"use client";

import DrinkCard from "@/components/DrinkCard";
import { useFavorites } from "@/lib/favorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-6 pb-28 pt-28 text-white lg:px-10 lg:pt-32">
      <div className="container mx-auto">

        <header className="max-w-4xl">
          <p className="eyebrow">Your collection</p>
          <h1 className="page-title">Favorites</h1>
          <p className="page-lead max-w-2xl">
            Drinks you&apos;ve hearted — saved right in your browser.
          </p>
        </header>

        {favorites.length === 0 ? (
          <div className="mt-16 rounded-[28px] border border-white/10 bg-white/[.025] px-8 py-20 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[.04] text-3xl">
              ♡
            </div>
            <h2 className="text-2xl font-semibold">No favorites yet</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/42">
              Tap the heart on any drink card to save it here. Your favorites
              are stored locally and never leave your device.
            </p>
            <a
              href="/explore"
              className="button-primary mt-8 inline-flex"
            >
              Explore drinks →
            </a>
          </div>
        ) : (
          <>
            <p className="mt-10 text-sm text-white/40">
              {favorites.length} saved {favorites.length === 1 ? "drink" : "drinks"}
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
            </div>
          </>
        )}

      </div>
    </main>
  );
}
