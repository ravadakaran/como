"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useFavorites } from "@/lib/favorites";

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
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useFavorites();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="shrink-0 text-lg font-semibold tracking-[0.24em] text-white transition hover:opacity-80 sm:text-xl"
          >
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
                    ? "text-white font-medium"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute inset-x-3 bottom-0.5 h-px rounded-full bg-white/70" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link
              href="/search"
              aria-label="Search drinks"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/60 transition hover:bg-white/[.06] hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <path d="M15 15l-3-3" strokeLinecap="round" />
              </svg>
            </Link>

            <Link
              href="/favorites"
              aria-label="Favorites"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm text-white/60 transition hover:bg-white/[.06] hover:text-white"
            >
              <span className="text-base leading-none">♥</span>
              <span className="hidden sm:inline">Favorites</span>
              {favorites.length > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1 text-[10px] font-semibold text-white">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white/80 transition hover:bg-white/[.08] active:scale-95 md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-200 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-3 top-[4.5rem] z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#121212]/98 p-3 shadow-2xl backdrop-blur-2xl transition-all duration-200 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition ${
                isActive(href)
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/[.06] hover:text-white"
              }`}
            >
              <span>{label}</span>
              {isActive(href) && (
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,.8)]" />
              )}
            </Link>
          ))}

          <div className="my-2 border-t border-white/8" />

          <Link
            href="/favorites"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/70 transition hover:bg-white/[.06] hover:text-white"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base text-rose-400">♥</span>
              <span>Favorites</span>
            </div>
            {favorites.length > 0 && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">
                {favorites.length} saved
              </span>
            )}
          </Link>

          <Link
            href="/search"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-base font-medium text-white/70 transition hover:bg-white/[.06] hover:text-white"
          >
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M15 15l-3-3" strokeLinecap="round" />
            </svg>
            <span>Search drinks & ingredients</span>
          </Link>
        </div>
      </div>
    </>
  );
}
