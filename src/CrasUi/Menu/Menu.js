import React, { useContext, useState } from "react";
import { Column, Padding, Row } from "../styles/styles";

import TagLogin from "../../assets/images/taglogin.svg";
import Item from "./Item";
import { Container, TopBar } from "./style";
import { getMenuItem, menuItem } from "../../services/localstorage";
import { AplicationContext } from "../../context/Aplication/context";




const CrasMenu = ({ viewdMenu }) => {
    const { user } = useContext(AplicationContext)

    const [active, setActive] = useState(parseInt(getMenuItem()))

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
            {user ? <Padding padding="8px">
                <Item text={"Dashboard"} funcActiv={() => { setActive(1); menuItem(1) }} active={active === 1 ? true : false} path={"/dashboard"} icon={"pi pi-chart-bar"} />
                <Padding />
                <Item text={"Atendimentos"} funcActiv={() => { setActive(2); menuItem(2) }} active={active === 2 ? true : false} path={"/atendimento"} icon={"pi pi-list"} />
                <Padding />
                {user.role === "SECRETARY" ? <><Item text={"Serviço"} funcActiv={() => { setActive(3); menuItem(3) }} active={active === 3 ? true : false} path={"/servico"} icon={"pi pi-th-large"} />
                    <Padding />
                </> : null}
                {user.role === "SECRETARY" ? <> <Item text={"Tecnico"} funcActiv={() => { setActive(4); menuItem(4) }} active={active === 4 ? true : false} path={"/tecnico"} icon={"pi pi-wrench"} />
                    <Padding />
                </> : null}
                <Item text={"Familias"} funcActiv={() => { setActive(5); menuItem(5) }} active={active === 5 ? true : false} path={"/familia"} icon={"pi pi-users"} />
                <Padding />
                {user.role === "SECRETARY" ? <>
                    <Item text={"Beneficios"} funcActiv={() => { setActive(6); menuItem(6) }} active={active === 6 ? true : false} path={"/beneficios"} icon={"pi pi-money-bill"} />
                    <Padding />
                </> : null}
                {user.role === "SECRETARY" ? <>
                    <Item text={"Unidades"} funcActiv={() => { setActive(8); menuItem(8) }} active={active === 8 ? true : false} path={"/unidades"} icon={"pi pi-building"} />
                    <Padding />
                </> : null}
                {user.role === "SECRETARY" ? <> <Item text={"Usuários"} funcActiv={() => { setActive(7); menuItem(7) }} active={active === 7 ? true : false} path="/usuarios" icon={"pi pi-user"} />
                </> : null}            </Padding> : null}

        </Container>
    )
}

export default CrasMenu;