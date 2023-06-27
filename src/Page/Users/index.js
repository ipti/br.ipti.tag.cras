import React from "react";
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import { Container } from "./styles";
import CrasTable from "../../CrasUi/Table";
import { InputText } from "primereact/inputtext";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";

const UserPage = () => {

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const products = [
        { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
        { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
        { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
        { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
    ]

    const header = (
        <Row id="end">
            <Padding>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-search"></i>
                    </span>
                    <InputText placeholder="Username" />
                </div>
            </Padding>
        </Row>
    );
    return (
        <Container>
            <Column>
                <Padding padding="20px">
                    <h1>
                        Usuarios
                    </h1>
                    <Row>
                        <ButtonPrime label={"Adicionar"} />
                    </Row>
                    <Padding padding="20px 0">
                        <CrasTable columns={columns} products={products} header={header} />
                    </Padding>
                </Padding>
            </Column>
        </Container>
    )
}

export default UserPage