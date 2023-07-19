import React from "react";
import { Container } from "./style";
import { Padding, Row } from "../../CrasUi/styles/styles";


const LogoutTopBar = () => {
    return (
        <Container>
            <Row>
            <i className="pi pi-sign-out"></i>
            <Padding />
                <div>Sair</div>
            </Row>
        </Container>

    )
}

export default LogoutTopBar;