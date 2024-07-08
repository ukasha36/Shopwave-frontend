import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductList from "./features/productList/components/ProductList.js";
import Home from "./pages/Home.js";
import { Counter } from "./features/counter/Counter";

import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import Cart from "./features/cart/Cart.js";
import CartPage from "./pages/CartPage.js";
import Checkout from "./pages/Checkout.js";
import ProductDetails from './features/productList/components/ProductDetails.js';

import MainLayout from './Layout/MainLayout';
import SimpleLayout from './Layout/SimpleLayout';

import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/productdetails", element: <ProductDetails /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
  {
    path: "/",
    element: <SimpleLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
