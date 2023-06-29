import React from "react";
import LogoutTopBar from "../../Components/LogoutTopBar";
import { Column, Padding, Row } from "../styles/styles";
import { Back, Container } from "./style";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const history = useNavigate()

    return (
        <Container>
                <Column style={{width: "auto"}} id="center">
                    <Back onClick={() => history(-1)}>
                        <i className="pi pi-angle-left" style={{ fontSize: '1.2rem' }}></i>
                        <Padding padding="2px" />
                        Voltar 
                    </Back>
                    </Column>
                <Column style={{width: "auto"}} id="center">
                    <LogoutTopBar />
                </Column>
        </Container>
    )
}

export default TopBar;