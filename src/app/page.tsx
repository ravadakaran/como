import Link from "next/link";
import DrinkCard from "@/components/DrinkCard";
import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import { cocktails, mocktails } from "@/data/drinks";

const spirits = ["Whiskey", "Rum", "Vodka", "Gin", "Tequila", "Brandy"];

const stats = [
  { value: `${cocktails.length}+`, label: "Cocktails" },
  { value: `${mocktails.length}+`, label: "Mocktails" },
  { value: "10+", label: "Base spirits" },
  { value: "Instant", label: "Bar matching" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ── Hero ────────────────────────────────────── */}
      <section className="hero-shell">
        <div className="hero-overlay" />
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white/[.028] blur-[100px]" />

        <div className="container relative z-10 mx-auto flex min-h-[620px] flex-col justify-center px-5 py-24 sm:min-h-[680px] sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="animate-fade-up eyebrow mb-4">Discover your next drink</p>
            <h1 className="animate-fade-up delay-100 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[84px]">
              Find your next
              <span className="block text-white/42">favorite drink.</span>
            </h1>
            <p className="animate-fade-up delay-200 mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:max-w-xl">
              Hundreds of cocktails and mocktails. Build your bar and discover
              what you can make right now.
            </p>
            <div className="animate-fade-up delay-300 mt-7 max-w-2xl">
              <SearchBar />
            </div>
            <div className="animate-fade-up delay-400 mt-5 flex flex-wrap gap-3">
              <Link className="button-primary" href="/cocktails">Explore Cocktails</Link>
              <Link className="button-secondary" href="/mocktails">Explore Mocktails</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────── */}
      <section className="border-y border-white/8 bg-white/[.018]">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 lg:px-10">
          {stats.map(({ value, label }, i) => (
            <div key={label} className={`px-5 py-5 text-center ${i < 3 ? "border-r border-white/8" : ""} sm:border-r sm:last:border-r-0`}>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">{value}</p>
              <p className="mt-1 text-[10px] text-white/38 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Browse by spirit ────────────────────────── */}
      <section className="container mx-auto px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-7">
          <p className="eyebrow">Explore</p>
          <h2 className="section-title">Browse by spirit</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {spirits.map((spirit) => (
            <CategoryCard
              key={spirit}
              name={spirit}
              href={`/cocktails?base=${spirit.toLowerCase()}`}
            />
          ))}
        </div>
      </section>

      {/* ── Popular cocktails ───────────────────────── */}
      <section className="container mx-auto px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Cocktails</p>
            <h2 className="section-title">Popular classics</h2>
          </div>
          <Link className="shrink-0 text-sm text-white/50 transition hover:text-white" href="/cocktails">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {cocktails.slice(0, 6).map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      </section>

      {/* ── My Bar CTA ──────────────────────────────── */}
      <section className="container mx-auto px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111] p-6 sm:p-9 sm:rounded-[32px] lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/[.04] blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Your personal bar</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Build your bar. <span className="text-white/45">See what you can make.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/42">
              Add spirits and ingredients you have at home. Como instantly shows every drink
              you can mix right now — and what's worth picking up next.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="button-primary" href="/my-bar">Build My Bar →</Link>
              <Link className="button-secondary" href="/what-can-i-make">What can I make?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fresh mocktails ─────────────────────────── */}
      <section className="container mx-auto px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Mocktails</p>
            <h2 className="section-title">Fresh &amp; alcohol-free</h2>
          </div>
          <Link className="shrink-0 text-sm text-white/50 transition hover:text-white" href="/mocktails">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {mocktails.slice(0, 6).map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      </section>

      {/* ── Explore CTA ─────────────────────────────── */}
      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-10">
        <div className="cta-panel">
          <p className="eyebrow">Need inspiration?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Not sure what to make?
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
            Browse the full Como collection — filter by spirit, difficulty, or method.
          </p>
          <Link className="button-primary mt-7 inline-flex" href="/explore">
            Explore all drinks →
          </Link>
        </div>
      </section>

    </div>
  );
}
