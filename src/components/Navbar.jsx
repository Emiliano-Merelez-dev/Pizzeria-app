import React, { useState } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
    <button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Abrir la barra de opciones</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      {isOpen && (
        <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink 
           className="nav-link"
           to="/">
             Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
           className="nav-link" 
           to="/menu">
            Menu de Pizzas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
           className="nav-link" 
           to="/favorites">
             Favoritos
          </NavLink>
        </li>
      </ul>
      )}
    </div>
  </nav>

  )
 
};

export default Navbar;




