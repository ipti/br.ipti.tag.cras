import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RmaCras from "../Archives/RMA-CRAS";
import AttendanceUnityForm from "../Container/AttendanceUnity/AttendanceUnityForm";
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
import UserForm from "../Container/Users/UserForm";
import Users from "../Container/Users/Users";
import FamilyOnePage from "../Page/FamilyRefered/FamilyOne";
import NotFoundPage from "../Page/NotFoundPage";
import PrivateRoute, { SecretaryRoute } from "./PrivateRoute";
import CompositionFamily from "../Container/FamilyRefered/CompositionFamily";
import TechnicianVisits from "../Container/FamilyRefered/TechnicianVistis";
import Forwarding from "../Archives/Forwarding/forwarding";
import BankForwarding from "../Archives/BankForwarding/bankFowarding";
import SecondCopyForwarding from "../Archives/SecondCopyForwarding/secondCopyForwarding";
import { Permission } from "../permissions";

const RoutesCras = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute Component={Dashboard} />} path="/" exact />

                <Route element={<SecretaryRoute Component={Users} permission={Permission.USER_VIEW} />} path="/usuarios" />
                <Route element={<SecretaryRoute Component={UserForm} permission={Permission.USER_CREATE} />} path="/criar/usuarios" />
                <Route element={<SecretaryRoute Component={UserForm} permission={Permission.USER_EDIT} />} path="/edit/usuarios/:id" />

                <Route element={<PrivateRoute Component={ListServices} />} path="/atendimento" />
                <Route element={<PrivateRoute Component={CreateServices} />} path="/criar/atendimento" />
                <Route element={<PrivateRoute Component={EditService} />} path="/edit/atendimento/:id" />

                <Route element={<PrivateRoute Component={ListFamilyRefered} />} path="/familia" />
                <Route element={<PrivateRoute Component={CreateFamilyRefered} />} path="/criar/familia" />
                <Route element={<PrivateRoute Component={EditFamilyRefered} />} path="/edit/familia/:id" />
                <Route element={<PrivateRoute Component={FamilyOnePage} />} path="/familia/:id" />
                <Route element={<PrivateRoute Component={CompositionFamily} />} path="/familia/composicao/:id" />
                <Route element={<PrivateRoute Component={TechnicianVisits} />} path="/familia/visitas/:id" />

                <Route element={<SecretaryRoute Component={Technician} permission={Permission.TECHNICIAN_VIEW} />} path="/tecnico" />
                <Route element={<SecretaryRoute Component={CreateTechnician} permission={Permission.TECHNICIAN_CREATE} />} path="/criar/tecnico" />
                <Route element={<SecretaryRoute Component={EditTechnician} permission={Permission.TECHNICIAN_EDIT} />} path="/edit/tecnico/:id" />

                <Route element={<SecretaryRoute Component={TypeService} permission={Permission.SERVICE_VIEW} />} path="/servico" />
                <Route element={<SecretaryRoute Component={CreateTypeService} permission={Permission.SERVICE_CREATE} />} path="/criar/servico" />
                <Route element={<SecretaryRoute Component={EditTypeService} permission={Permission.SERVICE_EDIT} />} path="/edit/servico/:id" />

                <Route element={<SecretaryRoute Component={Benefits} permission={Permission.BENEFIT_VIEW} />} path="/beneficios" />
                <Route element={<SecretaryRoute Component={CreateBenefits} permission={Permission.BENEFIT_CREATE} />} path="/criar/beneficios" />
                <Route element={<SecretaryRoute Component={EditBenefits} permission={Permission.BENEFIT_EDIT} />} path="/edit/beneficios/:id" />

                <Route element={<PrivateRoute Component={Dashboard} />} path="/dashboard" />

                <Route element={<SecretaryRoute Component={AttendanceUnity} permission={Permission.UNIT_VIEW} />} path="/unidades" />
                <Route element={<SecretaryRoute Component={AttendanceUnityForm} permission={Permission.UNIT_CREATE} />} path="/criar/unidades" />
                <Route element={<SecretaryRoute Component={AttendanceUnityForm} permission={Permission.UNIT_EDIT} />} path="/edit/unidades/:id" />

                <Route element={<SecretaryRoute Component={Report} permission={Permission.REPORT_VIEW} />} path="/relatorios" />

                <Route element={<PrivateRoute Component={FamilyForwarding} />} path="/encaminhamento/familia/:id" />

                <Route element={<Forwarding />} path="/encaminhamento/familia/:id/forward/:idUser/:idForward/:idassis/:idpsico" />
                <Route element={<BankForwarding />} path="/encaminhamento/familia/:id/bankforward/:idUser/:idForward/:idassis/:agency" />
                <Route element={<SecondCopyForwarding />} path="/encaminhamento/familia/:id/secondCopyForwarding" />
                <Route element={<RmaCras />} path="/rma-cras/:month/:year" />

                <Route element={<Login />} path="/login" />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCras;
