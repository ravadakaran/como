import type { Drink, Ingredient } from "@/types/drink";

export type ProductMatch = {
  brand: string;
  product: string;
  category: string;
  aliases: string[];
};

export const productAliases: ProductMatch[] = [
  { brand: "Johnnie Walker", product: "Johnnie Walker Red Label", category: "Scotch", aliases: ["johnnie walker red label", "johnny walker red label", "johnnie walker red", "johnny walker red", "jw red", "red label"] },
  { brand: "Johnnie Walker", product: "Johnnie Walker Black Label", category: "Scotch", aliases: ["johnnie walker black label", "johnny walker black label", "johnnie walker black", "johnny walker black", "jw black", "black label"] },
  { brand: "Chivas Regal", product: "Chivas Regal 12", category: "Scotch", aliases: ["chivas", "chivas regal", "chivas 12", "chivas regal 12"] },
  { brand: "Dewar's", product: "Dewar's 12", category: "Scotch", aliases: ["dewars", "dewar's", "dewars 12", "dewar's 12"] },
  { brand: "Jameson", product: "Jameson Irish Whiskey", category: "Whiskey", aliases: ["jameson", "jameson whiskey", "jameson irish whiskey"] },
  { brand: "Jack Daniel's", product: "Jack Daniel's Old No. 7", category: "Whiskey", aliases: ["jack daniels", "jack daniel's", "jack", "old no 7", "old no. 7"] },
  { brand: "Bacardi", product: "Bacardi Carta Blanca", category: "Rum", aliases: ["bacardi", "bacardi white", "bacardi carta blanca"] },
  { brand: "Captain Morgan", product: "Captain Morgan Original Spiced Gold", category: "Rum", aliases: ["captain morgan", "captain morgan spiced", "spiced gold"] },
  { brand: "Absolut", product: "Absolut Vodka", category: "Vodka", aliases: ["absolut", "absolut vodka"] },
  { brand: "Smirnoff", product: "Smirnoff No. 21 Vodka", category: "Vodka", aliases: ["smirnoff", "smirnoff vodka", "smirnoff no 21"] },
  { brand: "Bombay Sapphire", product: "Bombay Sapphire Gin", category: "Gin", aliases: ["bombay", "bombay sapphire", "bombay gin"] },
  { brand: "Tanqueray", product: "Tanqueray London Dry Gin", category: "Gin", aliases: ["tanqueray", "tanqueray gin", "london dry"] },
  { brand: "Don Julio", product: "Don Julio Blanco", category: "Tequila", aliases: ["don julio", "don julio blanco"] },
  { brand: "Jose Cuervo", product: "Jose Cuervo Especial Silver", category: "Tequila", aliases: ["jose cuervo", "cuervo", "cuervo silver"] },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function productForQuery(query: string) {
  const normalizedQuery = normalize(query);
  return productAliases.find((product) =>
    product.aliases.some((alias) => {
      const normalizedAlias = normalize(alias);
      return (
        normalizedQuery === normalizedAlias ||
        normalizedQuery.includes(normalizedAlias) ||
        normalizedAlias.includes(normalizedQuery)
      );
    }),
  );
}

function ingredientSearchText(ingredient: Ingredient) {
  return normalize([
    ingredient.id,
    ingredient.name,
    ingredient.category,
    ...ingredient.aliases,
    ingredient.amount,
  ].join(" "));
}

function productCompatibleWithDrink(product: ProductMatch, drink: Drink) {
  const base = normalize(drink.base ?? "");
  const category = normalize(product.category);

  if (base === category || base.includes(category) || category.includes(base)) return true;

  // Scotch is a whisky family, but brand searches should stay conservative:
  // a Scotch product should not automatically match bourbon/rye recipes.
  return product.category === "Whiskey" && ["whiskey", "irish whiskey"].includes(base);
}

export function searchDrinks(drinks: Drink[], query: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return { results: drinks, product: undefined as ProductMatch | undefined };

  const product = productForQuery(query);
  const terms = normalizedQuery.split(/\\s+/).filter(Boolean);

  const results = drinks
    .map((drink) => {
      const searchable = normalize([
        drink.name,
        drink.base ?? "",
        drink.description,
        drink.glass,
        drink.garnish,
        drink.method,
        ...drink.flavors,
        ...drink.ingredients.map(ingredientSearchText),
      ].join(" "));

      let score = 0;
      if (searchable.includes(normalizedQuery)) score += 10;
      score += terms.filter((term) => searchable.includes(term)).length * 2;

      if (product && productCompatibleWithDrink(product, drink)) score += 20;

      return { drink, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ drink }) => drink);

  return { results, product };
}
