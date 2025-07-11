import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // ← Usa react-icons

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className="bg-white dark:bg-gray-600 border border-gray-300 dark:border-yellow-400 
                 rounded-xl shadow-md p-4 flex flex-col items-center justify-between 
                 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      {/* Imagen */}
      <img
        src={product.img}
        alt={product.name}
        className="w-32 h-32 object-cover mb-4"
      />

      {/* Nombre y precio */}
      <h2 className="text-lg font-bold text-center">{product.name}</h2>
      <p className="text-gray-700 dark:text-gray-300">ARS ${product.price}</p>

      {/* Botón con ícono */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 px-4 py-2 bg-green-600 text-white flex items-center gap-2 
                   rounded hover:bg-green-700 active:scale-95 transition 
                   duration-200 dark:bg-amber-300 dark:hover:bg-amber-400 dark:text-black"
      >
        <FaShoppingCart className="text-sm" />
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
