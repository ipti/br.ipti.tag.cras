import React from "react";
import { Padding, Row } from "../../CrasUi/styles/styles";
import { logout } from "../../services/localstorage";
import { Container } from "./style";


const LogoutTopBar = () => {
    return (
        <Container onClick={() => {logout();  window.location.reload()}}>
            <Row>
            <i className="pi pi-sign-out"></i>
            <Padding />
                <div>Sair</div>
            </Row>
        </Container>

    )
}

export default LogoutTopBar;