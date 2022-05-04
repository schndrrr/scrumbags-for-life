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

const AppRoute = () => {
  let routes = useRoutes([
    {path: "/", element: <Home /> },
    {path: "/basket", element: <Basket/>},
    {path: "/login", element: <Login/>},
    {path: "/user", element: <User/>},
    {path: "/ordersuccess", element: <OrderSuccess/>},

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
