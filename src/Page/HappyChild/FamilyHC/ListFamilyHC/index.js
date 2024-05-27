import React, { useContext } from "react";
import { Container } from "../../../../CrasUi/styles/styles";
import Table from "../../../../Components/Table";
import { FamilyHCContext } from "../../../../context/HappyChild/FamilyHC/context";
//import { formatarData } from "../../../services/functions";

const ListFamilyHCScreen = () => {
    //todo: listar por unidade de atendimento
    //todo: fazer filtro das familias
    const { familyHCFilter } = useContext(FamilyHCContext);
    const filter = (value) => {
        const filter = familyHCFilter.filter(family => {
            return family.nis_number.includes(value) || family.id.toString().includes(value)
        });
        return filter;
    }

    const columns = [
        { field: "id", header: "Código" },
        { field: 'nis_number', header: 'Número de Identificação Social' },
    ];

    return (
        <Container>
            <Table columns={columns} list={familyHCFilter} path="/criar/familia" name="Famílias Criança Feliz" linkView="/familiaPCF/" filter={filter} />
        </Container>
    )
}

export default ListFamilyHCScreen;