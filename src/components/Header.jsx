import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ThemeButton from "./ThemeButton";

const Header = ({ setIsCartOpen }) => {
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gray-200 p-4 flex justify-between items-center shadow-md">
      {/* Botón Modo Claro/Oscuro a la izquierda */}
      <ThemeButton />

      {/* Botón Carrito a la derecha */}
      <button
        onClick={handleCartOpen}
        className="relative flex items-center justify-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        <img
          src="iconos/carrito.png"
          alt="Ver Carrito"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        {/* Mostrar el número total de productos en el carrito - para que salga el globito */}
        {totalItems >= 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;