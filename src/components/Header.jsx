const Header = ({ setIsCartOpen }) => {
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="bg-gray-200 p-4 flex justify-end items-center shadow-md">
      <button
        onClick={handleCartOpen}
        className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        {/* Ícono del carrito desde la carpeta public */}
        <img
          src="iconos/carrito.png" 
          alt="Ver Carrito"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </button>
    </header>
  );
};

export default Header;