import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Container/Login";
import Home from "../Container/Home";

const RoutesCras = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCras;