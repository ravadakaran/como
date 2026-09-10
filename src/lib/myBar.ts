import type { InventoryItem } from "@/lib/inventoryMatcher";

export type MyBarItem = InventoryItem & {
  quantity: number;
  unit: "bottle" | "ml" | "count";
};

export const MY_BAR_STORAGE_KEY = "como-my-bar-v2";

export function loadMyBar(): MyBarItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(MY_BAR_STORAGE_KEY) || window.localStorage.getItem("como-my-bar-v1");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => ({
      ...item,
      quantity: typeof item.quantity === "number" && item.quantity > 0 ? item.quantity : 1,
      unit: item.unit === "ml" || item.unit === "count" ? item.unit : "bottle",
    }));
  } catch {
    return [];
  }
}

export function saveMyBar(items: MyBarItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(MY_BAR_STORAGE_KEY, JSON.stringify(items));
}

export function clearMyBar() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(MY_BAR_STORAGE_KEY);
  window.localStorage.removeItem("como-my-bar-v1");
}
