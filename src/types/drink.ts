export type DrinkType = "cocktail" | "mocktail";

export type DrinkMethod =
  | "shaken"
  | "stirred"
  | "built"
  | "blended";

export type Difficulty =
  | "easy"
  | "medium"
  | "advanced";

export type IngredientCategory =
  | "spirit"
  | "liqueur"
  | "fortified_wine"
  | "sparkling_wine"
  | "wine"
  | "citrus"
  | "citrus_juice"
  | "juice_or_puree"
  | "syrup_or_sweetener"
  | "sweetener"
  | "mixer"
  | "bitters"
  | "tea"
  | "coffee"
  | "dairy"
  | "egg"
  | "herb_or_botanical"
  | "water"
  | "fruit"
  | "other";

export type Ingredient = {
  id: string;
  name: string;
  amount: string;
  category: IngredientCategory;
  aliases: string[];
};

export type Drink = {
  id: string;
  slug: string;
  name: string;
  type: DrinkType;
  base: string | null;
  description: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  glass: string;
  ice: string;
  garnish: string;
  flavors: string[];
  method: DrinkMethod;
  difficulty: Difficulty;
  preparationTime: number;
};