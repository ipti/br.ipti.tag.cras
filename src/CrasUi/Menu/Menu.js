import React, { useState } from "react";
import { Column, Padding, Row } from "../styles/styles";

import TagLogin from "../../assets/images/taglogin.svg";
import Item from "./Item";
import { Container, TopBar } from "./style";




const CrasMenu = ({viewdMenu}) => {

    const [active, setActive] = useState(1)

    return (
        <Container active={viewdMenu}>
            <Row>
                <TopBar style={{ backgroundColor: "#667DF4" }} />
                <TopBar style={{ backgroundColor: "#F45A5A" }} />
                <TopBar style={{ backgroundColor: "#66D654" }} />
                <TopBar style={{ backgroundColor: "#EADA48" }} />
            </Row>
            <Padding padding="16px">
                <Row id="center">
                    <img src={TagLogin} alt=""></img>
                    <Column id="center">
                        <h1>Cras</h1>
                    </Column>
                </Row>
            </Padding>
            <Padding padding="8px">
                <Item text={"Atendimentos"} funcActiv={() => setActive(1)} active={active === 1 ? true : false} path={"/Atendimento"} icon={"pi pi-list"} />
                <Padding />
                <Item text={"Serviço"} funcActiv={() => setActive(2)} active={active === 2 ? true : false} path={"/servico"} icon={"pi pi-th-large"} />
                <Padding />
                <Item text={"Tecnico"} funcActiv={() => setActive(3)} active={active === 3 ? true : false} path={"/tecnico"} icon={"pi pi-wrench"} />
                <Padding />
                <Item text={"Familias"} funcActiv={() => setActive(4)} active={active === 4 ? true : false} path={"/familia"} icon={"pi pi-users"} />
                <Padding />
                <Item text={"Usuários"} funcActiv={() => setActive(5)} active={active === 5 ? true : false} path="/usuarios" icon={"pi pi-user"} />
            </Padding>
        </Container>
    )
}

export default CrasMenu;