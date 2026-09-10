import Link from "next/link";
import { notFound } from "next/navigation";
import { cocktails, mocktails } from "@/data/drinks";

export default async function DrinkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const drink = [...cocktails, ...mocktails].find((item) => item.slug === slug);
  if (!drink) notFound();

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-6 py-14 text-white lg:px-10">
      <div className="container mx-auto">
        <Link href={drink.type === "cocktail" ? "/cocktails" : "/mocktails"} className="text-sm text-white/50 hover:text-white">
          ← Back to {drink.type}s
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="recipe-image" style={{ backgroundImage: `url(${drink.image})` }} />
          <div className="py-2">
            <div className="flex flex-wrap gap-2">
              <span className="tag">{drink.type}</span>
              {drink.base && <span className="tag">{drink.base}</span>}
            </div>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">{drink.name}</h1>
            <p className="mt-5 text-lg leading-8 text-white/60">{drink.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Info label="Glass" value={drink.glass} />
              <Info label="Ice" value={drink.ice} />
              <Info label="Method" value={drink.method} />
              <Info label="Difficulty" value={drink.difficulty} />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <section>
            <p className="eyebrow">Ingredients</p>
            <h2 className="section-title">What you need</h2>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {drink.ingredients.map((ingredient) => (
                <div key={ingredient.name} className="flex justify-between gap-6 py-4">
                  <span>{ingredient.name}</span>
                  <span className="text-white/50">{ingredient.amount}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">Garnish: <span className="text-white/80">{drink.garnish}</span></p>
          </section>

          <section>
            <p className="eyebrow">Method</p>
            <h2 className="section-title">How to make it</h2>
            <ol className="mt-6 space-y-5">
              {drink.instructions.map((step, index) => (
                <li key={step} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-white/50">{index + 1}</span>
                  <p className="pt-1 leading-7 text-white/75">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 p-4"><p className="text-xs uppercase tracking-widest text-white/35">{label}</p><p className="mt-2 text-sm text-white/80">{value}</p></div>;
}
