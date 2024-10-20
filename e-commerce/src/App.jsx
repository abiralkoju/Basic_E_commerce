import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
