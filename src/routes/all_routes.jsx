import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Create from "../pages/courses/create/Create";
import Read from "../pages/courses/read/Read";
import Update from "../pages/courses/update/Update";

export default function AllRoutes(){
    return(
        <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
        </Routes>
    )
}