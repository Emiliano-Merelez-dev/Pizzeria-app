import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MasInfo = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const pizzas = useSelector((state) => state.items.items);
  const pizza = pizzas.find((p) => p.id === parseInt(id));

  if (!pizza) {
    return <p>La pizza no existe.</p>;
  }

  return (
    <div className="masinfo-container">
      <div className="masinfo-card">
        <img className="masinfo-image" src={pizza.image} alt={pizza.name} />
        <div className="masinfo-details">
          <h1>{pizza.name}</h1>
          <p>{pizza.moreDescription}</p>
          <p className="masinfo-price">Precio: ${pizza.price}</p>
          <button onClick={() => navigate('/menu')}>Volver al menu</button>
        </div>
      </div>
    </div>
  );
};


export default MasInfo;
