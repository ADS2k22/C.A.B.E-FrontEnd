import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Assignature from "../pages/assignature/Assignature"
import Curso from "../pages/curso/Curso";
import Roadmaps from "../pages/roadmaps/Roadmaps";
import Payments from "../pages/payments/Payments";
import Certificate from "../pages/certificate/Certificate";
import SelectedCourse from "../pages/curso/SelectedCourse";
import { RoadmapModule } from "../pages/roadmaps/Roadmap-module";
import Create from "../pages/courses/create/Create";
import Read from "../pages/courses/read/Read";
import Update from "../pages/courses/update/Update";
import Delete from "../pages/courses/delete/Delete";
import Questions from "../pages/quiz/Questions";
import Quiz from "../pages/quiz/Quiz";

export default function AllRoutes(){
    return(
        <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/assignature" element={<Assignature/>} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/roadmaps" element={<Roadmaps /> }/>
            <Route path="/roadmaps/:nome" element={<RoadmapModule /> }/>
            <Route path="/payments" element={<Payments/>} />
            <Route path="/certificate" element={<Certificate/>} />
            <Route path="/curso/:id" element={<SelectedCourse />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/quiz" element={<Quiz />} />

        </Routes>
    )
}