import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateFamilyRefered from "../Container/FamilyRefered/CreateFamilyRefered";
import ListFamilyRefered from "../Container/FamilyRefered/ListFamilyRefered";
import Home from "../Container/Home";
import Login from "../Container/Login";
import CreateServices from "../Container/Services/CreateServices";
import ListServices from "../Container/Services/ListServices";
import CreateTechnician from "../Container/Technician/CreateTechnician";
import Technician from "../Container/Technician/Technician";
import CreateTypeService from "../Container/TypeService/CreateTypeService";
import TypeService from "../Container/TypeService/TypeService";
import CreateUser from "../Container/Users/Create";
import Users from "../Container/Users/Users";
import PrivateRoute from "./PrivateRoute";
import EditFamilyRefered from "../Container/FamilyRefered/EditFamilyRefered";
import EditTechnician from "../Container/Technician/EditTechnician";

const RoutesCras = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={ListServices} />} path="/" exact />
                <Route element={<PrivateRoute Component={Users} />} path="/usuarios" />
                <Route element={<PrivateRoute Component={CreateUser} />} path="/criar/usuarios" />
                <Route element={<PrivateRoute Component={ListServices} />} path="/atendimento" />
                <Route element={<PrivateRoute Component={CreateServices} />} path="/criar/atentimento" />
                <Route element={<PrivateRoute Component={ListFamilyRefered} />} path="/familia" />
                <Route element={<PrivateRoute Component={CreateFamilyRefered} />} path="/criar/familia" />
                <Route element={<PrivateRoute Component={EditFamilyRefered} />} path="/edit/familia/:id" />
                <Route element={<PrivateRoute Component={Technician} />} path="/tecnico" />
                <Route element={<PrivateRoute Component={CreateTechnician} />} path="/criar/tecnico" />
                <Route element={<PrivateRoute Component={EditTechnician} />} path="/edit/tecnico/:id" />
                <Route element={<PrivateRoute Component={TypeService} />} path="/servico" />
                <Route element={<PrivateRoute Component={CreateTypeService} />} path="/criar/servico" />
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCras;