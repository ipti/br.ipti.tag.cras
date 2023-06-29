import React from "react";
import { Padding } from "../styles/styles";

import Collapse from "@kiwicom/orbit-components/lib/Collapse";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import { Link } from "react-router-dom";
import { Container } from "./style";



const CrasMenu = () => {


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
                <h1>Cras</h1>
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
                                                <Link to={insider.path}>
                                                    <TextLink key={key} type="secondary">  {insider.label}</TextLink>
                                                </Link>
                                            )
                                        })}
                                    </LinkList>
                                </Padding>
                            </Collapse>
                        </Padding> :
                            <Padding padding="10px 20px">
                                <LinkList>
                                    <Link to={item.path}>
                                        <TextLink type="secondary">
                                            {item.label}
                                        </TextLink>
                                    </Link>
                                </LinkList>
                            </Padding>}
                    </>
                )
            })}
        </Container>
    )
}

export default CrasMenu;