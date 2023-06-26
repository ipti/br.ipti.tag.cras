import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Container/Login";
import Home from "../Container/Home";
import PrivateRoute from "./PrivateRoute";
import Users from "../Container/Users";

const RoutesCras = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={Home} />} path="/" exact />
                <Route element={<PrivateRoute Component={Users} />} path="/usuarios" />
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCras;