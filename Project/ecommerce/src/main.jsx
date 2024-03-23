import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Singup from "./components/Singup.jsx";
import Cart from "./components/Cart.jsx";
import Allproduct from "./components/Allproduct.jsx";
import ContactForm from "./components/ContactForm.jsx";

function addItem(insertItem) {
  setCartItem([...cartItem, insertItem]);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/singup", element: <Singup /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/allproduct", element: <Allproduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
