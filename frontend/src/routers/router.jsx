import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/order',
                element: <h1>order</h1>
            },
            {
                path:'/about',
                element: <h1>about</h1>
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <CartPage />
            }
        ]
    }
])

export default router