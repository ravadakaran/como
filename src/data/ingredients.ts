import type { IngredientCategory } from "@/types/drink";

export type IngredientDefinition = {
  id: string;
  name: string;
  category: IngredientCategory;
  aliases: string[];
};

/** Canonical ingredient vocabulary shared by search and inventory matching. */
export const ingredientDefinitions: IngredientDefinition[] = [
  {
    "id": "agave-syrup",
    "name": "agave syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "aged-rum",
    "name": "aged rum",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "amaretto",
    "name": "amaretto",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "amaro-nonino",
    "name": "Amaro Nonino",
    "category": "other",
    "aliases": []
  },
  {
    "id": "angostura-bitters",
    "name": "Angostura bitters",
    "category": "bitters",
    "aliases": []
  },
  {
    "id": "aperol",
    "name": "Aperol",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "apple-cider",
    "name": "apple cider",
    "category": "other",
    "aliases": []
  },
  {
    "id": "apple-juice",
    "name": "apple juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "apricot-nectar",
    "name": "apricot nectar",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "basil",
    "name": "basil",
    "category": "herb_or_botanical",
    "aliases": []
  },
  {
    "id": "benedictine-bitters",
    "name": "Benedictine + bitters",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "berry-pur-e",
    "name": "berry purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "black-tea",
    "name": "black tea",
    "category": "tea",
    "aliases": []
  },
  {
    "id": "blackberry",
    "name": "blackberry",
    "category": "fruit",
    "aliases": []
  },
  {
    "id": "blackberry-liqueur",
    "name": "blackberry liqueur",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "blackberry-pur-e",
    "name": "blackberry purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "blended-scotch",
    "name": "blended Scotch",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "blood-orange-juice",
    "name": "blood orange juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "blue-cura-ao",
    "name": "blue curaçao",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "blueberry-pur-e",
    "name": "blueberry purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "bourbon",
    "name": "bourbon",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "brown-sugar-syrup",
    "name": "brown sugar syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "cacha-a",
    "name": "cachaça",
    "category": "spirit",
    "aliases": [
      "cachaca"
    ]
  },
  {
    "id": "campari",
    "name": "Campari",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "cherry-juice",
    "name": "cherry juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "cherry-liqueur",
    "name": "cherry liqueur",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "chilled-green-tea",
    "name": "chilled green tea",
    "category": "tea",
    "aliases": []
  },
  {
    "id": "citrus-vodka",
    "name": "citrus vodka",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "coconut-cream",
    "name": "coconut cream",
    "category": "dairy",
    "aliases": []
  },
  {
    "id": "coconut-milk",
    "name": "coconut milk",
    "category": "dairy",
    "aliases": []
  },
  {
    "id": "coconut-water",
    "name": "coconut water",
    "category": "other",
    "aliases": []
  },
  {
    "id": "coffee-liqueur",
    "name": "coffee liqueur",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "coffee-infused-vermouth",
    "name": "coffee-infused vermouth",
    "category": "fortified_wine",
    "aliases": []
  },
  {
    "id": "cognac",
    "name": "Cognac",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "cointreau",
    "name": "Cointreau",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "cola",
    "name": "cola",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "cold-water",
    "name": "cold water",
    "category": "water",
    "aliases": []
  },
  {
    "id": "condensed-milk",
    "name": "condensed milk",
    "category": "dairy",
    "aliases": []
  },
  {
    "id": "cranberry-juice",
    "name": "cranberry juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "cream",
    "name": "cream",
    "category": "dairy",
    "aliases": []
  },
  {
    "id": "cr-me-de-cacao",
    "name": "crème de cacao",
    "category": "liqueur",
    "aliases": [
      "creme de cacao"
    ]
  },
  {
    "id": "cr-me-de-cassis",
    "name": "crème de cassis",
    "category": "liqueur",
    "aliases": [
      "creme de cassis"
    ]
  },
  {
    "id": "cr-me-de-menthe",
    "name": "crème de menthe",
    "category": "liqueur",
    "aliases": [
      "creme de menthe"
    ]
  },
  {
    "id": "cr-me-de-violette",
    "name": "crème de violette",
    "category": "liqueur",
    "aliases": [
      "creme de violette"
    ]
  },
  {
    "id": "cucumber-juice",
    "name": "cucumber juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "dark-rum",
    "name": "dark rum",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "demerara-syrup",
    "name": "demerara syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "dragon-fruit-pur-e",
    "name": "dragon fruit purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "drambuie",
    "name": "Drambuie",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "dry-vermouth",
    "name": "dry vermouth",
    "category": "fortified_wine",
    "aliases": []
  },
  {
    "id": "egg-white",
    "name": "egg white",
    "category": "egg",
    "aliases": []
  },
  {
    "id": "elderflower-liqueur",
    "name": "elderflower liqueur",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "espresso",
    "name": "espresso",
    "category": "coffee",
    "aliases": []
  },
  {
    "id": "gin",
    "name": "gin",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "ginger-ale",
    "name": "ginger ale",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "ginger-beer",
    "name": "ginger beer",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "ginger-syrup",
    "name": "ginger syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "grapefruit-juice",
    "name": "grapefruit juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "grapefruit-soda",
    "name": "grapefruit soda",
    "category": "fruit",
    "aliases": []
  },
  {
    "id": "green-chartreuse",
    "name": "green Chartreuse",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "grenadine",
    "name": "grenadine",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "guava-nectar",
    "name": "guava nectar",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "hibiscus-tea",
    "name": "hibiscus tea",
    "category": "tea",
    "aliases": []
  },
  {
    "id": "honey",
    "name": "honey",
    "category": "sweetener",
    "aliases": []
  },
  {
    "id": "honey-syrup",
    "name": "honey syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "honey-ginger-syrup",
    "name": "honey-ginger syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "honeydew-juice",
    "name": "honeydew juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "hot-coffee",
    "name": "hot coffee",
    "category": "coffee",
    "aliases": []
  },
  {
    "id": "hot-sauce-and-spices",
    "name": "Hot sauce and spices",
    "category": "other",
    "aliases": []
  },
  {
    "id": "hot-water",
    "name": "hot water",
    "category": "water",
    "aliases": []
  },
  {
    "id": "iced-tea",
    "name": "iced tea",
    "category": "tea",
    "aliases": []
  },
  {
    "id": "irish-whiskey",
    "name": "Irish whiskey",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "kiwi-pur-e",
    "name": "kiwi purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "lavender-syrup",
    "name": "lavender syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "lemon-juice",
    "name": "lemon juice",
    "category": "juice_or_puree",
    "aliases": [
      "lemon"
    ]
  },
  {
    "id": "lemonade",
    "name": "lemonade",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "lillet-blanc",
    "name": "Lillet Blanc",
    "category": "fortified_wine",
    "aliases": []
  },
  {
    "id": "lime",
    "name": "lime",
    "category": "citrus",
    "aliases": [
      "fresh lime",
      "lime wedge",
      "lime wheel"
    ]
  },
  {
    "id": "lime-cordial",
    "name": "lime cordial",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "lime-juice",
    "name": "lime juice",
    "category": "juice_or_puree",
    "aliases": [
      "lime"
    ]
  },
  {
    "id": "lychee-juice",
    "name": "lychee juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "mango-nectar",
    "name": "mango nectar",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "maraschino-liqueur",
    "name": "maraschino liqueur",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "melon-juice",
    "name": "melon juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "midori",
    "name": "Midori",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "mint",
    "name": "mint",
    "category": "herb_or_botanical",
    "aliases": []
  },
  {
    "id": "mint-syrup",
    "name": "mint syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "mixed-berry-pur-e",
    "name": "mixed berry purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "orange-bitters",
    "name": "orange bitters",
    "category": "bitters",
    "aliases": []
  },
  {
    "id": "orange-cura-ao",
    "name": "orange curaçao",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "orange-juice",
    "name": "orange juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "orgeat",
    "name": "orgeat",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "overproof-rum",
    "name": "overproof rum",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "passion-fruit-juice",
    "name": "passion fruit juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "passion-fruit-pulp",
    "name": "passion fruit pulp",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "peach-lemonade",
    "name": "peach lemonade",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "peach-nectar",
    "name": "peach nectar",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "peach-pur-e",
    "name": "peach purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "peach-schnapps",
    "name": "peach schnapps",
    "category": "other",
    "aliases": []
  },
  {
    "id": "pear-juice",
    "name": "pear juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "pear-nectar",
    "name": "pear nectar",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "peychaud-s-bitters",
    "name": "Peychaud's bitters",
    "category": "bitters",
    "aliases": [
      "peychauds bitters",
      "peychaud bitters"
    ]
  },
  {
    "id": "pineapple-juice",
    "name": "pineapple juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "pisco",
    "name": "pisco",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "pomegranate-juice",
    "name": "pomegranate juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "prosecco",
    "name": "Prosecco",
    "category": "sparkling_wine",
    "aliases": []
  },
  {
    "id": "raspberry-lemonade",
    "name": "raspberry lemonade",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "raspberry-liqueur",
    "name": "raspberry liqueur",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "raspberry-pur-e",
    "name": "raspberry purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "raspberry-syrup",
    "name": "raspberry syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "red-wine-float",
    "name": "red wine float",
    "category": "wine",
    "aliases": []
  },
  {
    "id": "rose-syrup",
    "name": "rose syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "rum",
    "name": "rum",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "rye-whiskey",
    "name": "rye whiskey",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "scotch",
    "name": "Scotch",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "simple-syrup",
    "name": "simple syrup",
    "category": "syrup_or_sweetener",
    "aliases": [
      "sugar syrup"
    ]
  },
  {
    "id": "smoky-scotch",
    "name": "smoky Scotch",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "soda-water",
    "name": "soda water",
    "category": "mixer",
    "aliases": [
      "club soda",
      "soda"
    ]
  },
  {
    "id": "sparkling-water",
    "name": "sparkling water",
    "category": "mixer",
    "aliases": [
      "sparkling water",
      "soda water"
    ]
  },
  {
    "id": "sparkling-wine",
    "name": "sparkling wine",
    "category": "sparkling_wine",
    "aliases": []
  },
  {
    "id": "strawberry-pur-e",
    "name": "strawberry purée",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "sugar",
    "name": "sugar",
    "category": "sweetener",
    "aliases": []
  },
  {
    "id": "sugar-syrup",
    "name": "sugar syrup",
    "category": "syrup_or_sweetener",
    "aliases": [
      "simple syrup",
      "sugar syrup"
    ]
  },
  {
    "id": "sweet-vermouth",
    "name": "sweet vermouth",
    "category": "fortified_wine",
    "aliases": []
  },
  {
    "id": "sweet-and-sour",
    "name": "sweet-and-sour",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "syrup",
    "name": "syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "tequila",
    "name": "tequila",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "tequila-blanco",
    "name": "tequila blanco",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "tequila-triple-sec-lemon-and-cola",
    "name": "tequila, triple sec, lemon and cola",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "tomato-juice",
    "name": "tomato juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "tonic-water",
    "name": "tonic water",
    "category": "mixer",
    "aliases": []
  },
  {
    "id": "triple-sec",
    "name": "triple sec",
    "category": "liqueur",
    "aliases": []
  },
  {
    "id": "vanilla-syrup",
    "name": "vanilla syrup",
    "category": "syrup_or_sweetener",
    "aliases": []
  },
  {
    "id": "vodka",
    "name": "vodka",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "water",
    "name": "water",
    "category": "water",
    "aliases": []
  },
  {
    "id": "watermelon-juice",
    "name": "watermelon juice",
    "category": "juice_or_puree",
    "aliases": []
  },
  {
    "id": "whipped-cream",
    "name": "whipped cream",
    "category": "dairy",
    "aliases": []
  },
  {
    "id": "whiskey",
    "name": "whiskey",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "white-rum",
    "name": "white rum",
    "category": "spirit",
    "aliases": []
  },
  {
    "id": "worcestershire-hot-sauce-and-spices",
    "name": "Worcestershire, hot sauce and spices",
    "category": "other",
    "aliases": []
  },
  {
    "id": "worcestershire-style-sauce-and-spices",
    "name": "Worcestershire-style sauce and spices",
    "category": "other",
    "aliases": []
  }
];
