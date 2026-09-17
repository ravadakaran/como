import Link from "next/link";
import { notFound } from "next/navigation";
import { cocktails, mocktails } from "@/data/drinks";

const difficultyColor: Record<string, string> = {
  easy: "#34d399",
  medium: "#fbbf24",
  advanced: "#f87171",
};

export async function generateStaticParams() {
  return [...cocktails, ...mocktails].map((d) => ({ slug: d.slug }));
}

export default async function DrinkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const all = [...cocktails, ...mocktails];
  const drink = all.find((d) => d.slug === slug);
  if (!drink) notFound();

  const related = all
    .filter((d) => d.id !== drink.id && d.base === drink.base)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Back link */}
      <div className="container mx-auto px-5 pt-22 pb-0 sm:px-8 lg:px-10 lg:pt-28">
        <Link
          href={drink.type === "cocktail" ? "/cocktails" : "/mocktails"}
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          ← Back to {drink.type}s
        </Link>
      </div>

      {/* Hero: image + info */}
      <div className="container mx-auto px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* Image — sticky only on desktop (via CSS .recipe-image) */}
          <div
            className="recipe-image"
            style={{ backgroundImage: `url(${drink.image})` }}
          />

          {/* Info */}
          <div className="py-1">
            <div className="flex flex-wrap gap-2">
              <span className="tag">{drink.type}</span>
              {drink.base && <span className="tag">{drink.base}</span>}
              <span className="tag">{drink.method}</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {drink.name}
            </h1>

            <p className="mt-4 text-base leading-7 text-white/55">{drink.description}</p>

            {/* Flavors */}
            {drink.flavors.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {drink.flavors.map((f) => (
                  <span key={f} className="flavor">{f}</span>
                ))}
              </div>
            )}

            {/* Specs */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <InfoTile label="Glass" value={drink.glass} />
              <InfoTile label="Ice" value={drink.ice} />
              <InfoTile
                label="Difficulty"
                value={drink.difficulty}
                color={difficultyColor[drink.difficulty]}
              />
              <InfoTile label="Prep" value={`${drink.preparationTime} min`} />
            </div>

            {/* Ingredients */}
            <div className="mt-8">
              <p className="eyebrow">Ingredients</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">What you need</h2>
              <div className="mt-4 divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/10">
                {drink.ingredients.map((ing, i) => (
                  <div
                    key={`${ing.name}-${i}`}
                    className="flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-white/[.025]"
                  >
                    <span className="text-sm font-medium">{ing.name}</span>
                    <span className="shrink-0 text-xs text-white/45">{ing.amount}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/40">
                Garnish: <span className="text-white/75">{drink.garnish}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 rounded-[24px] border border-white/10 bg-white/[.022] p-6 sm:p-8 lg:rounded-[28px]">
          <p className="eyebrow">Method</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">How to make it</h2>
          <ol className="mt-6 space-y-5">
            {drink.instructions.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[.04] text-sm font-medium text-white/55">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-sm leading-7 text-white/70">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Related drinks */}
        {related.length > 0 && (
          <div className="mt-14">
            <p className="eyebrow">More like this</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {drink.base ? `More ${drink.base} drinks` : "Similar drinks"}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/drink/${r.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    className="drink-card-image"
                    style={{ backgroundImage: `url(${r.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute left-3 top-3 flex gap-2">
                      {r.base && <span className="tag">{r.base}</span>}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{r.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/40">{r.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoTile({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[.025] p-3 sm:rounded-2xl sm:p-4">
      <p className="text-[9px] uppercase tracking-widest text-white/30 sm:text-[10px]">{label}</p>
      <p className="mt-1.5 text-xs font-medium capitalize sm:text-sm"
        style={color ? { color } : { color: "rgba(255,255,255,.82)" }}>
        {value}
      </p>
    </div>
  );
}
