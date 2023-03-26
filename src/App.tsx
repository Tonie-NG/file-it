import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { update } from "./../redux/slice";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import { auth } from "./firebase/firebase";
import Error404 from "./pages/404";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Sign_up from "./pages/signup/Sign_up";

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
          path: "/signup",
          element: <Sign_up />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  const userData = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const updatedUserData = Object.assign({}, userData, {
    login: true,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        dispatch(update(updatedUserData));
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
