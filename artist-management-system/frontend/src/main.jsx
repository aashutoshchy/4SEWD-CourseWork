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

import ProtectedRoute from "./components/Admin/ProtectedRoute.jsx";
import AdminLayout from "./components/Admin/AdminLayout.jsx";
import Sidebar from "./components/Admin/Sidebar/Sidebar.jsx";
import Dashboard from "./components/Admin/Dashboard/Dashboard.jsx";
import ArtistsList from "./components/Admin/Artists/ArtistsList.jsx";
import ArtistForm from "./components/Admin/Artists/ArtistForm.jsx";
import ReleasesList from "./components/Admin/Releases/ReleasesList.jsx";
import NoticeList from "./components/Admin/Notices/NoticesList.jsx";
import NoticeForm from "./components/Admin/Notices/NoticeForm.jsx";

import MessagesList from "./components/Admin/Messages/MessagesList.jsx";
import ReleaseForm from "./components/Admin/Releases/ReleaseForm.jsx";
import NoticeDetail from "./components/Notice/NoticeDetail.jsx";

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
        path: "/notice/:id",
        element: <NoticeDetail />,
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
    ],
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard />, index: true },
      { path: "artists", element: <ArtistsList /> },
      { path: "artists/new", element: <ArtistForm /> },
      { path: "artists/edit/:slug", element: <ArtistForm /> },
      { path: "releases", element: <ReleasesList /> },
      { path: "releases/new", element: <ReleaseForm /> },
      { path: "releases/edit/:id", element: <ReleaseForm /> },
      { path: "notice", element: <NoticeList /> },
      { path: "notice/new", element: <NoticeForm /> },
      { path: "messages", element: <MessagesList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
