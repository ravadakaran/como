import DrinkCard from "@/components/DrinkCard";
import { mocktails } from "@/data/drinks";

export default function MocktailsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 pb-24 pt-24 text-white sm:px-8 sm:pt-28 lg:px-10">
      <div className="container mx-auto">
        <header className="max-w-4xl">
          <p className="eyebrow">The collection</p>
          <h1 className="page-title">Mocktails</h1>
          <p className="page-lead">Fresh, flavorful drinks with zero alcohol.</p>
        </header>
        <p className="mt-8 text-sm text-white/40">
          <span className="font-medium text-white">{mocktails.length}</span> mocktails
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {mocktails.map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
        </div>
      </div>
    </main>
  );
}
