import { useLocation } from "react-router-dom";
import type { Drink } from "../types/drinks";
import { addFavorite } from "../utils/favorites";

function Detail() {
  const location = useLocation();

  const drink = location.state?.drink as Drink;

  if (!drink) {
    return <p>No cocktail found</p>;
  }

  return (
  <div className="container py-5">
    <div className="card shadow-lg border-0 p-4">
      <div className="row align-items-center">
        
        <div className="col-md-5 text-center">
          <img
            src={drink.image}
            alt={drink.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-7">
          <h1 className="mb-3">{drink.name}</h1>

          <button
            className="btn btn-dark mb-4"
            onClick={() => addFavorite(drink)}
          >
            <i className="bi bi-cup-straw me-2"></i>
            Add to Favorites
          </button>

          <h4>Instructions</h4>
          <p>{drink.instructions}</p>

          <h4>Ingredients</h4>

          <ul className="list-group">
            {drink.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </div>
);
}

export default Detail;