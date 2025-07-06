// Importamos los hooks de React
import { createContext, useEffect, useState } from "react";

// Creamos el contexto que se va a consumir en toda la app
export const ThemeContext = createContext();

// Creamos el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  // Estado: true = oscuro, false = claro
  // Al iniciar, lee si en localStorage está guardado el tema como "dark"
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Función para alternar entre temas
  const toggleTheme = () => {
    setDarkMode(prev => !prev); // cambia true ↔ false
  };

  // Cada vez que cambia `darkMode`, se actualiza la clase en <html>
  useEffect(() => {
    const root = window.document.documentElement; // <html>
    if (darkMode) {
      root.classList.add("dark"); // activa modo oscuro
      localStorage.setItem("theme", "dark"); // guarda en localStorage
    } else {
      root.classList.remove("dark"); // quita modo oscuro
      localStorage.setItem("theme", "light"); // guarda en localStorage
    }
  }, [darkMode]);

  // Hacemos accesible el estado y la función toggle a todos los componentes hijos
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
