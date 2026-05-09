import { useEffect, useState } from "react";
import { getRandomCocktail } from "../services/api";
import type { Drink } from "../types/drinks";
import { Link } from "react-router-dom";

function Home() {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    getRandomCocktail().then(setDrink);
  }, []);

  if (!drink) return <p>Loading...</p>;

  return (
  <div className="container py-5 text-center">
    
    <h1 className="display-1 mb-5">
      {drink.name}
    </h1>

    <img
      src={drink.image}
      alt={drink.name}
      className="img-fluid rounded shadow-lg mb-4 hero-image"
      style={{
        maxWidth: "450px",
      }}
    />

    <div className="mb-5">
      <Link
        to={`/detail/${drink.id}`}
        className="btn btn-warning btn-lg px-4"
      >
        <i className="bi bi-cup-straw me-2"></i>
        What do you need for this
      </Link>
    </div>
  </div>
);
}

export default Home;