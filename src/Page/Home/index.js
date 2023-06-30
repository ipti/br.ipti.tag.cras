import React from "react";
import Table from "../../Components/Table";
import { Container } from "../../CrasUi/styles/styles";

const HomePage = () => {
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
    ];


    return (
        <Container>
            <Table columns={columns} list={products} />
        </Container>
    )
}

export default HomePage;


