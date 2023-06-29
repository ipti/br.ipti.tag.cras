import React from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Table from "../../../Components/Table";

const ListFamilyReferedScreen = () => {

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


    return(
        <Container>
            <Table columns={columns} list={products} path="/criar/familia" name="Família Referenciadas" />
        </Container>
    )
}

export default ListFamilyReferedScreen;