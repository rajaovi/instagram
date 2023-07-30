import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login"; 
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RoutePage;
