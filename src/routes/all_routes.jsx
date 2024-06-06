import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Assignature from "../pages/assignature/Assignature"
import Roadmaps from "../pages/roadmaps/Roadmaps";
import Payments from "../pages/payments/Payments";

export default function AllRoutes(){
    return(
        <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/assignature" element={<Assignature/>} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/payments" element={<Payments/>} />
        </Routes>
    )
}