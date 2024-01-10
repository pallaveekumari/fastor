import React from "react";
import Login from "./Login/Login";
import Otp from "./Otp/Otp";
import { Route, Routes } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Navbar/Card/Card";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/card" element={<Card/>}/>
    </Routes>
  );
};

export default AllRoutes;
