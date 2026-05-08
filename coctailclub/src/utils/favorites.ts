import type { Drink } from "../types/drinks";

const FAVORITES_KEY = "favorites";

export const getFavorites = (): Drink[] => {
  const data = localStorage.getItem(FAVORITES_KEY);

  return data ? JSON.parse(data) : [];
};

export const addFavorite = (drink: Drink) => {
  const favorites = getFavorites();

  favorites.push(drink);

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
};