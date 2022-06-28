import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import UserStore from './store/UserStore';


export const Context = createContext(null)

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Context.Provider value={{
    user: new UserStore()
  }}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='admin' element= {<Admin/>} />
      <Route path='cart' element= {<Cart/>} />
      <Route path='login' element= {<Login/>} />
      <Route path='reg' element= {<Register/>} />
      <Route path='item' element= {<Product/>} />
      <Route path='items' element= {<ProductList/>} />
    </Routes>
  </BrowserRouter>,
  </Context.Provider>
);

