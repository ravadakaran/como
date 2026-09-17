"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search${value.trim() ? `?q=${encodeURIComponent(value.trim())}` : ""}`);
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/30 p-2 backdrop-blur-md">
      <span className="pl-3 text-white/35">⌕</span>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-white/35"
        placeholder="Search drinks, ingredients, spirits, or brands..."
        aria-label="Search drinks"
      />
      <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85" type="submit">
        Search
      </button>
    </form>
  );
}
