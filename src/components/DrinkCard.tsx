import Link from "next/link";
import type { Drink } from "@/types/drink";

export default function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <Link href={`/drink/${drink.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="drink-card-image" style={{ backgroundImage: `url(${drink.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="tag">{drink.type}</span>
          {drink.base && <span className="tag">{drink.base}</span>}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium">{drink.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/50">{drink.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {drink.flavors.slice(0, 3).map((flavor) => <span key={flavor} className="flavor">{flavor}</span>)}
        </div>
      </div>
    </Link>
  );
}
