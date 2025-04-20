import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Bookdetails from "../Pages/BookDetails/Bookdetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/About",
        Component: About,
      },
      {
        path: "/Bookdetails/:id",
        loader: () => fetch("booksData.json"),
        Component: Bookdetails,
      },
    ],
  },
]);
