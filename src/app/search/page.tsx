import { cocktails, mocktails } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";
import SearchBar from "@/components/SearchBar";
import { searchDrinks } from "@/lib/drinkSearch";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const rawQuery = (params.q ?? "").trim();
  const all = [...cocktails, ...mocktails];
  const { results, product } = searchDrinks(all, rawQuery);

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-20 text-white lg:px-10">
      <div className="container mx-auto">
        <p className="eyebrow">Find a drink</p>
        <h1 className="page-title">Search</h1>
        <div className="mt-8 max-w-2xl"><SearchBar defaultValue={rawQuery} /></div>

        {product && rawQuery && (
          <div className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Product recognized</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-lg font-medium">{product.product}</h2>
              <span className="text-sm text-white/45">{product.category}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Showing recipes that use or are compatible with {product.product}. Brand compatibility does not mean the original classic recipe requires that exact bottle.
            </p>
          </div>
        )}

        <p className="mt-8 text-sm text-white/50">
          {rawQuery ? `${results.length} result${results.length === 1 ? "" : "s"} for “${rawQuery}”` : "All drinks"}
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
        </div>

        {results.length === 0 && (
          <div className="rounded-3xl border border-white/10 p-12 text-center">
            <p className="text-xl">No drinks found.</p>
            <p className="mt-2 text-white/50">Try a drink, ingredient, spirit, or brand such as “Red Label”.</p>
          </div>
        )}
      </div>
    </div>
  );
}
