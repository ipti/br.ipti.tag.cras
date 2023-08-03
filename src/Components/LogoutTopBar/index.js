import React from "react";
import { Container } from "./style";
import { Padding, Row } from "../../CrasUi/styles/styles";
import { logout } from "../../services/localstorage";


const LogoutTopBar = () => {
    return (
        <Container onClick={() => {logout(); window.location.reload()}}>
            <Row>
            <i className="pi pi-sign-out"></i>
            <Padding />
                <div>Sair</div>
            </Row>
        </Container>

    )
}

export default LogoutTopBar;