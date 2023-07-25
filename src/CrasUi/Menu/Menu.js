import React from "react";
import { Column, Padding, Row } from "../styles/styles";

import Collapse from "@kiwicom/orbit-components/lib/Collapse";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";



const CrasMenu = () => {

    const history = useNavigate()


    const items = [
        {
            label: "Atendimentos",
            icon: "pi pi-calendar-plus",
            items: [
                {
                    label: "Lista de atendimentos",
                    icon: "",
                    path: "/atentimento"
                },
                {
                    label: "Tecnico",
                    icon: "",
                    path: "/tecnico"
                },
                {
                    label: "Serviço",
                    icon: "",
                    path: "/servico"
                },
                {
                    label: "Relatorio",
                    icon: ""
                }
            ]
        },
        {
            label: "Famílias Referenciadas",
            path: "/familia"
        },
        {
            label: "Usúarios",
            path: "/usuarios"
        }
    ]


    return (
        <Container>
            <Padding>
                <Column style={{cursor:"pointer"}} onClick={() => history("/")}>
                    <Row id="center">
                        <h1>Cras</h1>
                    </Row>
                </Column>
            </Padding>
            {items.map((item, index) => {
                return (
                    <>
                        {item.items ? <Padding key={index} padding="0 20px">
                            <Collapse label={item.label}>
                                <Padding padding="0 5px">
                                    <LinkList>
                                        {item.items.map((insider, key) => {
                                            return (
                                                <TextLink key={key} onClick={() => history(insider.path)} type="secondary">  {insider.label}</TextLink>
                                            )
                                        })}
                                    </LinkList>
                                </Padding>
                            </Collapse>
                        </Padding> :
                            <Padding padding="10px 20px">
                                <LinkList>
                                    <TextLink onClick={() => history(item.path)} type="secondary">
                                        {item.label}
                                    </TextLink>
                                </LinkList>
                            </Padding>}
                    </>
                )
            })}
        </Container>
    )
}

export default CrasMenu;