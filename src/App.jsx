import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { useState } from 'react';
import Header from './components/Header'

function App() {
  // State to manage la visivilidad del carrito
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleDark = () => {document.getElementById("rootElement").classList.toggle("dark")}
  return (
    // bg y text adaptables al modo claro/oscuro
    <div id="rootElement" className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <Header 
    setIsCartOpen={setIsCartOpen}/>
      {/* Título */}
      <h1 className="text-center text-3xl font-bold mt-6">
        Catálogo de Productos
      </h1>

      {/* Lista de productos */}
      <ProductList 
      setIsCartOpen={setIsCartOpen}
      />

      {/* Carrito */}
      <Cart 
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
}

export default App;


