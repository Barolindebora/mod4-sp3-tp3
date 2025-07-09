import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import productos from "../api/productos.json"; // Tu ruta personalizada

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Consumimos la función para agregar

  useEffect(() => {
    setProducts(productos); // Cargamos productos desde el JSON
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 dark:bg-gray-800">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded shadow-md p-4 flex flex-col items-center justify-between dark:bg-gray-800"
        >
          {/* Imagen del producto */}
          <img
            src={product.img}
            alt={product.name}
            className="w-32 h-32 object-cover mb-4"
          />

          {/* Nombre y precio */}
          <h2 className="text-lg font-bold text-center">{product.name}</h2>
          <p className="text-gray-700">ARS ${product.price}</p>

          {/* Botón agregar */} 
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
