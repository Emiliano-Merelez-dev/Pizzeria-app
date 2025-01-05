import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToFavorite } from '../../store/slices/Favorites/favoritesSlice';

import '../../styles/Menu.css';
const Menu = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const pizzas = [
    { id: 1, name: 'Margarita', description: 'Tomate, mozzarella y albahaca', price: 500, image: '/images/Margarita.jpg' },
    { id: 2, name: 'Pepperoni', description: 'Pepperoni, tomate y queso', price: 600, image: '/images/Pepperoni.jpg' },
    { id: 3, name: 'Cuatro Quesos', description: 'Mozzarella, gorgonzola, parmesano y brie', price: 700, image: '/images/Cuatro.jpg' },
    { id: 4, name: 'Pizza Primavera', description: 'Mozzarella, aceitunas verdes, huevos y tomate cherry', price: 850, image: '/images/Primavera.jpg' },
    { id: 5, name: 'Pizza con huevo frito', description: 'Mozzarella, Champiñones, cebolla y Huevos', price: 1200, image: '/images/HuevoFri.jpg' },
    { id: 6, name: 'Pizza de calabresa', description: 'Mozzarella, salchicha o chorizo calabresa, aji picante', price: 900, image: '/images/Calabresa.jpg' },
    { id: 7, name: 'Pizza de roquefort', description: 'Mozzarella, queso roquefort, nueces caramelizadas y pizca de pimienta negra molida', price: 950, image: '/images/Roquefort.jpg' },
    { id: 8, name: 'Pizza de espinaca', description: 'Mozzarella, espinacas frescas, parmesano y deintes de ajo', price: 600, image: '/images/Espinaca.jpg' },
    { id: 9, name: 'Pizza de choclo', description: 'Mozzarella, Cebolla picada, Choclo cremoso y aceitunas', price: 1100, image: '/images/Choclo.jpg' },
  ];

  return (
    <div className="menu-container">
      {pizzas.map((pizza) => (
        <div className="menu-item" key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p className="menu-item-description">{pizza.description}</p>
          <img src={pizza.image} alt={pizza.name} className="menu-item-image" />
          <p className="menu-item-price">${pizza.price}</p>
          <button >Mas informacion</button>
          <button onClick={() => {
            console.log('se esta agregando', pizza);
            dispatch(addToFavorite(pizza) ) } }
             >  Agregar a Favoritos
          </button>
        </div>
      ))}

      <div className="menu-navigation-buttons">
      <button onClick={() => navigate('/inicio')}>Volver al inicio</button>
      <button onClick={() => navigate('/favorites')}>Ir a mis favoritos</button> 
      </div>
    </div>
  );
};

export default Menu;
