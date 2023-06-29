import React from "react";
import Table from "../../../Components/Table";
import { Container } from "./styles";

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
    ];

   return(
        <Container>
            <Table columns={columns} list={products} path="/criar/usuarios" name="Usuários" />
        </Container>
    )
}

export default UserPage