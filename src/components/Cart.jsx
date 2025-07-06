import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold">Carrito vacío 🛒</h2>
        <p>Agregá productos para verlos acá.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Tu Carrito</h2>
      <div className="space-y-4">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-right mt-6 text-xl font-bold">
        Total: ${totalPrice}
      </div>
    </div>
  );
};

export default Cart;