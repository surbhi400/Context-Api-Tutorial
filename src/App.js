import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';


function App() {

  const [cart, setCart]=useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
