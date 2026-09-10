import Link from "next/link";
import { cocktails, mocktails } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";

export default function ExplorePage() {
  const drinks = [...cocktails, ...mocktails];
  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-20 text-white lg:px-10">
      <div className="container mx-auto">
        <p className="eyebrow">Discover</p>
        <h1 className="page-title">Explore drinks</h1>
        <p className="page-lead">Browse the Como collection and find something worth making.</p>
        <div className="mb-8 mt-10 flex flex-wrap gap-2">
          {["All", "Cocktails", "Mocktails", "Whiskey", "Rum", "Vodka", "Gin", "Tequila"].map((item) => (
            <Link key={item} href={item === "All" ? "/explore" : item === "Cocktails" ? "/cocktails" : item === "Mocktails" ? "/mocktails" : `/cocktails?base=${item.toLowerCase()}`} className="filter-pill">
              {item}
            </Link>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drinks.map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
        </div>
      </div>
    </div>
  );
}
