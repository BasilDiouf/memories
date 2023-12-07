import React from "react";
import ReactDOM from "react-dom/client";
import { Carousel } from "../src/components/Carousel/Carousel";
import { Homepage } from "../src/components/Homepage/Homepage";
import { ErrorPage } from "../src/components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/memories",
    element: <Carousel />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
