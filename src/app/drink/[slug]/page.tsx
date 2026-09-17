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

  // Related: same base spirit, exclude self, up to 3
  const related = all
    .filter((d) => d.id !== drink.id && d.base === drink.base)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ── Back link ─────────────────────────────────── */}
      <div className="container mx-auto px-6 pt-24 pb-0 lg:px-10 lg:pt-28">
        <Link
          href={drink.type === "cocktail" ? "/cocktails" : "/mocktails"}
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <span>←</span>
          <span>Back to {drink.type}s</span>
        </Link>
      </div>

      {/* ── Hero grid ─────────────────────────────────── */}
      <div className="container mx-auto px-6 py-10 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* Image */}
          <div
            className="recipe-image sticky top-28"
            style={{ backgroundImage: `url(${drink.image})` }}
          />

          {/* Info */}
          <div className="py-2">
            <div className="flex flex-wrap gap-2">
              <span className="tag">{drink.type}</span>
              {drink.base && <span className="tag">{drink.base}</span>}
              <span className="tag">{drink.method}</span>
            </div>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              {drink.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/58">{drink.description}</p>

            {/* Flavor tags */}
            {drink.flavors.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {drink.flavors.map((f) => (
                  <span key={f} className="flavor">{f}</span>
                ))}
              </div>
            )}

            {/* Specs grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <InfoTile label="Glass" value={drink.glass} />
              <InfoTile label="Ice" value={drink.ice} />
              <InfoTile
                label="Difficulty"
                value={drink.difficulty}
                color={difficultyColor[drink.difficulty]}
              />
              <InfoTile label="Prep time" value={`${drink.preparationTime} min`} />
            </div>

            {/* Ingredients */}
            <div className="mt-10">
              <p className="eyebrow">Ingredients</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">What you need</h2>
              <div className="mt-5 divide-y divide-white/8 rounded-2xl border border-white/10 overflow-hidden">
                {drink.ingredients.map((ing, i) => (
                  <div
                    key={`${ing.name}-${i}`}
                    className="flex items-center justify-between gap-6 px-5 py-4 hover:bg-white/[.025] transition-colors"
                  >
                    <span className="font-medium">{ing.name}</span>
                    <span className="text-sm text-white/48">{ing.amount}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/45">
                Garnish:{" "}
                <span className="text-white/80">{drink.garnish}</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Instructions ──────────────────────────────── */}
        <div className="mt-16 rounded-[28px] border border-white/10 bg-white/[.022] p-7 sm:p-10">
          <p className="eyebrow">Method</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">How to make it</h2>
          <ol className="mt-8 space-y-6">
            {drink.instructions.map((step, i) => (
              <li key={i} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[.04] text-sm font-medium text-white/60">
                  {i + 1}
                </span>
                <p className="pt-2 leading-7 text-white/72">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Related drinks ────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">More like this</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {drink.base ? `More ${drink.base} drinks` : "Similar drinks"}
                </h2>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="absolute left-4 top-4 flex gap-2">
                      {r.base && <span className="tag">{r.base}</span>}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{r.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/45">{r.description}</p>
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

function InfoTile({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.025] p-4">
      <p className="text-[10px] uppercase tracking-widest text-white/32">{label}</p>
      <p
        className="mt-2 text-sm font-medium capitalize"
        style={color ? { color } : { color: "rgba(255,255,255,.82)" }}
      >
        {value}
      </p>
    </div>
  );
}
