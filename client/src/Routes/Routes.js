import { createBrowserRouter } from "react-router-dom";
import Login from "../components/UserRegistration/Login/Login";
import Signup from "../components/UserRegistration/Signup/Signup";
import MenuPage from "../components/MenuPage/MenuPage";
import Main from "../components/layouts/Main";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Main></Main>,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "/signup",
  //       element: <Signup></Signup>,
  //     },
  //     {
  //       path: "/menu",
  //       element: <MenuPage></MenuPage>,
  //     },
  //   ],
  // },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/menu",
    element: <MenuPage></MenuPage>,
  },
]);

export default router;
