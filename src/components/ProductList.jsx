import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import productos from "../api/productos.json";
import ProductCard from "./ProductCard"; // 💡 importamos la tarjeta

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setProducts(productos);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 dark:bg-gray-800">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
