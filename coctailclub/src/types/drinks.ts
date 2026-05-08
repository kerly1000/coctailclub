export interface ApiDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strAlcoholic?: string;

  [key: string]: any; // ingredientide jaoks
}

export interface Drink {
  id: string;
  name: string;
  image: string;
  instructions: string;
  ingredients: string[];
}