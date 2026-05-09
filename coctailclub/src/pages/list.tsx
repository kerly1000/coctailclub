import { useState } from "react";
import { searchCocktails } from "../services/api";
import type { Drink } from "../types/drinks";
import { Link } from "react-router-dom";

function List() {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [error, setError] = useState("");
  
  const handleSearch = async () => {
    try {
      setError("");

      const data = await searchCocktails(query);

      setDrinks(data);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
  <div className="container py-4">
    <h1 className="mb-4 text-center">Cocktail Search</h1>

    <div
      className="d-flex justify-content-center mb-5"
>
      <div
        className="input-group cocktail-search"
        style={{ maxWidth: "500px" }}
      >
        <input
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cocktail..."
        />

        <button
          className="btn btn-warning"
          onClick={handleSearch}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>

    {error && <p className="text-danger">{error}</p>}

    <div className="row">
      {drinks.map((drink) => (
        <div className="col-md-4 mb-4" key={drink.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={drink.image}
              className="card-img-top"
              alt={drink.name}
            />

            <div className="card-body">
              <h5 className="card-title">{drink.name}</h5>

              <Link to={`/detail/${drink.id}`}
                className="btn btn-outline-dark"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default List;