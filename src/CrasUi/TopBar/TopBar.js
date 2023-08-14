import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutTopBar from "../../Components/LogoutTopBar";
import { Column, Padding, Row } from "../styles/styles";
import { Back, Container } from "./style";

const TopBar = ({setViewd, viewdMenu}) => {
    const history = useNavigate()

    const larguraTela = window.innerWidth;


    return (
        <Container>
            <Column style={{ width: "auto" }} id="center">
                <Row>
                    {larguraTela < 700 ?
                        <>
                            <i className="pi pi-bars" style={{ fontSize: '1.5rem' }} onClick={() => setViewd(!viewdMenu)} />
                            <Padding />
                        </>
                        : null}
                    <Back onClick={() => history(-1)}>
                        <i className="pi pi-angle-left" style={{ fontSize: '1.2rem' }}></i>
                        <Padding padding="2px" />
                        Voltar
                    </Back>
                </Row>
            </Column>
            <Column style={{ width: "auto" }} id="center">
                <LogoutTopBar />
            </Column>
        </Container>
    )
}

export default TopBar;