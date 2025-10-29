import { createBrowserRouter } from "react-router";
import Home from "../Components/Pages/Home/Home";
import Product from "../Components/Pages/Product/Product";
import Shared from "../Shared/Shared";
import ProductDetails from "../Components/Pages/Product/ProductDetails";
import Carts from "../Components/Pages/Carts/Carts";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/signup";
import Logout from "../Components/Authentication/Logout";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Shared></Shared>,
    children: [
      {
        path: "/",
        element:  <Home></Home>,
      },
      {
        path: "/product",
        element:  <PrivateRoute>
          <Product></Product>
          </PrivateRoute>,
      },
      {
        path:"/productdetails/:productId",
        element:<ProductDetails></ProductDetails>
      },
      {
        path: "/carts",
        element:  <Carts></Carts>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/logout",
        element:<Logout></Logout>
      }
      
    ]
  },
]);

export default router;