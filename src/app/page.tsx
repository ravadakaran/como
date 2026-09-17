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

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero-shell">
        <div className="hero-overlay" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-white/[.028] blur-[120px]" />

        <div className="container relative z-10 mx-auto flex min-h-[700px] flex-col justify-center px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <p className="animate-fade-up eyebrow mb-5">Discover your next drink</p>

            <h1 className="animate-fade-up delay-100 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[86px]">
              Find your next
              <span className="block text-white/45">favorite drink.</span>
            </h1>

            <p className="animate-fade-up delay-200 mt-7 max-w-xl text-base leading-7 text-white/58 sm:text-lg">
              Hundreds of cocktails and mocktails. Build your bar and discover
              what you can make right now — instantly.
            </p>

            <div className="animate-fade-up delay-300 mt-9 max-w-2xl">
              <SearchBar />
            </div>

            <div className="animate-fade-up delay-400 mt-6 flex flex-wrap gap-3">
              <Link className="button-primary" href="/cocktails">Explore Cocktails</Link>
              <Link className="button-secondary" href="/mocktails">Explore Mocktails</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────── */}
      <section className="border-y border-white/8 bg-white/[.018]">
        <div className="container mx-auto grid grid-cols-2 divide-x divide-white/8 sm:grid-cols-4 lg:px-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-6 py-6 text-center lg:py-7">
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs text-white/38 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Browse by spirit ──────────────────────────── */}
      <section className="container mx-auto px-6 py-20 lg:px-10">
        <div className="mb-8">
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

      {/* ── Popular cocktails ─────────────────────────── */}
      <section className="container mx-auto px-6 pb-20 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Cocktails</p>
            <h2 className="section-title">Popular classics</h2>
          </div>
          <Link className="text-sm text-white/50 transition hover:text-white" href="/cocktails">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cocktails.slice(0, 6).map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      </section>

      {/* ── My Bar CTA ────────────────────────────────── */}
      <section className="container mx-auto px-6 pb-20 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[.04] blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Your personal bar</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build your bar. <br className="hidden sm:block" />
              <span className="text-white/50">See what you can make.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
              Add the spirits and ingredients you have at home. Como instantly
              shows every drink you can mix right now — and what's worth picking up next.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button-primary" href="/my-bar">Build My Bar →</Link>
              <Link className="button-secondary" href="/what-can-i-make">What can I make?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fresh mocktails ───────────────────────────── */}
      <section className="container mx-auto px-6 pb-20 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Mocktails</p>
            <h2 className="section-title">Fresh &amp; alcohol-free</h2>
          </div>
          <Link className="text-sm text-white/50 transition hover:text-white" href="/mocktails">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mocktails.slice(0, 6).map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      </section>

      {/* ── Explore CTA ───────────────────────────────── */}
      <section className="container mx-auto px-6 pb-28 lg:px-10">
        <div className="cta-panel">
          <p className="eyebrow">Need inspiration?</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Not sure what to make?
          </h2>
          <p className="mt-4 max-w-xl text-white/55 leading-7">
            Browse the full Como collection — filter by spirit, difficulty, or
            method to find something worth making tonight.
          </p>
          <Link className="button-primary mt-8 inline-flex" href="/explore">
            Explore all drinks →
          </Link>
        </div>
      </section>

    </div>
  );
}
