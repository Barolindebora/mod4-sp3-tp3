import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  // Usamos el contexto para acceder al estado y a la función toggle
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme} // cambia el tema al hacer click
      className="m-4 px-4 py-2 rounded text-white bg-gray-800 dark:bg-yellow-500 hover:opacity-80 transition"
    >
      {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeButton;