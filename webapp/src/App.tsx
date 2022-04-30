import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    // ...
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <AppRoute />
      </Router>
      <Footer />
    </>
  );
};

export default App;
