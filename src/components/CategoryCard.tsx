import Link from "next/link";
import { cocktails } from "@/data/drinks";

const spiritMeta: Record<string, { icon: string; color: string }> = {
  Whiskey: { icon: "🥃", color: "from-amber-900/30 to-transparent" },
  Rum:     { icon: "🌴", color: "from-orange-900/30 to-transparent" },
  Vodka:   { icon: "❄️",  color: "from-blue-900/20 to-transparent" },
  Gin:     { icon: "🌿", color: "from-emerald-900/25 to-transparent" },
  Tequila: { icon: "🌵", color: "from-yellow-900/25 to-transparent" },
  Brandy:  { icon: "🍷", color: "from-red-900/25 to-transparent" },
};

export default function CategoryCard({ name, href }: { name: string; href: string }) {
  const meta = spiritMeta[name] ?? { icon: "✦", color: "from-white/5 to-transparent" };
  const count = cocktails.filter(
    (d) => d.base?.toLowerCase() === name.toLowerCase(),
  ).length;

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${meta.color} bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/22 hover:shadow-lg`}
    >
      <div className="mb-6 text-3xl transition duration-300 group-hover:scale-110">
        {meta.icon}
      </div>
      <p className="font-semibold">{name}</p>
      <p className="mt-1 text-xs text-white/35">
        {count > 0 ? `${count} drinks` : "Explore"}
      </p>
      <div className="absolute right-4 top-4 text-lg text-white/15 transition group-hover:translate-x-1 group-hover:text-white/35">
        →
      </div>
    </Link>
  );
}
