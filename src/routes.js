import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCTLIST_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Register
    },
    {
        path: PRODUCTLIST_ROUTE,
        Component: ProductList
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
]