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
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Artist from "./components/Artists/Artist.jsx";

import { useParams } from "react-router-dom";

import Profile from "./components/Artists/ArtistDetails/Profile.jsx";
import Discography from "./components/Artists/ArtistDetails/Discography.jsx";
import Gallery from "./components/Artists/ArtistDetails/Gallery.jsx";
import DiscographyDetail from "./components/Artists/ArtistDetails/DiscographyDetail.jsx";

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
        path: "/artists/:slug",
        element: <Artist />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "discography",
            element: <Discography />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
        ],
      },
      {
        path: "artists/:slug/discography/:id",
        element: <DiscographyDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
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
