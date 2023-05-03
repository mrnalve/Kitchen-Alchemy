import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/chefs/:id",
    element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
    loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`),
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  }
]);

export default router;
