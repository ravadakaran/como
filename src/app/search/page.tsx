import { cocktails, mocktails } from "@/data/drinks";
import DrinkCard from "@/components/DrinkCard";
import SearchBar from "@/components/SearchBar";
import { searchDrinks } from "@/lib/drinkSearch";

const popular = [...cocktails, ...mocktails].slice(0, 6);

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
    <main className="min-h-screen bg-[#0b0b0b] px-6 pb-28 pt-28 text-white lg:px-10 lg:pt-32">
      <div className="container mx-auto">

        <header className="max-w-4xl">
          <p className="eyebrow">Find a drink</p>
          <h1 className="page-title">Search</h1>
        </header>

        <div className="mt-8 max-w-2xl">
          <SearchBar defaultValue={rawQuery} />
        </div>

        {/* Product recognition banner */}
        {product && rawQuery && (
          <div className="mt-6 max-w-3xl overflow-hidden rounded-2xl border border-white/12 bg-white/[.03] p-5">
            <p className="eyebrow mb-2">Product recognized</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-lg font-semibold">{product.product}</h2>
              <span className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-0.5 text-xs text-white/50">
                {product.category}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/48">
              Showing recipes that are compatible with {product.product}. Brand
              compatibility does not mean the recipe specifically requires that bottle.
            </p>
          </div>
        )}

        {/* Result count */}
        <p className="mt-8 text-sm text-white/45">
          {rawQuery
            ? `${results.length} result${results.length === 1 ? "" : "s"} for "${rawQuery}"`
            : `${all.length} drinks in the collection`}
        </p>

        {/* Results grid */}
        {results.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[.025] px-8 py-20 text-center">
            <p className="text-xl font-semibold">No drinks found for &ldquo;{rawQuery}&rdquo;</p>
            <p className="mt-3 text-sm text-white/42">
              Try a drink name, ingredient, spirit, or brand like &ldquo;Red Label&rdquo;.
            </p>
          </div>
        )}

        {/* Popular when no query */}
        {!rawQuery && (
          <div className="mt-16">
            <p className="eyebrow mb-2">Popular picks</p>
            <h2 className="section-title mb-7">Start here</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popular.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
