import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Drink } from "../types/drinks";
import { getCocktailById } from "../services/api";
import { addFavorite, isFavorite } from "../utils/favorites";

function Detail() {
  const { id } = useParams();

  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState(true);
  const [favoriteAdded, setFavoriteAdded] = useState(false);

  useEffect(() => {
    const fetchDrink = async () => {
      if (!id) return;

      const data = await getCocktailById(id);
      setDrink(data);
      console.log(data);

      if (data) {
        setFavoriteAdded(isFavorite(data.id));
      }

      setLoading(false);
    };

    fetchDrink();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  if (!drink) {
    return <p className="text-center mt-5">No cocktail found</p>;
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-5 text-center">
        <h1 className="mb-4">{drink.name}</h1>

        <img
          src={drink.image}
          alt={drink.name}
          className="img-fluid rounded mx-auto d-block mb-4"
          style={{ maxWidth: "400px" }}
        />

        {favoriteAdded ? (
          <button className="btn btn-success mb-5 mx-auto" disabled>
            <i className="bi bi-cup-straw me-2"></i>
            One of Favorites
          </button>
        ) : (
          <button
            className="btn btn-warning mb-5 mx-auto"
            onClick={() => {
              addFavorite(drink);
              setFavoriteAdded(true);
            }}
          >
            <i className="bi bi-cup-straw me-2"></i>
            Add to Favorites
          </button>
        )}

        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <h4 className="mb-3">Instructions</h4>
          <p className="mb-5 text-white">{drink.instructions}</p>

          <h4 className="mb-3">Ingredients</h4>
          <ul className="list-group">
            {drink.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;