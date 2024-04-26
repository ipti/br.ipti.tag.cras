import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { BenefitsContext } from "../../../context/Benefits/ListBenefits/context";

const ListBenefitsScreen = () => {

    const { benefits, deleteBenefits } = useContext(BenefitsContext)

    const columns = [
        { field: "id", header: "Identificação" },
        { field: "description", header: "Nome" },
        { field: "type", header: "Tipo" },
    ];

    const filter = (filt, namefilter) => {
        return filt?.description?.toLowerCase()?.includes(namefilter)
    }

    return (
        <Container>
            <Table columns={columns} delet={deleteBenefits} filter={filter} list={benefits} path="/criar/beneficios" name="Beneficios" pathEdit="/edit/beneficios/" />
        </Container>
    )
}

export default ListBenefitsScreen;