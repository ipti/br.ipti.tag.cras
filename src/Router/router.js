import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RmaCras from "../Archives/RMA-CRAS";
import CreateAttendanceUnity from "../Container/AttendanceUnity/CreateAttendanceUnity";
import EditAttendanceUnity from "../Container/AttendanceUnity/EditAttendanceUnity";
import AttendanceUnity from "../Container/AttendanceUnity/ListAttendanceUnity";
import CreateBenefits from "../Container/Benefits/CreateBenefits";
import EditBenefits from "../Container/Benefits/EditBenefits";
import Benefits from "../Container/Benefits/ListBenefits";
import Dashboard from "../Container/Dashboard";
import FamilyForwarding from "../Container/FamilyForwarding/FamilyForwarding";
import CreateFamilyRefered from "../Container/FamilyRefered/CreateFamilyRefered";
import EditFamilyRefered from "../Container/FamilyRefered/EditFamilyRefered";
import ListFamilyRefered from "../Container/FamilyRefered/ListFamilyRefered";
import Login from "../Container/Login";
import Report from "../Container/Report";
import CreateServices from "../Container/Services/CreateServices";
import EditService from "../Container/Services/EditService";
import ListServices from "../Container/Services/ListServices";
import CreateTechnician from "../Container/Technician/CreateTechnician";
import EditTechnician from "../Container/Technician/EditTechnician";
import Technician from "../Container/Technician/Technician";
import CreateTypeService from "../Container/TypeService/CreateTypeService";
import EditTypeService from "../Container/TypeService/EditTypeService";
import TypeService from "../Container/TypeService/TypeService";
import CreateUser from "../Container/Users/Create";
import EditUser from "../Container/Users/Edit";
import Users from "../Container/Users/Users";
import FamilyOnePage from "../Page/FamilyRefered/FamilyOne";
import NotFoundPage from "../Page/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import CompositionFamily from "../Container/FamilyRefered/CompositionFamily";
import TechnicianVisits from "../Container/FamilyRefered/TechnicianVistis";
import Forwarding from "../Archives/Forwarding/forwarding";
import BankForwarding from "../Archives/BankForwarding/bankFowarding";
import SecondCopyForwarding from "../Archives/SecondCopyForwarding/secondCopyForwarding";

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
                <Route element={<PrivateRoute Component={FamilyOnePage} />} path="/familia/:id" />
                <Route element={<PrivateRoute Component={CompositionFamily} />} path="/familia/composicao/:id" />
                <Route element={<PrivateRoute Component={TechnicianVisits} />} path="/familia/visitas/:id" />


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
                <Route element={<PrivateRoute Component={FamilyForwarding} />} path="/encaminhamento/familia/:id" />

                <Route element={<Forwarding />} path="/encaminhamento/familia/:id/forward/:idUser/:idForward/:idassis/:idpsico" />
                <Route element={<BankForwarding />} path="/encaminhamento/familia/:id/bankforward/:idUser/:idForward/:idassis/:agency" />
                <Route element={<SecondCopyForwarding />} path="/encaminhamento/familia/:id/secondCopyForwarding/:idUser/:idForward/:registry/:dateFirstCopy/:book/:sheet/:numTermo" />
                <Route element={<RmaCras />} path="/rma-cras/:month/:year" />

                <Route element={<Login />} path="/login" />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    ) 
}

export default RoutesCras;