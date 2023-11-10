import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutTopBar from "../../Components/LogoutTopBar";
import { AplicationContext } from "../../context/Aplication/context";
import { GetIdAttendance, idAttendance } from "../../services/localstorage";
import CrasDropdown from "../Dropdown";
import { Column, Padding, Row } from "../styles/styles";
import { Back, Container } from "./style";

const TopBar = ({ setViewd, viewdMenu }) => {
    const history = useNavigate()

    const larguraTela = window.innerWidth;

    const { attendance, user } = useContext(AplicationContext)

    const valueAttendance = attendance ? attendance?.find(props => props.id === parseInt(GetIdAttendance())) : {}


    

    return (
        <Container>
            <Column style={{ width: "auto" }} id="center">
                <Row>
                    {larguraTela < 700 ?
                        <Column id="center">
                            <i className="pi pi-bars" style={{ fontSize: '1.5rem' }} onClick={() => setViewd(!viewdMenu)} />
                        </Column>
                        : null}
                    <Back onClick={() => history(-1)}>
                        <i className="pi pi-angle-left" style={{ fontSize: '1.2rem' }}></i>
                        <Padding padding="2px" />
                        Voltar
                    </Back>
                    <Padding />
                    {user?.role === "SECRETARY" ? <Column>
                        <CrasDropdown placeholder={"Unidades"} options={attendance} value={valueAttendance} optionLabel={"name"} onChange={(e) => { idAttendance(e.target.value.id); window.location.reload() }} />
                    </Column> : null}
                </Row>
            </Column>
            <Column style={{ width: "auto" }} id="center">
                <LogoutTopBar />
            </Column>
        </Container>
    )
}

export default TopBar;