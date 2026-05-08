import type { ApiDrink, Drink } from "../types/drinks";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const mapDrink = (apiDrink: ApiDrink): Drink => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = apiDrink[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return {
    id: apiDrink.idDrink,
    name: apiDrink.strDrink,
    image: apiDrink.strDrinkThumb,
    instructions: apiDrink.strInstructions,
    ingredients,
  };
  
};

export const getRandomCocktail = async (): Promise<Drink> => {
  const response = await fetch(`${BASE_URL}/random.php`);
  const data = await response.json();

  return mapDrink(data.drinks[0]);
};

export const searchCocktails = async (
  query: string
): Promise<Drink[]> => {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${query}`
  );

  const data = await response.json();

  if (!data.drinks) {
    return [];
  }

  return data.drinks.map(mapDrink);
};