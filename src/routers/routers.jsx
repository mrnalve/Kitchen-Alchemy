import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/chefs/:id",
    element: <ChefDetails></ChefDetails>,
    loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
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
