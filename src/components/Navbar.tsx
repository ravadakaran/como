import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">COMO</Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/">Home</Link>
          <Link href="/cocktails">Cocktails</Link>
          <Link href="/mocktails">Mocktails</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/what-can-i-make">What can I make?</Link>
          <Link href="/my-bar">My Bar</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/search" className="text-sm text-white/65 hover:text-white">Search</Link>
          <Link href="/favorites" className="hidden text-sm text-white/65 hover:text-white sm:block">Favorites</Link>
        </div>
      </div>
    </header>
  );
}
