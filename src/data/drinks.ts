import type { Drink } from "@/types/drink";
export const cocktails: Drink[] = [
  {
    "id": "cocktail-1",
    "slug": "mojito",
    "name": "Mojito",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/mojito.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "60 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with mint and lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-2",
    "slug": "daiquiri",
    "name": "Daiquiri",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/daiquiri.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "60 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "25 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Blend until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lime wheel and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lime wheel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "blended",
    "difficulty": "medium",
    "preparationTime": 5
  },
  {
    "id": "cocktail-3",
    "slug": "pi-a-colada",
    "name": "Piña Colada",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/pi-a-colada.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "60 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "coconut cream",
        "amount": "30 ml coconut cream",
        "id": "coconut-cream",
        "category": "dairy",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Blend until well chilled and balanced.",
      "Strain or pour into a hurricane with the specified ice.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "blended",
    "difficulty": "medium",
    "preparationTime": 5
  },
  {
    "id": "cocktail-4",
    "slug": "dark-n-stormy",
    "name": "Dark 'n' Stormy",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/dark-n-stormy.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "60 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime wedge and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-5",
    "slug": "mai-tai",
    "name": "Mai Tai",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/mai-tai.svg",
    "ingredients": [
      {
        "name": "aged rum",
        "amount": "45 ml aged rum",
        "id": "aged-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "orange curaçao",
        "amount": "15 ml orange curaçao",
        "id": "orange-cura-ao",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "orgeat",
        "amount": "10 ml orgeat",
        "id": "orgeat",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with mint and lime and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Mint and lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-6",
    "slug": "cuba-libre",
    "name": "Cuba Libre",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/cuba-libre.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "50 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "cola",
        "amount": "120 ml cola",
        "id": "cola",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime wedge and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-7",
    "slug": "hemingway-daiquiri",
    "name": "Hemingway Daiquiri",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/hemingway-daiquiri.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "60 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "grapefruit juice",
        "amount": "30 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "maraschino liqueur",
        "amount": "15 ml maraschino liqueur",
        "id": "maraschino-liqueur",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Blend until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lime wheel and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lime wheel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "blended",
    "difficulty": "medium",
    "preparationTime": 5
  },
  {
    "id": "cocktail-8",
    "slug": "planter-s-punch",
    "name": "Planter's Punch",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/planter-s-punch.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "60 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "grenadine",
        "amount": "20 ml grenadine",
        "id": "grenadine",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "60 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with orange and cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange and cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-9",
    "slug": "jungle-bird",
    "name": "Jungle Bird",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/jungle-bird.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "45 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "Campari",
        "amount": "15 ml Campari",
        "id": "campari",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "45 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with pineapple leaf and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Pineapple leaf",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-10",
    "slug": "rum-runner",
    "name": "Rum Runner",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/rum-runner.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "45 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "30 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "30 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "blackberry liqueur",
        "amount": "15 ml blackberry liqueur",
        "id": "blackberry-liqueur",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a hurricane with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-11",
    "slug": "hurricane",
    "name": "Hurricane",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/hurricane.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "60 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "passion fruit juice",
        "amount": "30 ml passion fruit juice",
        "id": "passion-fruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "30 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a hurricane with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-12",
    "slug": "bahama-mama",
    "name": "Bahama Mama",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/bahama-mama.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "30 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "dark rum",
        "amount": "30 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "30 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "30 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a hurricane with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-13",
    "slug": "blue-hawaii",
    "name": "Blue Hawaii",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/blue-hawaii.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "30 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "blue curaçao",
        "amount": "30 ml blue curaçao",
        "id": "blue-cura-ao",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "60 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "sweet-and-sour",
        "amount": "30 ml sweet-and-sour",
        "id": "sweet-and-sour",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a hurricane with the specified ice.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-14",
    "slug": "zombie",
    "name": "Zombie",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/zombie.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "30 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "white rum",
        "amount": "30 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "overproof rum",
        "amount": "30 ml overproof rum",
        "id": "overproof-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a tiki with the specified ice.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Tiki",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-15",
    "slug": "painkiller",
    "name": "Painkiller",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/painkiller.svg",
    "ingredients": [
      {
        "name": "dark rum",
        "amount": "60 ml dark rum",
        "id": "dark-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "30 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "coconut cream",
        "amount": "30 ml coconut cream",
        "id": "coconut-cream",
        "category": "dairy",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a tiki with the specified ice.",
      "Garnish with nutmeg and serve immediately."
    ],
    "glass": "Tiki",
    "ice": "Cubed",
    "garnish": "Nutmeg",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-16",
    "slug": "old-fashioned",
    "name": "Old Fashioned",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/old-fashioned.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "60 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "demerara syrup",
        "amount": "7.5 ml demerara syrup",
        "id": "demerara-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "Angostura bitters",
        "amount": "2 dashes Angostura bitters",
        "id": "angostura-bitters",
        "category": "bitters",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-17",
    "slug": "whiskey-sour",
    "name": "Whiskey Sour",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/whiskey-sour.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "60 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon and cherry and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon and cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-18",
    "slug": "manhattan",
    "name": "Manhattan",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/manhattan.svg",
    "ingredients": [
      {
        "name": "rye whiskey",
        "amount": "60 ml rye whiskey",
        "id": "rye-whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "Angostura bitters",
        "amount": "2 dashes Angostura bitters",
        "id": "angostura-bitters",
        "category": "bitters",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-19",
    "slug": "boulevardier",
    "name": "Boulevardier",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/boulevardier.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "45 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "Campari",
        "amount": "30 ml Campari",
        "id": "campari",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-20",
    "slug": "mint-julep",
    "name": "Mint Julep",
    "type": "cocktail",
    "base": "Bourbon",
    "description": "A bourbon-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/mint-julep.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "60 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "simple syrup",
        "amount": "15 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "mint",
        "amount": "8 mint leaves",
        "id": "mint",
        "category": "herb_or_botanical",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a julep cup with the specified ice.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Julep cup",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-21",
    "slug": "sazerac",
    "name": "Sazerac",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/sazerac.svg",
    "ingredients": [
      {
        "name": "rye whiskey",
        "amount": "60 ml rye whiskey",
        "id": "rye-whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "simple syrup",
        "amount": "7.5 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "Peychaud's bitters",
        "amount": "3 dashes Peychaud's bitters",
        "id": "peychaud-s-bitters",
        "category": "bitters",
        "aliases": [
          "peychauds bitters",
          "peychaud bitters"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-22",
    "slug": "paper-plane",
    "name": "Paper Plane",
    "type": "cocktail",
    "base": "Bourbon",
    "description": "A bourbon-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/paper-plane.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "22.5 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "Aperol",
        "amount": "22.5 ml Aperol",
        "id": "aperol",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "Amaro Nonino",
        "amount": "22.5 ml Amaro Nonino",
        "id": "amaro-nonino",
        "category": "other",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "22.5 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lemon peel and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lemon peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-23",
    "slug": "gold-rush",
    "name": "Gold Rush",
    "type": "cocktail",
    "base": "Bourbon",
    "description": "A bourbon-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/gold-rush.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "60 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "honey syrup",
        "amount": "20 ml honey syrup",
        "id": "honey-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-24",
    "slug": "penicillin",
    "name": "Penicillin",
    "type": "cocktail",
    "base": "Scotch",
    "description": "A scotch-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/penicillin.svg",
    "ingredients": [
      {
        "name": "blended Scotch",
        "amount": "60 ml blended Scotch",
        "id": "blended-scotch",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "22.5 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "honey-ginger syrup",
        "amount": "22.5 ml honey-ginger syrup",
        "id": "honey-ginger-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "smoky Scotch",
        "amount": "7.5 ml smoky Scotch",
        "id": "smoky-scotch",
        "category": "spirit",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with candied ginger and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Candied ginger",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-25",
    "slug": "rusty-nail",
    "name": "Rusty Nail",
    "type": "cocktail",
    "base": "Scotch",
    "description": "A scotch-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/rusty-nail.svg",
    "ingredients": [
      {
        "name": "Scotch",
        "amount": "60 ml Scotch",
        "id": "scotch",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "Drambuie",
        "amount": "30 ml Drambuie",
        "id": "drambuie",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-26",
    "slug": "godfather",
    "name": "Godfather",
    "type": "cocktail",
    "base": "Scotch",
    "description": "A scotch-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/godfather.svg",
    "ingredients": [
      {
        "name": "Scotch",
        "amount": "45 ml Scotch",
        "id": "scotch",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "amaretto",
        "amount": "30 ml amaretto",
        "id": "amaretto",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-27",
    "slug": "rob-roy",
    "name": "Rob Roy",
    "type": "cocktail",
    "base": "Scotch",
    "description": "A scotch-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/rob-roy.svg",
    "ingredients": [
      {
        "name": "Scotch",
        "amount": "60 ml Scotch",
        "id": "scotch",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "Angostura bitters",
        "amount": "2 dashes Angostura bitters",
        "id": "angostura-bitters",
        "category": "bitters",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-28",
    "slug": "blood-and-sand",
    "name": "Blood and Sand",
    "type": "cocktail",
    "base": "Scotch",
    "description": "A scotch-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/blood-and-sand.svg",
    "ingredients": [
      {
        "name": "Scotch",
        "amount": "30 ml Scotch",
        "id": "scotch",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "cherry liqueur",
        "amount": "30 ml cherry liqueur",
        "id": "cherry-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "30 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-29",
    "slug": "vodka-martini",
    "name": "Vodka Martini",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/vodka-martini.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "60 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "dry vermouth",
        "amount": "10 ml dry vermouth",
        "id": "dry-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "orange bitters",
        "amount": "1 dash orange bitters",
        "id": "orange-bitters",
        "category": "bitters",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a martini with the specified ice.",
      "Garnish with lemon twist or olive and serve immediately."
    ],
    "glass": "Martini",
    "ice": "Cubed",
    "garnish": "Lemon twist or olive",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-30",
    "slug": "moscow-mule",
    "name": "Moscow Mule",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/moscow-mule.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "50 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a mule mug with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Mule mug",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-31",
    "slug": "cosmopolitan",
    "name": "Cosmopolitan",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/cosmopolitan.svg",
    "ingredients": [
      {
        "name": "citrus vodka",
        "amount": "40 ml citrus vodka",
        "id": "citrus-vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "triple sec",
        "amount": "20 ml triple sec",
        "id": "triple-sec",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "cranberry juice",
        "amount": "20 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with orange twist and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Orange twist",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-32",
    "slug": "bloody-mary",
    "name": "Bloody Mary",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/bloody-mary.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "tomato juice",
        "amount": "90 ml tomato juice",
        "id": "tomato-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "Worcestershire, hot sauce and spices",
        "amount": "Worcestershire, hot sauce and spices",
        "id": "worcestershire-hot-sauce-and-spices",
        "category": "other",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with celery and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Celery",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-33",
    "slug": "white-russian",
    "name": "White Russian",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/white-russian.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "50 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "coffee liqueur",
        "amount": "25 ml coffee liqueur",
        "id": "coffee-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "cream",
        "amount": "25 ml cream",
        "id": "cream",
        "category": "dairy",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with none and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "None",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-34",
    "slug": "black-russian",
    "name": "Black Russian",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/black-russian.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "50 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "coffee liqueur",
        "amount": "25 ml coffee liqueur",
        "id": "coffee-liqueur",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with none and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "None",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-35",
    "slug": "espresso-martini",
    "name": "Espresso Martini",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/espresso-martini.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "50 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "coffee liqueur",
        "amount": "30 ml coffee liqueur",
        "id": "coffee-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "espresso",
        "amount": "30 ml espresso",
        "id": "espresso",
        "category": "coffee",
        "aliases": []
      },
      {
        "name": "sugar syrup",
        "amount": "10 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with coffee beans and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Coffee beans",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-36",
    "slug": "lemon-drop-martini",
    "name": "Lemon Drop Martini",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/lemon-drop-martini.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "25 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "triple sec",
        "amount": "20 ml triple sec",
        "id": "triple-sec",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-37",
    "slug": "french-martini",
    "name": "French Martini",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/french-martini.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "raspberry liqueur",
        "amount": "15 ml raspberry liqueur",
        "id": "raspberry-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "45 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with raspberry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Raspberry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-38",
    "slug": "sea-breeze",
    "name": "Sea Breeze",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/sea-breeze.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "cranberry juice",
        "amount": "90 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "grapefruit juice",
        "amount": "45 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-39",
    "slug": "cape-codder",
    "name": "Cape Codder",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/cape-codder.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "cranberry juice",
        "amount": "120 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "10 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-40",
    "slug": "greyhound",
    "name": "Greyhound",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/greyhound.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "grapefruit juice",
        "amount": "120 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with grapefruit and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Grapefruit",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-41",
    "slug": "salty-dog",
    "name": "Salty Dog",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/salty-dog.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "grapefruit juice",
        "amount": "120 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with salt rim and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Salt rim",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-42",
    "slug": "blackberry-vodka-smash",
    "name": "Blackberry Vodka Smash",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/blackberry-vodka-smash.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "50 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "25 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "syrup",
        "amount": "15 ml syrup",
        "id": "syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "blackberry",
        "amount": "6 blackberries",
        "id": "blackberry",
        "category": "fruit",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-43",
    "slug": "gin-tonic",
    "name": "Gin & Tonic",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/gin-tonic.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "50 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "tonic water",
        "amount": "150 ml tonic water",
        "id": "tonic-water",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-44",
    "slug": "negroni",
    "name": "Negroni",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/negroni.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "30 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "Campari",
        "amount": "30 ml Campari",
        "id": "campari",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-45",
    "slug": "tom-collins",
    "name": "Tom Collins",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/tom-collins.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "45 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a collins with the specified ice.",
      "Garnish with lemon and cherry and serve immediately."
    ],
    "glass": "Collins",
    "ice": "Cubed",
    "garnish": "Lemon and cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-46",
    "slug": "gimlet",
    "name": "Gimlet",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/gimlet.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "60 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime cordial",
        "amount": "30 ml lime cordial",
        "id": "lime-cordial",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lime wheel and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lime wheel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-47",
    "slug": "martini",
    "name": "Martini",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/martini.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "60 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "dry vermouth",
        "amount": "10 ml dry vermouth",
        "id": "dry-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "orange bitters",
        "amount": "1 dash orange bitters",
        "id": "orange-bitters",
        "category": "bitters",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a martini with the specified ice.",
      "Garnish with lemon twist or olive and serve immediately."
    ],
    "glass": "Martini",
    "ice": "Cubed",
    "garnish": "Lemon twist or olive",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-48",
    "slug": "aviation",
    "name": "Aviation",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/aviation.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "45 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "maraschino liqueur",
        "amount": "15 ml maraschino liqueur",
        "id": "maraschino-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "crème de violette",
        "amount": "7.5 ml crème de violette",
        "id": "cr-me-de-violette",
        "category": "liqueur",
        "aliases": [
          "creme de violette"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-49",
    "slug": "last-word",
    "name": "Last Word",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/last-word.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "22.5 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "green Chartreuse",
        "amount": "22.5 ml green Chartreuse",
        "id": "green-chartreuse",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "maraschino liqueur",
        "amount": "22.5 ml maraschino liqueur",
        "id": "maraschino-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "22.5 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-50",
    "slug": "clover-club",
    "name": "Clover Club",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/clover-club.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "45 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "22.5 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "raspberry syrup",
        "amount": "15 ml raspberry syrup",
        "id": "raspberry-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "egg white",
        "amount": "15 ml egg white",
        "id": "egg-white",
        "category": "egg",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with raspberry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Raspberry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-51",
    "slug": "bee-s-knees",
    "name": "Bee's Knees",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/bee-s-knees.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "60 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "22.5 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "honey syrup",
        "amount": "22.5 ml honey syrup",
        "id": "honey-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-52",
    "slug": "southside",
    "name": "Southside",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/southside.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "60 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "simple syrup",
        "amount": "20 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "mint",
        "amount": "8 mint leaves",
        "id": "mint",
        "category": "herb_or_botanical",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-53",
    "slug": "french-75",
    "name": "French 75",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/french-75.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "30 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "sparkling wine",
        "amount": "90 ml sparkling wine",
        "id": "sparkling-wine",
        "category": "sparkling_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a flute with the specified ice.",
      "Garnish with lemon twist and serve immediately."
    ],
    "glass": "Flute",
    "ice": "None",
    "garnish": "Lemon twist",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-54",
    "slug": "singapore-sling",
    "name": "Singapore Sling",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/singapore-sling.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "30 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "cherry liqueur",
        "amount": "15 ml cherry liqueur",
        "id": "cherry-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "pineapple juice",
        "amount": "60 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-55",
    "slug": "gin-fizz",
    "name": "Gin Fizz",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/gin-fizz.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "45 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-56",
    "slug": "gin-basil-smash",
    "name": "Gin Basil Smash",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/gin-basil-smash.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "60 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "25 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "simple syrup",
        "amount": "20 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "basil",
        "amount": "8 basil leaves",
        "id": "basil",
        "category": "herb_or_botanical",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with basil and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Basil",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-57",
    "slug": "bramble",
    "name": "Bramble",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/bramble.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "50 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "25 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "blackberry liqueur",
        "amount": "15 ml blackberry liqueur",
        "id": "blackberry-liqueur",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with blackberry and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Blackberry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-58",
    "slug": "corpse-reviver-no-2",
    "name": "Corpse Reviver No. 2",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/corpse-reviver-no-2.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "22.5 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "Cointreau",
        "amount": "22.5 ml Cointreau",
        "id": "cointreau",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "Lillet Blanc",
        "amount": "22.5 ml Lillet Blanc",
        "id": "lillet-blanc",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "22.5 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-59",
    "slug": "paloma",
    "name": "Paloma",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/paloma.svg",
    "ingredients": [
      {
        "name": "tequila blanco",
        "amount": "50 ml tequila blanco",
        "id": "tequila-blanco",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "grapefruit soda",
        "amount": "120 ml grapefruit soda",
        "id": "grapefruit-soda",
        "category": "fruit",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with grapefruit and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Grapefruit",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-60",
    "slug": "tequila-sunrise",
    "name": "Tequila Sunrise",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/tequila-sunrise.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "45 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "90 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "grenadine",
        "amount": "15 ml grenadine",
        "id": "grenadine",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with orange and cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange and cherry",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-61",
    "slug": "tommy-s-margarita",
    "name": "Tommy's Margarita",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/tommy-s-margarita.svg",
    "ingredients": [
      {
        "name": "tequila blanco",
        "amount": "60 ml tequila blanco",
        "id": "tequila-blanco",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "agave syrup",
        "amount": "15 ml agave syrup",
        "id": "agave-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-62",
    "slug": "el-diablo",
    "name": "El Diablo",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/el-diablo.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "45 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "crème de cassis",
        "amount": "15 ml crème de cassis",
        "id": "cr-me-de-cassis",
        "category": "liqueur",
        "aliases": [
          "creme de cassis"
        ]
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "90 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-63",
    "slug": "tequila-sour",
    "name": "Tequila Sour",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/tequila-sour.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "60 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "agave syrup",
        "amount": "20 ml agave syrup",
        "id": "agave-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-64",
    "slug": "mexican-mule",
    "name": "Mexican Mule",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/mexican-mule.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "50 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a mule mug with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Mule mug",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-65",
    "slug": "matador",
    "name": "Matador",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/matador.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "45 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-66",
    "slug": "tequila-collins",
    "name": "Tequila Collins",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/tequila-collins.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "45 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "agave syrup",
        "amount": "15 ml agave syrup",
        "id": "agave-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a collins with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Collins",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-67",
    "slug": "cantarito",
    "name": "Cantarito",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/cantarito.svg",
    "ingredients": [
      {
        "name": "tequila",
        "amount": "50 ml tequila",
        "id": "tequila",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "grapefruit juice",
        "amount": "60 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "grapefruit soda",
        "amount": "60 ml grapefruit soda",
        "id": "grapefruit-soda",
        "category": "fruit",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a clay cup with the specified ice.",
      "Garnish with grapefruit and serve immediately."
    ],
    "glass": "Clay cup",
    "ice": "Cubed",
    "garnish": "Grapefruit",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-68",
    "slug": "margarita",
    "name": "Margarita",
    "type": "cocktail",
    "base": "Tequila",
    "description": "A tequila-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/margarita.svg",
    "ingredients": [
      {
        "name": "tequila blanco",
        "amount": "50 ml tequila blanco",
        "id": "tequila-blanco",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "triple sec",
        "amount": "25 ml triple sec",
        "id": "triple-sec",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "25 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe or rocks with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Coupe or rocks",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-69",
    "slug": "sidecar",
    "name": "Sidecar",
    "type": "cocktail",
    "base": "Brandy",
    "description": "A brandy-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/sidecar.svg",
    "ingredients": [
      {
        "name": "Cognac",
        "amount": "50 ml Cognac",
        "id": "cognac",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "triple sec",
        "amount": "25 ml triple sec",
        "id": "triple-sec",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "25 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-70",
    "slug": "brandy-alexander",
    "name": "Brandy Alexander",
    "type": "cocktail",
    "base": "Brandy",
    "description": "A brandy-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/brandy-alexander.svg",
    "ingredients": [
      {
        "name": "Cognac",
        "amount": "30 ml Cognac",
        "id": "cognac",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "crème de cacao",
        "amount": "30 ml crème de cacao",
        "id": "cr-me-de-cacao",
        "category": "liqueur",
        "aliases": [
          "creme de cacao"
        ]
      },
      {
        "name": "cream",
        "amount": "30 ml cream",
        "id": "cream",
        "category": "dairy",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with nutmeg and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Nutmeg",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-71",
    "slug": "stinger",
    "name": "Stinger",
    "type": "cocktail",
    "base": "Brandy",
    "description": "A brandy-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/stinger.svg",
    "ingredients": [
      {
        "name": "Cognac",
        "amount": "60 ml Cognac",
        "id": "cognac",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "crème de menthe",
        "amount": "20 ml crème de menthe",
        "id": "cr-me-de-menthe",
        "category": "liqueur",
        "aliases": [
          "creme de menthe"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-72",
    "slug": "between-the-sheets",
    "name": "Between the Sheets",
    "type": "cocktail",
    "base": "Brandy",
    "description": "A brandy-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/between-the-sheets.svg",
    "ingredients": [
      {
        "name": "Cognac",
        "amount": "30 ml Cognac",
        "id": "cognac",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "white rum",
        "amount": "30 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "triple sec",
        "amount": "30 ml triple sec",
        "id": "triple-sec",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-73",
    "slug": "french-connection",
    "name": "French Connection",
    "type": "cocktail",
    "base": "Brandy",
    "description": "A brandy-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/french-connection.svg",
    "ingredients": [
      {
        "name": "Cognac",
        "amount": "45 ml Cognac",
        "id": "cognac",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "amaretto",
        "amount": "25 ml amaretto",
        "id": "amaretto",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-74",
    "slug": "vieux-carr",
    "name": "Vieux Carré",
    "type": "cocktail",
    "base": "Brandy",
    "description": "A brandy-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/vieux-carr.svg",
    "ingredients": [
      {
        "name": "Cognac",
        "amount": "30 ml Cognac",
        "id": "cognac",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "rye whiskey",
        "amount": "30 ml rye whiskey",
        "id": "rye-whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "Benedictine + bitters",
        "amount": "7.5 ml Benedictine + bitters",
        "id": "benedictine-bitters",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-75",
    "slug": "pisco-sour",
    "name": "Pisco Sour",
    "type": "cocktail",
    "base": "Pisco",
    "description": "A pisco-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/pisco-sour.svg",
    "ingredients": [
      {
        "name": "pisco",
        "amount": "60 ml pisco",
        "id": "pisco",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "simple syrup",
        "amount": "20 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "egg white",
        "amount": "15 ml egg white",
        "id": "egg-white",
        "category": "egg",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a coupe with the specified ice.",
      "Garnish with bitters and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Bitters",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-76",
    "slug": "chilcano",
    "name": "Chilcano",
    "type": "cocktail",
    "base": "Pisco",
    "description": "A pisco-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/chilcano.svg",
    "ingredients": [
      {
        "name": "pisco",
        "amount": "60 ml pisco",
        "id": "pisco",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger ale",
        "amount": "120 ml ginger ale",
        "id": "ginger-ale",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-77",
    "slug": "kir-royale",
    "name": "Kir Royale",
    "type": "cocktail",
    "base": "Sparkling",
    "description": "A sparkling-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/kir-royale.svg",
    "ingredients": [
      {
        "name": "crème de cassis",
        "amount": "10 ml crème de cassis",
        "id": "cr-me-de-cassis",
        "category": "liqueur",
        "aliases": [
          "creme de cassis"
        ]
      },
      {
        "name": "sparkling wine",
        "amount": "90 ml sparkling wine",
        "id": "sparkling-wine",
        "category": "sparkling_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a flute with the specified ice.",
      "Garnish with lemon twist and serve immediately."
    ],
    "glass": "Flute",
    "ice": "None",
    "garnish": "Lemon twist",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-78",
    "slug": "bellini",
    "name": "Bellini",
    "type": "cocktail",
    "base": "Sparkling",
    "description": "A sparkling-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/bellini.svg",
    "ingredients": [
      {
        "name": "peach purée",
        "amount": "30 ml peach purée",
        "id": "peach-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "Prosecco",
        "amount": "90 ml Prosecco",
        "id": "prosecco",
        "category": "sparkling_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a flute with the specified ice.",
      "Garnish with peach slice and serve immediately."
    ],
    "glass": "Flute",
    "ice": "None",
    "garnish": "Peach slice",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-79",
    "slug": "mimosa",
    "name": "Mimosa",
    "type": "cocktail",
    "base": "Sparkling",
    "description": "A sparkling-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/mimosa.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "60 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "sparkling wine",
        "amount": "90 ml sparkling wine",
        "id": "sparkling-wine",
        "category": "sparkling_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a flute with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Flute",
    "ice": "None",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-80",
    "slug": "aperol-spritz",
    "name": "Aperol Spritz",
    "type": "cocktail",
    "base": "Sparkling",
    "description": "A sparkling-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/aperol-spritz.svg",
    "ingredients": [
      {
        "name": "Aperol",
        "amount": "60 ml Aperol",
        "id": "aperol",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "Prosecco",
        "amount": "90 ml Prosecco",
        "id": "prosecco",
        "category": "sparkling_wine",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "30 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a wine glass with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-81",
    "slug": "hugo-spritz",
    "name": "Hugo Spritz",
    "type": "cocktail",
    "base": "Sparkling",
    "description": "A sparkling-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/hugo-spritz.svg",
    "ingredients": [
      {
        "name": "elderflower liqueur",
        "amount": "30 ml elderflower liqueur",
        "id": "elderflower-liqueur",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "Prosecco",
        "amount": "90 ml Prosecco",
        "id": "prosecco",
        "category": "sparkling_wine",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "30 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a wine glass with the specified ice.",
      "Garnish with mint and lime and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Mint and lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-82",
    "slug": "americano",
    "name": "Americano",
    "type": "cocktail",
    "base": "Vermouth",
    "description": "A vermouth-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/americano.svg",
    "ingredients": [
      {
        "name": "Campari",
        "amount": "30 ml Campari",
        "id": "campari",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "sweet vermouth",
        "amount": "30 ml sweet vermouth",
        "id": "sweet-vermouth",
        "category": "fortified_wine",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-83",
    "slug": "garibaldi",
    "name": "Garibaldi",
    "type": "cocktail",
    "base": "Campari",
    "description": "A campari-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/garibaldi.svg",
    "ingredients": [
      {
        "name": "Campari",
        "amount": "45 ml Campari",
        "id": "campari",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "90 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-84",
    "slug": "espresso-negroni",
    "name": "Espresso Negroni",
    "type": "cocktail",
    "base": "Gin",
    "description": "A gin-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/espresso-negroni.svg",
    "ingredients": [
      {
        "name": "gin",
        "amount": "30 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "Campari",
        "amount": "30 ml Campari",
        "id": "campari",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "coffee-infused vermouth",
        "amount": "30 ml coffee-infused vermouth",
        "id": "coffee-infused-vermouth",
        "category": "fortified_wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-85",
    "slug": "bourbon-renewal",
    "name": "Bourbon Renewal",
    "type": "cocktail",
    "base": "Bourbon",
    "description": "A bourbon-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/bourbon-renewal.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "60 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "crème de cassis",
        "amount": "15 ml crème de cassis",
        "id": "cr-me-de-cassis",
        "category": "liqueur",
        "aliases": [
          "creme de cassis"
        ]
      },
      {
        "name": "simple syrup",
        "amount": "15 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-86",
    "slug": "new-york-sour",
    "name": "New York Sour",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/new-york-sour.svg",
    "ingredients": [
      {
        "name": "bourbon",
        "amount": "60 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "simple syrup",
        "amount": "15 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "red wine float",
        "amount": "15 ml red wine float",
        "id": "red-wine-float",
        "category": "wine",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-87",
    "slug": "irish-coffee",
    "name": "Irish Coffee",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/irish-coffee.svg",
    "ingredients": [
      {
        "name": "Irish whiskey",
        "amount": "45 ml Irish whiskey",
        "id": "irish-whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "hot coffee",
        "amount": "120 ml hot coffee",
        "id": "hot-coffee",
        "category": "coffee",
        "aliases": []
      },
      {
        "name": "brown sugar syrup",
        "amount": "15 ml brown sugar syrup",
        "id": "brown-sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "whipped cream",
        "amount": "30 ml lightly whipped cream",
        "id": "whipped-cream",
        "category": "dairy",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a irish coffee glass with the specified ice.",
      "Garnish with cream and serve immediately."
    ],
    "glass": "Irish coffee glass",
    "ice": "Cubed",
    "garnish": "Cream",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-88",
    "slug": "hot-toddy",
    "name": "Hot Toddy",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/hot-toddy.svg",
    "ingredients": [
      {
        "name": "whiskey",
        "amount": "45 ml whiskey",
        "id": "whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "hot water",
        "amount": "120 ml hot water",
        "id": "hot-water",
        "category": "water",
        "aliases": []
      },
      {
        "name": "honey",
        "amount": "20 ml honey",
        "id": "honey",
        "category": "sweetener",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a mug with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Mug",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-89",
    "slug": "irish-mule",
    "name": "Irish Mule",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/irish-mule.svg",
    "ingredients": [
      {
        "name": "Irish whiskey",
        "amount": "50 ml Irish whiskey",
        "id": "irish-whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a mug with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Mug",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-90",
    "slug": "jameson-ginger-lime",
    "name": "Jameson Ginger & Lime",
    "type": "cocktail",
    "base": "Whiskey",
    "description": "A whiskey-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/jameson-ginger-lime.svg",
    "ingredients": [
      {
        "name": "Irish whiskey",
        "amount": "50 ml Irish whiskey",
        "id": "irish-whiskey",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger ale",
        "amount": "120 ml ginger ale",
        "id": "ginger-ale",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-91",
    "slug": "godmother",
    "name": "Godmother",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/godmother.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "amaretto",
        "amount": "30 ml amaretto",
        "id": "amaretto",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Stir until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with orange peel and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Orange peel",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "stirred",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-92",
    "slug": "caipirinha",
    "name": "Caipirinha",
    "type": "cocktail",
    "base": "Cachaça",
    "description": "A cachaça-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/caipirinha.svg",
    "ingredients": [
      {
        "name": "cachaça",
        "amount": "60 ml cachaça",
        "id": "cacha-a",
        "category": "spirit",
        "aliases": [
          "cachaca"
        ]
      },
      {
        "name": "lime",
        "amount": "1 lime, cut",
        "id": "lime",
        "category": "citrus",
        "aliases": [
          "fresh lime",
          "lime wedge",
          "lime wheel"
        ]
      },
      {
        "name": "sugar",
        "amount": "20 ml sugar",
        "id": "sugar",
        "category": "sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-93",
    "slug": "caipiroska",
    "name": "Caipiroska",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/caipiroska.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "60 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime",
        "amount": "1 lime, cut",
        "id": "lime",
        "category": "citrus",
        "aliases": [
          "fresh lime",
          "lime wedge",
          "lime wheel"
        ]
      },
      {
        "name": "sugar",
        "amount": "20 ml sugar",
        "id": "sugar",
        "category": "sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-94",
    "slug": "batida",
    "name": "Batida",
    "type": "cocktail",
    "base": "Cachaça",
    "description": "A cachaça-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/batida.svg",
    "ingredients": [
      {
        "name": "cachaça",
        "amount": "50 ml cachaça",
        "id": "cacha-a",
        "category": "spirit",
        "aliases": [
          "cachaca"
        ]
      },
      {
        "name": "coconut milk",
        "amount": "60 ml coconut milk",
        "id": "coconut-milk",
        "category": "dairy",
        "aliases": []
      },
      {
        "name": "condensed milk",
        "amount": "20 ml condensed milk",
        "id": "condensed-milk",
        "category": "dairy",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a hurricane with the specified ice.",
      "Garnish with coconut and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Coconut",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-95",
    "slug": "amaretto-sour",
    "name": "Amaretto Sour",
    "type": "cocktail",
    "base": "Amaretto",
    "description": "A amaretto-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/amaretto-sour.svg",
    "ingredients": [
      {
        "name": "amaretto",
        "amount": "45 ml amaretto",
        "id": "amaretto",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "bourbon",
        "amount": "10 ml bourbon",
        "id": "bourbon",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "simple syrup",
        "amount": "15 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a rocks with the specified ice.",
      "Garnish with cherry and lemon and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Cherry and lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-96",
    "slug": "midori-sour",
    "name": "Midori Sour",
    "type": "cocktail",
    "base": "Melon liqueur",
    "description": "A melon liqueur-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/midori-sour.svg",
    "ingredients": [
      {
        "name": "Midori",
        "amount": "45 ml Midori",
        "id": "midori",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "simple syrup",
        "amount": "15 ml simple syrup",
        "id": "simple-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with melon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Melon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-97",
    "slug": "blue-lagoon",
    "name": "Blue Lagoon",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/blue-lagoon.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "45 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "blue curaçao",
        "amount": "20 ml blue curaçao",
        "id": "blue-cura-ao",
        "category": "liqueur",
        "aliases": []
      },
      {
        "name": "lemonade",
        "amount": "100 ml lemonade",
        "id": "lemonade",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-98",
    "slug": "sex-on-the-beach",
    "name": "Sex on the Beach",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/sex-on-the-beach.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "40 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "peach schnapps",
        "amount": "20 ml peach schnapps",
        "id": "peach-schnapps",
        "category": "other",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "40 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "cranberry juice",
        "amount": "40 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-99",
    "slug": "long-island-iced-tea",
    "name": "Long Island Iced Tea",
    "type": "cocktail",
    "base": "Vodka",
    "description": "A vodka-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/long-island-iced-tea.svg",
    "ingredients": [
      {
        "name": "vodka",
        "amount": "15 ml vodka",
        "id": "vodka",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "gin",
        "amount": "15 ml gin",
        "id": "gin",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "rum",
        "amount": "15 ml rum",
        "id": "rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "tequila, triple sec, lemon and cola",
        "amount": "15 ml tequila + 15 ml triple sec + lemon/cola",
        "id": "tequila-triple-sec-lemon-and-cola",
        "category": "liqueur",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "cocktail-100",
    "slug": "como-classic-mojito",
    "name": "Como Classic Mojito",
    "type": "cocktail",
    "base": "Rum",
    "description": "A rum-based cocktail in the Como collection, built around balanced citrus, sweetness, and aromatics.",
    "image": "/images/drinks/como-classic-mojito.svg",
    "ingredients": [
      {
        "name": "white rum",
        "amount": "60 ml white rum",
        "id": "white-rum",
        "category": "spirit",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to the appropriate mixing vessel with ice.",
      "Shake until well chilled and balanced.",
      "Strain or pour into a highball with the specified ice.",
      "Garnish with mint and lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and lime",
    "flavors": [
      "Balanced",
      "Citrusy",
      "Classic"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  }
];

export const mocktails: Drink[] = [
  {
    "id": "mocktail-1",
    "slug": "virgin-mojito",
    "name": "Virgin Mojito",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-mojito.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-2",
    "slug": "virgin-pi-a-colada",
    "name": "Virgin Piña Colada",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-pi-a-colada.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "coconut cream",
        "amount": "60 ml coconut cream",
        "id": "coconut-cream",
        "category": "dairy",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "10 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a hurricane or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-3",
    "slug": "shirley-temple",
    "name": "Shirley Temple",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/shirley-temple.svg",
    "ingredients": [
      {
        "name": "grenadine",
        "amount": "15 ml grenadine",
        "id": "grenadine",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "ginger ale",
        "amount": "120 ml ginger ale",
        "id": "ginger-ale",
        "category": "mixer",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "10 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-4",
    "slug": "roy-rogers",
    "name": "Roy Rogers",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/roy-rogers.svg",
    "ingredients": [
      {
        "name": "grenadine",
        "amount": "15 ml grenadine",
        "id": "grenadine",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "cola",
        "amount": "150 ml cola",
        "id": "cola",
        "category": "mixer",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "10 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-5",
    "slug": "arnold-palmer",
    "name": "Arnold Palmer",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/arnold-palmer.svg",
    "ingredients": [
      {
        "name": "iced tea",
        "amount": "90 ml iced tea",
        "id": "iced-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "lemonade",
        "amount": "90 ml lemonade",
        "id": "lemonade",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-6",
    "slug": "lemonade",
    "name": "Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/lemonade.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "cold water",
        "amount": "120 ml cold water",
        "id": "cold-water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-7",
    "slug": "strawberry-lemonade",
    "name": "Strawberry Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/strawberry-lemonade.svg",
    "ingredients": [
      {
        "name": "strawberry purée",
        "amount": "45 ml strawberry purée",
        "id": "strawberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "cold water",
        "amount": "120 ml cold water",
        "id": "cold-water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with strawberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Strawberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-8",
    "slug": "raspberry-lemonade",
    "name": "Raspberry Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/raspberry-lemonade.svg",
    "ingredients": [
      {
        "name": "raspberry purée",
        "amount": "45 ml raspberry purée",
        "id": "raspberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "cold water",
        "amount": "120 ml cold water",
        "id": "cold-water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with raspberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Raspberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-9",
    "slug": "watermelon-cooler",
    "name": "Watermelon Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/watermelon-cooler.svg",
    "ingredients": [
      {
        "name": "watermelon juice",
        "amount": "120 ml watermelon juice",
        "id": "watermelon-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with watermelon and mint and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Watermelon and mint",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-10",
    "slug": "cucumber-cooler",
    "name": "Cucumber Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cucumber-cooler.svg",
    "ingredients": [
      {
        "name": "cucumber juice",
        "amount": "60 ml cucumber juice",
        "id": "cucumber-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with cucumber and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cucumber",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-11",
    "slug": "passion-fruit-fizz",
    "name": "Passion Fruit Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/passion-fruit-fizz.svg",
    "ingredients": [
      {
        "name": "passion fruit pulp",
        "amount": "45 ml passion fruit pulp",
        "id": "passion-fruit-pulp",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with passion fruit and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Passion fruit",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-12",
    "slug": "pomegranate-fizz",
    "name": "Pomegranate Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pomegranate-fizz.svg",
    "ingredients": [
      {
        "name": "pomegranate juice",
        "amount": "90 ml pomegranate juice",
        "id": "pomegranate-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "80 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pomegranate and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pomegranate",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-13",
    "slug": "ginger-lime-fizz",
    "name": "Ginger Lime Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/ginger-lime-fizz.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger syrup",
        "amount": "15 ml ginger syrup",
        "id": "ginger-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-14",
    "slug": "ginger-beer-limeade",
    "name": "Ginger Beer Limeade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/ginger-beer-limeade.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "honey syrup",
        "amount": "15 ml honey syrup",
        "id": "honey-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a mug or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Mug",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-15",
    "slug": "pineapple-ginger-cooler",
    "name": "Pineapple Ginger Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pineapple-ginger-cooler.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "90 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-16",
    "slug": "mango-mule",
    "name": "Mango Mule",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/mango-mule.svg",
    "ingredients": [
      {
        "name": "mango nectar",
        "amount": "60 ml mango nectar",
        "id": "mango-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a mug or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mango and serve immediately."
    ],
    "glass": "Mug",
    "ice": "Cubed",
    "garnish": "Mango",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-17",
    "slug": "berry-mule",
    "name": "Berry Mule",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/berry-mule.svg",
    "ingredients": [
      {
        "name": "mixed berry purée",
        "amount": "45 ml mixed berry purée",
        "id": "mixed-berry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a mug or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with berries and serve immediately."
    ],
    "glass": "Mug",
    "ice": "Cubed",
    "garnish": "Berries",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-18",
    "slug": "peach-bellini-mocktail",
    "name": "Peach Bellini Mocktail",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/peach-bellini-mocktail.svg",
    "ingredients": [
      {
        "name": "peach purée",
        "amount": "60 ml peach purée",
        "id": "peach-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "sparkling water",
        "amount": "120 ml sparkling water",
        "id": "sparkling-water",
        "category": "mixer",
        "aliases": [
          "sparkling water",
          "soda water"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a flute or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with peach and serve immediately."
    ],
    "glass": "Flute",
    "ice": "Cubed",
    "garnish": "Peach",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-19",
    "slug": "apple-fizz",
    "name": "Apple Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/apple-fizz.svg",
    "ingredients": [
      {
        "name": "apple juice",
        "amount": "90 ml apple juice",
        "id": "apple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with apple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Apple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-20",
    "slug": "cranberry-spritz",
    "name": "Cranberry Spritz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cranberry-spritz.svg",
    "ingredients": [
      {
        "name": "cranberry juice",
        "amount": "90 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sparkling water",
        "amount": "90 ml sparkling water",
        "id": "sparkling-water",
        "category": "mixer",
        "aliases": [
          "sparkling water",
          "soda water"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a wine glass or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-21",
    "slug": "grapefruit-spritz",
    "name": "Grapefruit Spritz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/grapefruit-spritz.svg",
    "ingredients": [
      {
        "name": "grapefruit juice",
        "amount": "75 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sparkling water",
        "amount": "90 ml sparkling water",
        "id": "sparkling-water",
        "category": "mixer",
        "aliases": [
          "sparkling water",
          "soda water"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a wine glass or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with grapefruit and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Grapefruit",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-22",
    "slug": "orange-spritz",
    "name": "Orange Spritz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/orange-spritz.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "90 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sparkling water",
        "amount": "90 ml sparkling water",
        "id": "sparkling-water",
        "category": "mixer",
        "aliases": [
          "sparkling water",
          "soda water"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a wine glass or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-23",
    "slug": "blood-orange-fizz",
    "name": "Blood Orange Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/blood-orange-fizz.svg",
    "ingredients": [
      {
        "name": "blood orange juice",
        "amount": "90 ml blood orange juice",
        "id": "blood-orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-24",
    "slug": "pineapple-mint-smash",
    "name": "Pineapple Mint Smash",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pineapple-mint-smash.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-25",
    "slug": "blueberry-smash",
    "name": "Blueberry Smash",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/blueberry-smash.svg",
    "ingredients": [
      {
        "name": "blueberry purée",
        "amount": "45 ml blueberry purée",
        "id": "blueberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a rocks or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with blueberries and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Blueberries",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-26",
    "slug": "blackberry-smash",
    "name": "Blackberry Smash",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/blackberry-smash.svg",
    "ingredients": [
      {
        "name": "blackberry purée",
        "amount": "45 ml blackberry purée",
        "id": "blackberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a rocks or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with blackberries and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Blackberries",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-27",
    "slug": "raspberry-smash",
    "name": "Raspberry Smash",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/raspberry-smash.svg",
    "ingredients": [
      {
        "name": "raspberry purée",
        "amount": "45 ml raspberry purée",
        "id": "raspberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a rocks or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with raspberries and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Raspberries",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-28",
    "slug": "strawberry-smash",
    "name": "Strawberry Smash",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/strawberry-smash.svg",
    "ingredients": [
      {
        "name": "strawberry purée",
        "amount": "45 ml strawberry purée",
        "id": "strawberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a rocks or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with strawberry and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Strawberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-29",
    "slug": "peach-cooler",
    "name": "Peach Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/peach-cooler.svg",
    "ingredients": [
      {
        "name": "peach nectar",
        "amount": "60 ml peach nectar",
        "id": "peach-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with peach and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Peach",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-30",
    "slug": "apricot-cooler",
    "name": "Apricot Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/apricot-cooler.svg",
    "ingredients": [
      {
        "name": "apricot nectar",
        "amount": "60 ml apricot nectar",
        "id": "apricot-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with apricot and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Apricot",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-31",
    "slug": "mango-cooler",
    "name": "Mango Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/mango-cooler.svg",
    "ingredients": [
      {
        "name": "mango nectar",
        "amount": "75 ml mango nectar",
        "id": "mango-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mango and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mango",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-32",
    "slug": "guava-cooler",
    "name": "Guava Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/guava-cooler.svg",
    "ingredients": [
      {
        "name": "guava nectar",
        "amount": "75 ml guava nectar",
        "id": "guava-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with guava and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Guava",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-33",
    "slug": "lychee-cooler",
    "name": "Lychee Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/lychee-cooler.svg",
    "ingredients": [
      {
        "name": "lychee juice",
        "amount": "75 ml lychee juice",
        "id": "lychee-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lychee and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lychee",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-34",
    "slug": "pomegranate-mojito",
    "name": "Pomegranate Mojito",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pomegranate-mojito.svg",
    "ingredients": [
      {
        "name": "pomegranate juice",
        "amount": "60 ml pomegranate juice",
        "id": "pomegranate-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and pomegranate and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and pomegranate",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-35",
    "slug": "raspberry-mojito",
    "name": "Raspberry Mojito",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/raspberry-mojito.svg",
    "ingredients": [
      {
        "name": "raspberry purée",
        "amount": "45 ml raspberry purée",
        "id": "raspberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and raspberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and raspberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-36",
    "slug": "strawberry-mojito",
    "name": "Strawberry Mojito",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/strawberry-mojito.svg",
    "ingredients": [
      {
        "name": "strawberry purée",
        "amount": "45 ml strawberry purée",
        "id": "strawberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and strawberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and strawberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-37",
    "slug": "pineapple-mojito",
    "name": "Pineapple Mojito",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pineapple-mojito.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "75 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-38",
    "slug": "coconut-lime-cooler",
    "name": "Coconut Lime Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/coconut-lime-cooler.svg",
    "ingredients": [
      {
        "name": "coconut water",
        "amount": "60 ml coconut water",
        "id": "coconut-water",
        "category": "other",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-39",
    "slug": "coconut-pineapple-cooler",
    "name": "Coconut Pineapple Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/coconut-pineapple-cooler.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "coconut water",
        "amount": "30 ml coconut water",
        "id": "coconut-water",
        "category": "other",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-40",
    "slug": "tropical-sunrise",
    "name": "Tropical Sunrise",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/tropical-sunrise.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "90 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "45 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "grenadine",
        "amount": "15 ml grenadine",
        "id": "grenadine",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange and cherry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-41",
    "slug": "virgin-sunrise",
    "name": "Virgin Sunrise",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-sunrise.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "90 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "grenadine",
        "amount": "15 ml grenadine",
        "id": "grenadine",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-42",
    "slug": "sunset-fizz",
    "name": "Sunset Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/sunset-fizz.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "60 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "cranberry juice",
        "amount": "30 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-43",
    "slug": "tropical-fizz",
    "name": "Tropical Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/tropical-fizz.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "60 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "passion fruit juice",
        "amount": "30 ml passion fruit juice",
        "id": "passion-fruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-44",
    "slug": "citrus-fizz",
    "name": "Citrus Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/citrus-fizz.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with citrus wheel and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Citrus wheel",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-45",
    "slug": "lime-rickey",
    "name": "Lime Rickey",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/lime-rickey.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "15 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-46",
    "slug": "raspberry-lime-rickey",
    "name": "Raspberry Lime Rickey",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/raspberry-lime-rickey.svg",
    "ingredients": [
      {
        "name": "raspberry purée",
        "amount": "45 ml raspberry purée",
        "id": "raspberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with raspberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Raspberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-47",
    "slug": "cherry-lime-rickey",
    "name": "Cherry Lime Rickey",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cherry-lime-rickey.svg",
    "ingredients": [
      {
        "name": "cherry juice",
        "amount": "30 ml cherry juice",
        "id": "cherry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with cherry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cherry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-48",
    "slug": "cucumber-lime-rickey",
    "name": "Cucumber Lime Rickey",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cucumber-lime-rickey.svg",
    "ingredients": [
      {
        "name": "cucumber juice",
        "amount": "60 ml cucumber juice",
        "id": "cucumber-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with cucumber and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cucumber",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-49",
    "slug": "ginger-peach-fizz",
    "name": "Ginger Peach Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/ginger-peach-fizz.svg",
    "ingredients": [
      {
        "name": "peach nectar",
        "amount": "60 ml peach nectar",
        "id": "peach-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with peach and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Peach",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-50",
    "slug": "ginger-pear-fizz",
    "name": "Ginger Pear Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/ginger-pear-fizz.svg",
    "ingredients": [
      {
        "name": "pear nectar",
        "amount": "60 ml pear nectar",
        "id": "pear-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pear and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pear",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-51",
    "slug": "apple-ginger-fizz",
    "name": "Apple Ginger Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/apple-ginger-fizz.svg",
    "ingredients": [
      {
        "name": "apple juice",
        "amount": "75 ml apple juice",
        "id": "apple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with apple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Apple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-52",
    "slug": "pear-ginger-fizz",
    "name": "Pear Ginger Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pear-ginger-fizz.svg",
    "ingredients": [
      {
        "name": "pear juice",
        "amount": "75 ml pear juice",
        "id": "pear-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pear and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pear",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-53",
    "slug": "spiced-apple-cooler",
    "name": "Spiced Apple Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/spiced-apple-cooler.svg",
    "ingredients": [
      {
        "name": "apple cider",
        "amount": "90 ml apple cider",
        "id": "apple-cider",
        "category": "other",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "ginger beer",
        "amount": "60 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with apple and cinnamon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Apple and cinnamon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-54",
    "slug": "cranberry-apple-spritz",
    "name": "Cranberry Apple Spritz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cranberry-apple-spritz.svg",
    "ingredients": [
      {
        "name": "cranberry juice",
        "amount": "60 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "apple juice",
        "amount": "60 ml apple juice",
        "id": "apple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "sparkling water",
        "amount": "90 ml sparkling water",
        "id": "sparkling-water",
        "category": "mixer",
        "aliases": [
          "sparkling water",
          "soda water"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a wine glass or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with apple and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Apple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-55",
    "slug": "cranberry-orange-fizz",
    "name": "Cranberry Orange Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cranberry-orange-fizz.svg",
    "ingredients": [
      {
        "name": "cranberry juice",
        "amount": "60 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "orange juice",
        "amount": "60 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-56",
    "slug": "cranberry-lime-soda",
    "name": "Cranberry Lime Soda",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cranberry-lime-soda.svg",
    "ingredients": [
      {
        "name": "cranberry juice",
        "amount": "90 ml cranberry juice",
        "id": "cranberry-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-57",
    "slug": "pineapple-lime-soda",
    "name": "Pineapple Lime Soda",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pineapple-lime-soda.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-58",
    "slug": "orange-creamsicle",
    "name": "Orange Creamsicle",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/orange-creamsicle.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "90 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "vanilla syrup",
        "amount": "30 ml vanilla syrup",
        "id": "vanilla-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-59",
    "slug": "vanilla-cream-soda",
    "name": "Vanilla Cream Soda",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/vanilla-cream-soda.svg",
    "ingredients": [
      {
        "name": "vanilla syrup",
        "amount": "20 ml vanilla syrup",
        "id": "vanilla-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "cream",
        "amount": "30 ml cream",
        "id": "cream",
        "category": "dairy",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with vanilla and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Vanilla",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-60",
    "slug": "strawberry-cream-fizz",
    "name": "Strawberry Cream Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/strawberry-cream-fizz.svg",
    "ingredients": [
      {
        "name": "strawberry purée",
        "amount": "45 ml strawberry purée",
        "id": "strawberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "vanilla syrup",
        "amount": "20 ml vanilla syrup",
        "id": "vanilla-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with strawberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Strawberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-61",
    "slug": "honey-lemon-fizz",
    "name": "Honey Lemon Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/honey-lemon-fizz.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "honey syrup",
        "amount": "20 ml honey syrup",
        "id": "honey-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-62",
    "slug": "mint-lemonade",
    "name": "Mint Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/mint-lemonade.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "water",
        "amount": "120 ml water",
        "id": "water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-63",
    "slug": "basil-lemonade",
    "name": "Basil Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/basil-lemonade.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "water",
        "amount": "120 ml water",
        "id": "water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with basil and lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Basil and lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-64",
    "slug": "rose-lemonade",
    "name": "Rose Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/rose-lemonade.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "rose syrup",
        "amount": "15 ml rose syrup",
        "id": "rose-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with rose and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Rose",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-65",
    "slug": "lavender-lemonade",
    "name": "Lavender Lemonade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/lavender-lemonade.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "lavender syrup",
        "amount": "15 ml lavender syrup",
        "id": "lavender-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "water",
        "amount": "120 ml water",
        "id": "water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lavender and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lavender",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "built",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-66",
    "slug": "hibiscus-cooler",
    "name": "Hibiscus Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/hibiscus-cooler.svg",
    "ingredients": [
      {
        "name": "hibiscus tea",
        "amount": "90 ml hibiscus tea",
        "id": "hibiscus-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-67",
    "slug": "green-tea-citrus-cooler",
    "name": "Green Tea Citrus Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/green-tea-citrus-cooler.svg",
    "ingredients": [
      {
        "name": "chilled green tea",
        "amount": "90 ml chilled green tea",
        "id": "chilled-green-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-68",
    "slug": "peach-iced-tea",
    "name": "Peach Iced Tea",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/peach-iced-tea.svg",
    "ingredients": [
      {
        "name": "black tea",
        "amount": "120 ml black tea",
        "id": "black-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "peach nectar",
        "amount": "30 ml peach nectar",
        "id": "peach-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with peach and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Peach",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-69",
    "slug": "raspberry-iced-tea",
    "name": "Raspberry Iced Tea",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/raspberry-iced-tea.svg",
    "ingredients": [
      {
        "name": "black tea",
        "amount": "120 ml black tea",
        "id": "black-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "raspberry purée",
        "amount": "30 ml raspberry purée",
        "id": "raspberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with raspberry and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Raspberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-70",
    "slug": "mango-iced-tea",
    "name": "Mango Iced Tea",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/mango-iced-tea.svg",
    "ingredients": [
      {
        "name": "black tea",
        "amount": "120 ml black tea",
        "id": "black-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "mango nectar",
        "amount": "30 ml mango nectar",
        "id": "mango-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mango and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mango",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-71",
    "slug": "passion-fruit-iced-tea",
    "name": "Passion Fruit Iced Tea",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/passion-fruit-iced-tea.svg",
    "ingredients": [
      {
        "name": "black tea",
        "amount": "120 ml black tea",
        "id": "black-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "passion fruit juice",
        "amount": "30 ml passion fruit juice",
        "id": "passion-fruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with passion fruit and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Passion fruit",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-72",
    "slug": "arnold-palmer-raspberry",
    "name": "Arnold Palmer Raspberry",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/arnold-palmer-raspberry.svg",
    "ingredients": [
      {
        "name": "iced tea",
        "amount": "90 ml iced tea",
        "id": "iced-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "raspberry lemonade",
        "amount": "90 ml raspberry lemonade",
        "id": "raspberry-lemonade",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-73",
    "slug": "arnold-palmer-peach",
    "name": "Arnold Palmer Peach",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/arnold-palmer-peach.svg",
    "ingredients": [
      {
        "name": "iced tea",
        "amount": "90 ml iced tea",
        "id": "iced-tea",
        "category": "tea",
        "aliases": []
      },
      {
        "name": "peach lemonade",
        "amount": "90 ml peach lemonade",
        "id": "peach-lemonade",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with peach and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Peach",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-74",
    "slug": "virgin-bloody-mary",
    "name": "Virgin Bloody Mary",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-bloody-mary.svg",
    "ingredients": [
      {
        "name": "tomato juice",
        "amount": "120 ml tomato juice",
        "id": "tomato-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "Worcestershire-style sauce and spices",
        "amount": "Worcestershire-style sauce and spices",
        "id": "worcestershire-style-sauce-and-spices",
        "category": "other",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with celery and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Celery",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-75",
    "slug": "virgin-mary",
    "name": "Virgin Mary",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-mary.svg",
    "ingredients": [
      {
        "name": "tomato juice",
        "amount": "120 ml tomato juice",
        "id": "tomato-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "Hot sauce and spices",
        "amount": "Hot sauce and spices",
        "id": "hot-sauce-and-spices",
        "category": "other",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with celery and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Celery",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-76",
    "slug": "virgin-moscow-mule",
    "name": "Virgin Moscow Mule",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-moscow-mule.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger syrup",
        "amount": "15 ml ginger syrup",
        "id": "ginger-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "ginger beer",
        "amount": "120 ml ginger beer",
        "id": "ginger-beer",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a mug or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Mug",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-77",
    "slug": "virgin-paloma",
    "name": "Virgin Paloma",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-paloma.svg",
    "ingredients": [
      {
        "name": "grapefruit juice",
        "amount": "75 ml grapefruit juice",
        "id": "grapefruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "grapefruit soda",
        "amount": "90 ml grapefruit soda",
        "id": "grapefruit-soda",
        "category": "fruit",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with grapefruit and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Grapefruit",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-78",
    "slug": "virgin-margarita",
    "name": "Virgin Margarita",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-margarita.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "60 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "agave syrup",
        "amount": "30 ml agave syrup",
        "id": "agave-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a rocks or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-79",
    "slug": "virgin-daiquiri",
    "name": "Virgin Daiquiri",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-daiquiri.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      },
      {
        "name": "coconut water",
        "amount": "60 ml coconut water",
        "id": "coconut-water",
        "category": "other",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a coupe or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-80",
    "slug": "virgin-colada",
    "name": "Virgin Colada",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-colada.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "90 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "coconut cream",
        "amount": "45 ml coconut cream",
        "id": "coconut-cream",
        "category": "dairy",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "10 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a hurricane or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Hurricane",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-81",
    "slug": "virgin-strawberry-daiquiri",
    "name": "Virgin Strawberry Daiquiri",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-strawberry-daiquiri.svg",
    "ingredients": [
      {
        "name": "strawberry purée",
        "amount": "60 ml strawberry purée",
        "id": "strawberry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "sugar syrup",
        "amount": "20 ml sugar syrup",
        "id": "sugar-syrup",
        "category": "syrup_or_sweetener",
        "aliases": [
          "simple syrup",
          "sugar syrup"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a coupe or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with strawberry and serve immediately."
    ],
    "glass": "Coupe",
    "ice": "Cubed",
    "garnish": "Strawberry",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-82",
    "slug": "virgin-peach-bellini",
    "name": "Virgin Peach Bellini",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-peach-bellini.svg",
    "ingredients": [
      {
        "name": "peach purée",
        "amount": "60 ml peach purée",
        "id": "peach-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "sparkling water",
        "amount": "120 ml sparkling water",
        "id": "sparkling-water",
        "category": "mixer",
        "aliases": [
          "sparkling water",
          "soda water"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a flute or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with peach and serve immediately."
    ],
    "glass": "Flute",
    "ice": "Cubed",
    "garnish": "Peach",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-83",
    "slug": "virgin-mojito-berry",
    "name": "Virgin Mojito Berry",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/virgin-mojito-berry.svg",
    "ingredients": [
      {
        "name": "berry purée",
        "amount": "45 ml berry purée",
        "id": "berry-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "120 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and berries and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint and berries",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-84",
    "slug": "citrus-cooler",
    "name": "Citrus Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/citrus-cooler.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "30 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "20 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with citrus and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Citrus",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-85",
    "slug": "lemon-ginger-cooler",
    "name": "Lemon Ginger Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/lemon-ginger-cooler.svg",
    "ingredients": [
      {
        "name": "lemon juice",
        "amount": "30 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "ginger syrup",
        "amount": "15 ml ginger syrup",
        "id": "ginger-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lemon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lemon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-86",
    "slug": "lime-ginger-cooler",
    "name": "Lime Ginger Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/lime-ginger-cooler.svg",
    "ingredients": [
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger syrup",
        "amount": "15 ml ginger syrup",
        "id": "ginger-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with lime and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Lime",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-87",
    "slug": "orange-ginger-cooler",
    "name": "Orange Ginger Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/orange-ginger-cooler.svg",
    "ingredients": [
      {
        "name": "orange juice",
        "amount": "60 ml orange juice",
        "id": "orange-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "ginger syrup",
        "amount": "15 ml ginger syrup",
        "id": "ginger-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with orange and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Orange",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-88",
    "slug": "pineapple-ginger-fizz",
    "name": "Pineapple Ginger Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pineapple-ginger-fizz.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "75 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "ginger ale",
        "amount": "100 ml ginger ale",
        "id": "ginger-ale",
        "category": "mixer",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-89",
    "slug": "mango-passion-fizz",
    "name": "Mango Passion Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/mango-passion-fizz.svg",
    "ingredients": [
      {
        "name": "mango nectar",
        "amount": "60 ml mango nectar",
        "id": "mango-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "passion fruit juice",
        "amount": "30 ml passion fruit juice",
        "id": "passion-fruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mango and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mango",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-90",
    "slug": "guava-passion-fizz",
    "name": "Guava Passion Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/guava-passion-fizz.svg",
    "ingredients": [
      {
        "name": "guava nectar",
        "amount": "60 ml guava nectar",
        "id": "guava-nectar",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "passion fruit juice",
        "amount": "30 ml passion fruit juice",
        "id": "passion-fruit-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with guava and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Guava",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-91",
    "slug": "dragon-fruit-cooler",
    "name": "Dragon Fruit Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/dragon-fruit-cooler.svg",
    "ingredients": [
      {
        "name": "dragon fruit purée",
        "amount": "75 ml dragon fruit purée",
        "id": "dragon-fruit-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with dragon fruit and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Dragon fruit",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-92",
    "slug": "kiwi-lime-fizz",
    "name": "Kiwi Lime Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/kiwi-lime-fizz.svg",
    "ingredients": [
      {
        "name": "kiwi purée",
        "amount": "45 ml kiwi purée",
        "id": "kiwi-pur-e",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "20 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with kiwi and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Kiwi",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-93",
    "slug": "pomegranate-rose-fizz",
    "name": "Pomegranate Rose Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pomegranate-rose-fizz.svg",
    "ingredients": [
      {
        "name": "pomegranate juice",
        "amount": "75 ml pomegranate juice",
        "id": "pomegranate-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "rose syrup",
        "amount": "10 ml rose syrup",
        "id": "rose-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a wine glass or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with rose and serve immediately."
    ],
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Rose",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-94",
    "slug": "cucumber-mint-fizz",
    "name": "Cucumber Mint Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/cucumber-mint-fizz.svg",
    "ingredients": [
      {
        "name": "cucumber juice",
        "amount": "60 ml cucumber juice",
        "id": "cucumber-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "mint syrup",
        "amount": "10 ml mint syrup",
        "id": "mint-syrup",
        "category": "syrup_or_sweetener",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "100 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with cucumber and mint and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Cucumber and mint",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-95",
    "slug": "melon-mint-cooler",
    "name": "Melon Mint Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/melon-mint-cooler.svg",
    "ingredients": [
      {
        "name": "melon juice",
        "amount": "75 ml melon juice",
        "id": "melon-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with mint and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Mint",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-96",
    "slug": "honeydew-cooler",
    "name": "Honeydew Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/honeydew-cooler.svg",
    "ingredients": [
      {
        "name": "honeydew juice",
        "amount": "90 ml honeydew juice",
        "id": "honeydew-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "15 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with melon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Melon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-97",
    "slug": "watermelon-basil-fizz",
    "name": "Watermelon Basil Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/watermelon-basil-fizz.svg",
    "ingredients": [
      {
        "name": "watermelon juice",
        "amount": "90 ml watermelon juice",
        "id": "watermelon-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lemon juice",
        "amount": "15 ml lemon juice",
        "id": "lemon-juice",
        "category": "citrus_juice",
        "aliases": [
          "lemon"
        ]
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with basil and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Basil",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-98",
    "slug": "watermelon-limeade",
    "name": "Watermelon Limeade",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/watermelon-limeade.svg",
    "ingredients": [
      {
        "name": "watermelon juice",
        "amount": "90 ml watermelon juice",
        "id": "watermelon-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "lime juice",
        "amount": "30 ml lime juice",
        "id": "lime-juice",
        "category": "citrus_juice",
        "aliases": [
          "lime"
        ]
      },
      {
        "name": "water",
        "amount": "30 ml water",
        "id": "water",
        "category": "water",
        "aliases": []
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with watermelon and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Watermelon",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-99",
    "slug": "pineapple-coconut-fizz",
    "name": "Pineapple Coconut Fizz",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/pineapple-coconut-fizz.svg",
    "ingredients": [
      {
        "name": "pineapple juice",
        "amount": "75 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "coconut water",
        "amount": "30 ml coconut water",
        "id": "coconut-water",
        "category": "other",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "90 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  },
  {
    "id": "mocktail-100",
    "slug": "tropical-coconut-cooler",
    "name": "Tropical Coconut Cooler",
    "type": "mocktail",
    "base": null,
    "description": "A refreshing alcohol-free drink from the Como collection, designed to be bright, balanced, and easy to make.",
    "image": "/images/drinks/tropical-coconut-cooler.svg",
    "ingredients": [
      {
        "name": "coconut water",
        "amount": "60 ml coconut water",
        "id": "coconut-water",
        "category": "other",
        "aliases": []
      },
      {
        "name": "pineapple juice",
        "amount": "60 ml pineapple juice",
        "id": "pineapple-juice",
        "category": "juice_or_puree",
        "aliases": []
      },
      {
        "name": "soda water",
        "amount": "60 ml soda water",
        "id": "soda-water",
        "category": "mixer",
        "aliases": [
          "club soda",
          "soda"
        ]
      }
    ],
    "instructions": [
      "Add the ingredients to a highball or shaker with ice.",
      "Shake or stir until thoroughly chilled.",
      "Pour into the serving glass and top with the specified mixer if needed.",
      "Garnish with pineapple and serve immediately."
    ],
    "glass": "Highball",
    "ice": "Cubed",
    "garnish": "Pineapple",
    "flavors": [
      "Refreshing",
      "Fruity",
      "Bright"
    ],
    "method": "shaken",
    "difficulty": "easy",
    "preparationTime": 5
  }
];

export const drinks: Drink[] = [...cocktails, ...mocktails];
