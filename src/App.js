import { Routes, Route } from 'react-router-dom'
import "./App.scss";

// import pages
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
