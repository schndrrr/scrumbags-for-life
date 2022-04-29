import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home"

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
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
