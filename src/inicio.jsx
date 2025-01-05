import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import "./styles/Pizzeria.css";

export const Inicio = () => {
  const favorites = useSelector((state) => state.favorites.favorite);

  return (
    <>
      <div className="inicio-container">
          <h1 className="title">Bienvenido a la pizzería</h1>
        <Navbar favorites={favorites} />
        <div className="welcome-content">
        </div>
      </div>
    </>
  );
};

export default Inicio;
