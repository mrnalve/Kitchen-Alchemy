import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";

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
]);

export default router;
