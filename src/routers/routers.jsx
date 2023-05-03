import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },

  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  }
]);

export default router;
