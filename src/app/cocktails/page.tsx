import DrinkCard from "@/components/DrinkCard";
import { cocktails } from "@/data/drinks";

type CocktailsPageProps = {
  searchParams: Promise<{ base?: string | string[] }>;
};

export default async function CocktailsPage({ searchParams }: CocktailsPageProps) {
  const params = await searchParams;
  const rawBase = Array.isArray(params.base) ? params.base[0] : params.base;
  const base = rawBase?.trim().toLowerCase();

  const drinks = base
    ? cocktails.filter((drink) => drink.base?.trim().toLowerCase() === base)
    : cocktails;

  const title = base
    ? `${base.charAt(0).toUpperCase()}${base.slice(1)} Cocktails`
    : "Cocktails";

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-20 text-white lg:px-10">
      <div className="container mx-auto">
        <p className="eyebrow">The collection</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-lead">
          {base
            ? `Cocktails made with ${base}, organized from the Como collection.`
            : "Classic and modern drinks, organized by spirit and flavor."}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <a className="filter-pill" href="/cocktails">All</a>
          {[
            "Whiskey",
            "Rum",
            "Vodka",
            "Gin",
            "Tequila",
            "Brandy",
          ].map((spirit) => (
            <a
              key={spirit}
              className="filter-pill"
              href={`/cocktails?base=${spirit.toLowerCase()}`}
            >
              {spirit}
            </a>
          ))}
        </div>

        {drinks.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {drinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-white/60">
            No cocktails found for {title.replace(" Cocktails", "")} yet.
          </div>
        )}
      </div>
    </div>
  );
}
