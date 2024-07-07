import React from "react";
import ProductList from "./features/productList/ProductList.js";
import Home from "./pages/Home.js";
import { Counter } from "./features/counter/Counter";

import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
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
