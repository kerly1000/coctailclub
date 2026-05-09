import { useEffect, useState } from "react";
import type { Drink } from "../types/drinks";
import { getFavorites, removeFavorite } from "../utils/favorites";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState<Drink[]>([]);

  
  useEffect(() => {
    const savedFavorites = getFavorites();
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="container py-4">
      <h1>Favorites</h1>

      {favorites.length === 0 && (
        <p>No favorite cocktails yet.</p>
      )}

      <div className="row">
        {favorites.map((drink) => (
          <div className="col-md-4 mb-4" key={drink.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={drink.image}
                className="card-img-top"
                alt={drink.name}
              />

              <div className="card-body">
                <h5 className="mb-3">{drink.name}</h5>

                <Link to={`/detail/${drink.id}`}
                  className="btn btn-outline-dark"
                >
                  View Details
                </Link>
                
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    removeFavorite(drink.id);

                    setFavorites(
                      favorites.filter(
                        (fav) => fav.id !== drink.id
                      )
                    );
                  }}
                >
                  <i className="bi bi-trash me-2"></i>
                  Don't like it anymore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;