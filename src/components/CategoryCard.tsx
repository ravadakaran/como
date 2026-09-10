import Link from "next/link";

export default function CategoryCard({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]">
      <div className="mb-8 text-2xl text-white/35 transition group-hover:text-white/70">✦</div>
      <p className="font-medium">{name}</p>
      <p className="mt-1 text-xs text-white/35">Explore</p>
    </Link>
  );
}
