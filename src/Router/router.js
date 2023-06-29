import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Container/Login";
import Home from "../Container/Home";
import PrivateRoute from "./PrivateRoute";
import Users from "../Container/Users/Users";
import CreateUser from "../Container/Users/Create";
import ListServices from "../Container/Services/ListServices";
import CreateServices from "../Container/Services/CreateServices";
import ListFamilyRefered from "../Container/FamilyRefered/ListFamilyRefered";
import CreateFamilyRefered from "../Container/FamilyRefered/CreateFamilyRefered";

const RoutesCras = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={Home} />} path="/" exact />
                <Route element={<PrivateRoute Component={Users} />} path="/usuarios" />
                <Route element={<PrivateRoute Component={CreateUser} />} path="/criar/usuarios" />
                <Route element={<PrivateRoute Component={ListServices} />} path="/atentimento" />
                <Route element={<PrivateRoute Component={CreateServices} />} path="/criar/atentimento" />
                <Route element={<PrivateRoute Component={ListFamilyRefered} />} path="/familia" />
                <Route element={<PrivateRoute Component={CreateFamilyRefered} />} path="/criar/familia" />
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCras;