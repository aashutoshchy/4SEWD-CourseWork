import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from "./components/About/About.jsx";
import Notice from "./components/Notice/Notice.jsx";
import Artists from "./components/Artists/Artists.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
