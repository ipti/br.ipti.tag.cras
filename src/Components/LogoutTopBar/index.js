import React from "react";
import { Container } from "./style";
import { Padding, Row } from "../../CrasUi/styles/styles";
import { logout } from "../../services/localstorage";
import { useNavigate } from "react-router";


const LogoutTopBar = () => {

    const history = useNavigate()
    return (
        <Container onClick={() => {logout(); history("/login"); window.location.reload()}}>
            <Row>
            <i className="pi pi-sign-out"></i>
            <Padding />
                <div>Sair</div>
            </Row>
        </Container>

    )
}

export default LogoutTopBar;