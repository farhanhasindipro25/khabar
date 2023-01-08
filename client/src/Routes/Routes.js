import { createBrowserRouter } from "react-router-dom";
import Login from "../components/UserRegistration/Login/Login";
import Signup from "../components/UserRegistration/Signup/Signup";
import MenuPage from "../components/MenuPage/MenuPage";
import ProtectedRoute from "../hoc/ProtectedRoute";

const router = createBrowserRouter([
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
    element: (
      <ProtectedRoute>
        <MenuPage></MenuPage>
      </ProtectedRoute>
    ),
  },
]);

export default router;
