"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const links = [
  ["Home", "/"],
  ["Cocktails", "/cocktails"],
  ["Mocktails", "/mocktails"],
  ["Explore", "/explore"],
  ["What can I make?", "/what-can-i-make"],
  ["My Bar", "/my-bar"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/88 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="shrink-0 text-lg font-semibold tracking-[0.26em] sm:text-xl">
          COMO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-xl px-3 py-2 text-sm transition-colors duration-200 ${
                isActive(href)
                  ? "text-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {label}
              {isActive(href) && (
                <span className="absolute inset-x-3 bottom-0.5 h-px rounded-full bg-white/60" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white/55 transition hover:bg-white/[.06] hover:text-white"
          >
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M15 15l-3-3" strokeLinecap="round" />
            </svg>
          </Link>

          <Link
            href="/favorites"
            className="hidden px-1 text-sm text-white/50 transition hover:text-white sm:block"
          >
            Favorites
          </Link>

          {/* Mobile hamburger */}
          <details ref={detailsRef} className="mobile-menu relative md:hidden">
            <summary
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white/75 transition hover:bg-white/[.08] [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <span className="text-base leading-none">☰</span>
            </summary>
            <div className="absolute right-0 top-12 w-[min(84vw,290px)] overflow-hidden rounded-2xl border border-white/10 bg-[#111]/98 p-2 shadow-2xl backdrop-blur-xl">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`block rounded-xl px-4 py-3 text-sm transition hover:bg-white/[.06] ${
                    isActive(href) ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="mx-2 my-1 border-t border-white/8" />
              <Link
                href="/favorites"
                className="block rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[.06] hover:text-white"
              >
                Favorites
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
