import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../../store/slices/Favorites/favoritesSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Favorites.css';

export const Favorites = () => {
  const dispatch = useDispatch();
  const reduxFavorites = useSelector((state) => state.favorites.favorite);

  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleRemove = (pizzaId) => {
    const updatedFavorites = favorites.filter((pizza) => pizza.id !== pizzaId);
    setFavorites(updatedFavorites);
    dispatch(removeFromFavorite(pizzaId));
  };

  useEffect(() => {
    if (reduxFavorites.length > 0) {
      const uniqueFavorites = [...favorites, ...reduxFavorites].reduce(
        (acc, curr) => {
          if (!acc.find((item) => item.id === curr.id)) {
            acc.push(curr);
          }
          return acc;
        },
        []
      );
      setFavorites(uniqueFavorites);
      localStorage.setItem("favorites", JSON.stringify(uniqueFavorites));
    }
  }, [reduxFavorites]);

  return (
    <>
      <h2>Mis Pizzas Favoritas</h2>
      <div className="favorites-container">
        {favorites.length > 0 ? (
          favorites.map((pizza) => (
            <div key={pizza.id} className="favorite-item animate-favorite">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="favorite-item-image"
              />
              <div className="favorite-item-details">
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <button
                  onClick={() => handleRemove(pizza.id)}
                  className="favorite-item-remove"
                >
                  Eliminar de Favoritos
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No tienes pizzas favoritas aún.</p>
        )}
      </div>
      <div className="favorites-navigation">
        <button onClick={() => navigate('/menu')} className="favorites-back-button">
          Volver al menú de pizzas
        </button>
      </div>
    </>
  );
};
