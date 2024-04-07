import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Certificate from "./pages/Certificate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/resume", element: <Resume /> },
      { path: "/contact", element: <Contact /> },
      { path: "/project", element: <Project /> },
      { path: "/certificate", element: <Certificate /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
