import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';  // Importa useSelector
import { addToFavorite } from '../../store/slices/Favorites/favoritesSlice';

import '../../styles/Menu.css';

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Traemos las pizzas desde el Redux store
  const pizzas = useSelector((state) => state.items.items);  // Cambia 'state.items.items' según tu estructura

  return (
    <>
    <div className="menu-container">
      {pizzas.map((pizza) => (
        <div className="menu-item" key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p className="menu-item-description">{pizza.description}</p>
          <img src={pizza.image} alt={pizza.name} className="menu-item-image" />
          <p className="menu-item-price">${pizza.price}</p>
          <button onClick={() => navigate(`/more-info/${pizza.id}`)}>
            Más información
          </button>
          <button onClick={() => {
            console.log('Se está agregando', pizza);
            dispatch(addToFavorite(pizza));
          }}>
            Agregar a Favoritos
          </button>
        </div>
      ))}
       </div>
        <div className="menu-navigation-buttons">
        <button onClick={() => navigate('/inicio')}>Volver al inicio</button>
        <button onClick={() => navigate('/favorites')}>Ir a mis favoritos</button> 
       </div>
    </>
  );
};

export default Menu;
