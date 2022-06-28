import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Admin />
        </BrowserRouter>
    );
};

export default App;