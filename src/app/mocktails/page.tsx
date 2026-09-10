import DrinkCard from "@/components/DrinkCard";
import { mocktails } from "@/data/drinks";

export default function MocktailsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-20 text-white lg:px-10">
      <div className="container mx-auto">
        <p className="eyebrow">The collection</p>
        <h1 className="page-title">Mocktails</h1>
        <p className="page-lead">Fresh, flavorful drinks with zero alcohol.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mocktails.map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
        </div>
      </div>
    </div>
  );
}
