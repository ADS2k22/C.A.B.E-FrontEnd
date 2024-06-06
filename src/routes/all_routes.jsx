import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Assignature from "../pages/assignature/Assignature"

export default function AllRoutes(){
    return(
        <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/assignature" element={<Assignature/>} />
        </Routes>
    )
}