import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
path:"/",
element:<Layout/>,
children:[

  { path: "/", element: <Home /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
]
}
]);
