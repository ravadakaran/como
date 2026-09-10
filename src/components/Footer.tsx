import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="container mx-auto flex flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-10">
        <div>
          <p className="text-lg font-semibold tracking-[0.25em]">COMO</p>
          <p className="mt-2 text-sm text-white/40">Discover. Mix. Enjoy.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/50">
          <Link href="/cocktails">Cocktails</Link>
          <Link href="/mocktails">Mocktails</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/favorites">Favorites</Link>
        </div>
        <p className="text-xs text-white/30">© 2026 Como</p>
      </div>
    </footer>
  );
}
