import { createContext, useState, useEffect } from "react";

// Creamos el contexto que exportamos para usar en otros componentes
export const CartContext = createContext();

// Componente proveedor del carrito, que envuelve la app
export const CartProvider = ({ children }) => {

  // Estado inicial del carrito: si hay algo en localStorage, lo usamos; si no, empezamos con []
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Cada vez que el carrito cambia, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //----------------------------------------------LOGICA DEL CARRITO----------------------------------------------
 
  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prev) => {
      // Buscamos si el producto ya está en el carrito
      const exists = prev.find((item) => item.id === product.id);
      
      // Si ya existe, aumentamos la cantidad
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Si no existe, lo agregamos con cantidad 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad de un producto, mínimo 1
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Calculamos el precio total del carrito
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //funcion para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Retornamos el proveedor del contexto, compartiendo funciones y valores con los componentes hijos
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};