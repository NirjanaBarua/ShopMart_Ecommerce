import { createBrowserRouter } from "react-router";
import Home from "../Components/Pages/Home/Home";
import Product from "../Components/Pages/Product/Product";
import Shared from "../Shared/Shared";
import ProductDetails from "../Components/Pages/Product/ProductDetails";
import Carts from "../Components/Pages/Carts/Carts";
import Login from "../Components/Authentication/Login";
import Logout from "../Components/Authentication/Logout";

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
        element:  <Product></Product>,
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
        path:"/logout",
        element:<Logout></Logout>
      }
      
    ]
  },
]);

export default router;