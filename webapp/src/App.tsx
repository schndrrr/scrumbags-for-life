import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import "./main.css";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import User from "./pages/User";
import OrderSuccess from "./pages/OrderSuccess";
import PayPal from "./pages/PayPal";
import Imprint from "./pages/Imprint";
import DataPrivacy from "./pages/DataPrivacy";
import Revocation from "./pages/Revocation";

const AppRoute = () => {
  let routes = useRoutes([
    {path: "/", element: <Home /> },
    {path: "/basket", element: <Basket/>},
    {path: "/login", element: <Login/>},
    {path: "/user", element: <User/>},
    {path: "/ordersuccess", element: <OrderSuccess/>},
    {path: "/payment", element: <PayPal/>},
    {path: "/imprint", element: <Imprint/>},
    {path: "/privacy", element: <DataPrivacy/>},
    {path: "/revocation", element: <Revocation/>},

    // ...
  ]);
  return routes;
};

const App = () => {
  return (
      <Router>
        <AppRoute />
      </Router>
  );
};

export default App;
