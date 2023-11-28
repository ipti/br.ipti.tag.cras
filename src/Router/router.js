import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateFamilyRefered from "../Container/FamilyRefered/CreateFamilyRefered";
import EditFamilyRefered from "../Container/FamilyRefered/EditFamilyRefered";
import ListFamilyRefered from "../Container/FamilyRefered/ListFamilyRefered";
import Login from "../Container/Login";
import CreateServices from "../Container/Services/CreateServices";
import ListServices from "../Container/Services/ListServices";
import CreateTechnician from "../Container/Technician/CreateTechnician";
import EditTechnician from "../Container/Technician/EditTechnician";
import Technician from "../Container/Technician/Technician";
import CreateTypeService from "../Container/TypeService/CreateTypeService";
import EditTypeService from "../Container/TypeService/EditTypeService";
import TypeService from "../Container/TypeService/TypeService";
import CreateUser from "../Container/Users/Create";
import Users from "../Container/Users/Users";
import PrivateRoute from "./PrivateRoute";
import EditUser from "../Container/Users/Edit";
import EditService from "../Container/Services/EditService";
import Benefits from "../Container/Benefits/ListBenefits";
import CreateBenefits from "../Container/Benefits/CreateBenefits";
import EditBenefits from "../Container/Benefits/EditBenefits";
import Dashboard from "../Container/Dashboard";
import NotFoundPage from "../Page/NotFoundPage";
import AttendanceUnity from "../Container/AttendanceUnity/ListAttendanceUnity";
import CreateAttendanceUnity from "../Container/AttendanceUnity/CreateAttendanceUnity";
import EditAttendanceUnity from "../Container/AttendanceUnity/EditAttendanceUnity";
import RmaCras from "../Archives/RMA-CRAS";
import Report from "../Container/Report";
import Forwarding from "../Container/Forwarding/ListFamilyForwarding";
import FamilyForwarding from "../Container/Forwarding/FamilyForwarding";

const RoutesCras = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={Dashboard} />} path="/" exact />
                <Route element={<PrivateRoute Component={Users} />} path="/usuarios" />
                <Route element={<PrivateRoute Component={CreateUser} />} path="/criar/usuarios" />
                <Route element={<PrivateRoute Component={EditUser} />} path="/edit/usuarios/:id" />
                <Route element={<PrivateRoute Component={ListServices} />} path="/atendimento" />
                <Route element={<PrivateRoute Component={CreateServices} />} path="/criar/atendimento" />
                <Route element={<PrivateRoute Component={EditService} />} path="/edit/atendimento/:id" />
                <Route element={<PrivateRoute Component={ListFamilyRefered} />} path="/familia" />
                <Route element={<PrivateRoute Component={CreateFamilyRefered} />} path="/criar/familia" />
                <Route element={<PrivateRoute Component={EditFamilyRefered} />} path="/edit/familia/:id" />
                <Route element={<PrivateRoute Component={Technician} />} path="/tecnico" />
                <Route element={<PrivateRoute Component={CreateTechnician} />} path="/criar/tecnico" />
                <Route element={<PrivateRoute Component={EditTechnician} />} path="/edit/tecnico/:id" />
                <Route element={<PrivateRoute Component={TypeService} />} path="/servico" />
                <Route element={<PrivateRoute Component={CreateTypeService} />} path="/criar/servico" />
                <Route element={<PrivateRoute Component={EditTypeService} />} path="/edit/servico/:id" />
                <Route element={<PrivateRoute Component={Benefits} />} path="/beneficios" />
                <Route element={<PrivateRoute Component={CreateBenefits} />} path="/criar/beneficios" />
                <Route element={<PrivateRoute Component={EditBenefits} />} path="/edit/beneficios/:id" />
                <Route element={<PrivateRoute Component={Dashboard} />} path="/dashboard" />
                <Route element={<PrivateRoute Component={AttendanceUnity} />} path="/unidades" />
                <Route element={<PrivateRoute Component={CreateAttendanceUnity} />} path="/criar/unidades" />
                <Route element={<PrivateRoute Component={EditAttendanceUnity} />} path="/edit/unidades/:id" />
                <Route element={<PrivateRoute Component={Report} />} path="/relatorios" />
                <Route element={<PrivateRoute Component={Forwarding} />} path="/encaminhamento" />
                <Route element={<PrivateRoute Component={FamilyForwarding} />} path="/encaminhamento/familia/:id" />
                <Route element={<RmaCras />} path="/rma-cras" />
                <Route element={<Login />} path="/login" />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCras;