import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { BenefitsContext } from "../../../context/Benefits/ListBenefits/context";

const ListBenefitsScreen = () => {

    const { benefits } = useContext(BenefitsContext)

    const columns = [
        { field: "id", header: "id" },
        { field: "description", header: "nome" },
        { field: "type", header: "Tipo" },
    ];


    return (
        <Container>
            <Table columns={columns} list={benefits} path="/criar/beneficios" name="Beneficios" pathEdit="/edit/familia/" />
        </Container>
    )
}

export default ListBenefitsScreen;