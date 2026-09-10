import Link from "next/link";
import DrinkCard from "@/components/DrinkCard";
import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import { cocktails, mocktails } from "@/data/drinks";

const spirits = ["Whiskey", "Rum", "Vodka", "Gin", "Tequila", "Brandy"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="hero-shell">
        <div className="hero-overlay" />
        <div className="container relative z-10 mx-auto flex min-h-[680px] items-center px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/60">
              Discover your next drink
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Find your next
              <span className="block text-white/55">favorite drink.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Explore cocktails, mocktails, and recipes crafted for every kind
              of occasion.
            </p>
            <div className="mt-9 max-w-2xl">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="button-primary" href="/cocktails">
                Explore Cocktails
              </Link>
              <Link className="button-secondary" href="/mocktails">
                Explore Mocktails
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 lg:px-10">
        <div className="mb-8">
          <p className="eyebrow">Explore</p>
          <h2 className="section-title">Browse by spirit</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {spirits.map((spirit) => (
            <CategoryCard key={spirit} name={spirit} href={`/cocktails?base=${spirit.toLowerCase()}`} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Cocktails</p>
            <h2 className="section-title">Popular classics</h2>
          </div>
          <Link className="text-sm text-white/60 hover:text-white" href="/cocktails">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cocktails.slice(0, 6).map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Mocktails</p>
            <h2 className="section-title">Fresh & alcohol-free</h2>
          </div>
          <Link className="text-sm text-white/60 hover:text-white" href="/mocktails">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mocktails.slice(0, 6).map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-28 lg:px-10">
        <div className="cta-panel">
          <p className="eyebrow">Need inspiration?</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Not sure what to make?
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            Discover something new from our collection of cocktails and mocktails.
          </p>
          <Link className="button-primary mt-7 inline-flex" href="/explore">
            Explore all drinks
          </Link>
        </div>
      </section>
    </div>
  );
}
