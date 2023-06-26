import React from "react";
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import { Container } from "./styles";
import CrasTable from "../../CrasUi/Table";
import { Link } from "react-router-dom";

const UserPage = () => {

    const items = [{
        name: "name",
        items: [
            {
                text: <Link to={"/"}> asmklmamakl </Link>
            },
            {
                text: "João Gomes"
            },


        ],
    },
    {
        name: "Email",
        items: [
            {
                text: "jonny@Menezes"
            },
            {
                text: "João@Gomes"
            },
        ]
    },
    {
        name: "Tipo de usuario",
        items: [
            {
                text: "Administrador"
            },
            {
                text: "Auxiliar administrativo"
            },
        ]
    },
    {
        name: "Data de Cadastro",
        items: [
            {
                text: "10/05/2023"
            },
            {
                text: "10/06/2023"
            },
        ]
    }
    ];


    return (
        <Container>
            <Column>
                <Padding>
                    <h1>
                        Usuarios
                    </h1>
                    <Row>
                        <button className="t-button-primary">
                            Adicionar
                        </button>
                        <Padding />
                        <button className="t-button-primary">
                            Adicionar
                        </button>
                    </Row>
                    <CrasTable items={items} />
                </Padding>
            </Column>
        </Container>
    )
}

export default UserPage