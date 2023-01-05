import { createBrowserRouter } from "react-router-dom";
import Login from "../components/UserRegistration/Login/Login";
import Signup from "../components/UserRegistration/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default router;
