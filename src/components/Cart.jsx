import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const {
    cart,
    clearCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useContext(CartContext);

  if (!isCartOpen) return null;

  const handleClose = () => setIsCartOpen(false);

  return (
    // FONDO OSCURO + MODAL CENTRADO
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* CONTENIDO DEL MODAL */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* BOTÓN CERRAR */}
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* SI EL CARRITO ESTÁ VACÍO */}
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold">Carrito vacío 🛒</h2>
            <p>Agregá productos para verlos acá.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">🛒 Tu Carrito</h2>

            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-700 p-4 rounded shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
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

            {/* TOTAL */}
            <div className="text-right mt-6 text-xl font-bold">
              Total: ${totalPrice}
            </div>

            {/* BOTÓN CERRAR ABAJO */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cerrar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;