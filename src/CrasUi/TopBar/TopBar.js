import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutTopBar from "../../Components/LogoutTopBar";
import { AplicationContext } from "../../context/Aplication/context";
import { GetIdAttendance, idAttendance, menuItem } from "../../services/localstorage";
import CrasDropdown from "../Dropdown";
import { Column, Padding, Row } from "../styles/styles";
import { Back, Container } from "./style";

const TopBar = ({ setViewd, viewdMenu }) => {
    const history = useNavigate()

    const larguraTela = window.innerWidth;

    const { attendance, user, noUnities } = useContext(AplicationContext)

    const availableUnities = user?.role === "TECHNICIAN"
        ? attendance.filter(a => (user?.attendance_unity_ids ?? []).includes(a.id))
        : attendance;

    const valueAttendance = availableUnities.find(props => props.id === parseInt(GetIdAttendance())) ?? null;

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
                    {noUnities ? (
                        <Column id="center">
                            <span
                                style={{ color: '#e17055', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 500 }}
                                onClick={() => history("/criar/unidades")}
                            >
                                ⚠ Nenhuma unidade cadastrada — clique para criar
                            </span>
                        </Column>
                    ) : availableUnities.length > 0 ? (
                        <Column>
                            <CrasDropdown
                                placeholder={"Unidades"}
                                options={availableUnities}
                                value={valueAttendance}
                                optionLabel={"name"}
                                onChange={(e) => {
                                    idAttendance(e.target.value.id);
                                    history("/");
                                    menuItem(1);
                                    window.location.reload();
                                }}
                            />
                        </Column>
                    ) : null}
                </Row>
            </Column>
            <Column style={{ width: "auto" }} id="center">
                <LogoutTopBar />
            </Column>
        </Container>
    )
}

export default TopBar;
