import React from "react";
import {BrowserRouter as Router, useRoutes, Route, Routes, useNavigate} from "react-router-dom";
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

const App = () => {
   return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/basket" element={<Basket />}/>
          <Route path="/login" element={<Login />}/>
          {/*auto redirectiing to login if not logged in*/}
          <Route path="/user" element={localStorage.getItem('user') ? <User /> : <Login/>}/>
          <Route path="/ordersuccess" element={<OrderSuccess />}/>
          <Route path="/payment" element={<PayPal />}/>
          <Route path="/imprint" element={<Imprint />}/>
          <Route path="/privacy" element={<DataPrivacy />}/>
          <Route path="/revocation" element={<Revocation />}/>
        </Routes>
      </Router>
  );
};

export default App;
