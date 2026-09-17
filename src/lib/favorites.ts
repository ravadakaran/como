"use client";

import { useCallback, useEffect, useState } from "react";
import type { Drink } from "@/types/drink";

const STORAGE_KEY = "como-favorites-v1";

export function loadFavorites(): Drink[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(drinks: Drink[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(drinks));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Drink[]>([]);

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.some((d) => d.id === id),
    [favorites],
  );

  const toggle = useCallback((drink: Drink) => {
    setFavorites((prev) => {
      const exists = prev.some((d) => d.id === drink.id);
      const next = exists ? prev.filter((d) => d.id !== drink.id) : [...prev, drink];
      saveFavorites(next);
      return next;
    });
  }, []);

  return { favorites, isFavorite, toggle };
}
