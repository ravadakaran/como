import type { Drink, Ingredient } from "@/types/drink";
import { ingredientDefinitions } from "@/data/ingredients";
import { productAliases, type ProductMatch } from "@/lib/drinkSearch";

export type InventoryItem = {
  input: string;
  label: string;
  ingredientId?: string;
  product?: ProductMatch;
  category?: string;
};

export type DrinkMatch = {
  drink: Drink;
  matched: Ingredient[];
  missing: Ingredient[];
  percentage: number;
  exactMatch: boolean;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findIngredient(value: string) {
  const normalized = normalize(value);
  if (!normalized) return undefined;

  return ingredientDefinitions.find((ingredient) => {
    const candidates = [ingredient.id, ingredient.name, ...ingredient.aliases].map(normalize);
    return candidates.some(
      (candidate) => normalized === candidate || normalized.includes(candidate) || candidate.includes(normalized),
    );
  });
}

function findProduct(value: string) {
  const normalized = normalize(value);
  if (!normalized) return undefined;

  return productAliases.find((product) => {
    const candidates = [product.product, product.brand, ...product.aliases].map(normalize);
    return candidates.some(
      (candidate) => normalized === candidate || normalized.includes(candidate) || candidate.includes(normalized),
    );
  });
}

export function resolveInventoryInput(input: string): InventoryItem {
  const product = findProduct(input);
  if (product) {
    return {
      input,
      label: product.product,
      product,
      category: product.category,
    };
  }

  const ingredient = findIngredient(input);
  if (ingredient) {
    return {
      input,
      label: ingredient.name,
      ingredientId: ingredient.id,
      category: ingredient.category,
    };
  }

  return { input, label: input.trim() };
}

function productMatchesIngredient(product: ProductMatch, ingredient: Ingredient, drink: Drink) {
  const productCategory = normalize(product.category);
  const ingredientName = normalize(ingredient.name);
  const ingredientId = normalize(ingredient.id);
  const drinkBase = normalize(drink.base ?? "");

  // A branded product is compatible with a recipe when its spirit family
  // matches the drink base. We do not claim the recipe specifically calls for that brand.
  if (ingredient.category === "spirit") {
    if (productCategory === drinkBase) return true;
    if (productCategory === "whiskey" && ["whiskey", "irish whiskey"].includes(drinkBase)) return true;
    if (productCategory === "rum" && drinkBase === "rum") return true;
    if (productCategory === "scotch" && drinkBase === "scotch") return true;
    if (productCategory === "vodka" && drinkBase === "vodka") return true;
    if (productCategory === "gin" && drinkBase === "gin") return true;
    if (productCategory === "tequila" && drinkBase === "tequila") return true;
  }

  return ingredientName === productCategory || ingredientId === productCategory;
}

function inventoryMatchesIngredient(item: InventoryItem, ingredient: Ingredient, drink: Drink) {
  if (item.ingredientId && item.ingredientId === ingredient.id) return true;
  if (item.product && productMatchesIngredient(item.product, ingredient, drink)) return true;

  // Category-level matching is intentionally limited to spirit families.
  // This lets "rum" or a rum brand cover white/dark/aged rum recipes without
  // incorrectly treating unrelated ingredients as interchangeable.
  if (item.category === "Rum" && ingredient.category === "spirit" && normalize(drink.base ?? "") === "rum") return true;
  if (item.category === "Scotch" && ingredient.category === "spirit" && normalize(drink.base ?? "") === "scotch") return true;
  if (item.category === "Whiskey" && ingredient.category === "spirit" && ["whiskey", "irish whiskey"].includes(normalize(drink.base ?? ""))) return true;
  if (item.category === "Vodka" && ingredient.category === "spirit" && normalize(drink.base ?? "") === "vodka") return true;
  if (item.category === "Gin" && ingredient.category === "spirit" && normalize(drink.base ?? "") === "gin") return true;
  if (item.category === "Tequila" && ingredient.category === "spirit" && normalize(drink.base ?? "") === "tequila") return true;

  return false;
}

export function matchDrinks(drinks: Drink[], inventory: InventoryItem[], minimumPercentage = 25): DrinkMatch[] {
  if (inventory.length === 0) return [];

  return drinks
    .map((drink) => {
      const matched: Ingredient[] = [];
      const missing: Ingredient[] = [];

      for (const ingredient of drink.ingredients) {
        const hasIngredient = inventory.some((item) => inventoryMatchesIngredient(item, ingredient, drink));
        if (hasIngredient) matched.push(ingredient);
        else missing.push(ingredient);
      }

      const percentage = Math.round((matched.length / drink.ingredients.length) * 100);

      return {
        drink,
        matched,
        missing,
        percentage,
        exactMatch: missing.length === 0,
      };
    })
    .filter((match) => match.percentage >= minimumPercentage)
    .sort((a, b) => b.percentage - a.percentage || a.missing.length - b.missing.length || a.drink.name.localeCompare(b.drink.name));
}

export function ingredientSuggestions(query: string, limit = 8) {
  const normalized = normalize(query);
  if (!normalized) return ingredientDefinitions.slice(0, limit);

  return ingredientDefinitions
    .map((ingredient) => {
      const text = normalize([ingredient.name, ingredient.id, ...ingredient.aliases].join(" "));
      let score = 0;
      if (text.includes(normalized)) score += 10;
      if (normalize(ingredient.name).startsWith(normalized)) score += 8;
      return { ingredient, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.ingredient.name.localeCompare(b.ingredient.name))
    .slice(0, limit)
    .map(({ ingredient }) => ingredient);
}

export function productSuggestions(query: string, limit = 6) {
  const normalized = normalize(query);
  if (!normalized) return productAliases.slice(0, limit);

  return productAliases
    .map((product) => {
      const text = normalize([product.brand, product.product, ...product.aliases].join(" "));
      let score = 0;
      if (text.includes(normalized)) score += 10;
      if (normalize(product.product).startsWith(normalized)) score += 8;
      return { product, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.product.product.localeCompare(b.product.product))
    .slice(0, limit)
    .map(({ product }) => product);
}
