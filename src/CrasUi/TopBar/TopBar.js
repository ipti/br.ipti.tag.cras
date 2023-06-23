import React from "react";
import LogoutTopBar from "../../Components/LogoutTopBar";
import { Column } from "../styles/styles";
import { Container } from "./style";

const TopBar = () => {
    return (
        <Container>
                <Column style={{width: "auto"}} id="center"><h1>menu</h1></Column>
                <Column style={{width: "auto"}} id="center">
                    <LogoutTopBar />
                </Column>
        </Container>
    )
}

export default TopBar;