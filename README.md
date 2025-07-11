#Link del proyecto desplegado en Netlify 

https://modulo4-sprint3-diplomaturadw-nodotec.netlify.app/


##Create context permite:

Manejar el carrito desde cualquier componente sin pasar props.

Guardar y recuperar los datos del carrito aunque recargues la página.

Encapsular la lógica de negocio del carrito en un solo lugar.


LOS PASOS:

✅ 1. Crear el contexto

Usás createContext() para crear un nuevo contexto.
Ejemplo:

import { createContext } from 'react';

export const CartContext = createContext();

✅ 2. Crear el Provider

El Provider es el componente que va a envolver a tu app (o parte de ella) y va a proporcionar el estado o funciones a través del contexto.

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

👉 Tenés que envolver tu <App /> o el componente principal con el CartProvider en main.jsx o App.jsx.

✅ 3. Consumir el contexto
Usás useContext(NombreDelContexto) en los componentes donde necesitás acceder al estado o funciones.

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MiComponente = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <p>Hay {cart.length} productos en el carrito.</p>
    </div>
  );
};


Inicio de proyecto con vite: npm create vite@latest

TAILWIND CSS

Instalación de tailwind css : npm install tailwindcss @tailwindcss/vite

Configuracion en vite.config.js:

Realizar el import tailwindcss from '@tailwindcss/vite'

index.css: @import "tailwindcss"

agregar tailwindcss() en el arreglo de plugins

Eliminar App.css

BOOSTRAP

Instalacion de boostrap: npm install bootstrap-icons

MOTION

npm install framer-motion

Uso de hooks - useState, useEffect

STORAGE - Almacenamineto web

Local Storage - Session Storage

Se accede abriendo la herramienta de inspeccionar - aplicacion

ver ExampleStorage

seteamos desde app hacia el storage y obtenermos desde el storage para el componente hijo
