import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Error404 from "./pages/404";
import Home from "./pages/home/Home";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
