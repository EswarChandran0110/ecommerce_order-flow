import Navbar from './Components/navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Order from './Components/order';
import Cart from './Components/cart';
import History from './Components/history';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </>
  );
}

export default App;
