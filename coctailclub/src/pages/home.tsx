import { useEffect, useState } from "react";
import { getRandomCocktail } from "../services/api";
import type { Drink } from "../types/drinks";

function Home() {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    getRandomCocktail().then(setDrink);
  }, []);

  if (!drink) return <p>Loading...</p>;

  return (
    <div>
      <h1>{drink.name}</h1>
      <img src={drink.image} width="200" />
      <p>{drink.instructions}</p>
    </div>
  );
}

export default Home;