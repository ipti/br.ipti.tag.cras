import React, { useContext } from "react";
import { Container } from "../../../CrasUi/styles/styles";

const ListFamilyHCScreen = () => {
    //todo: listar por unidade de atendimento
    //todo: fazer filtro das familias
    //const { userIdentifyFamily } = useContext(UserIdentifyContext)

    const columns = [
        { field: "id", header: "Código" },
        { field: 'nis_number', header: 'Número de Identificação Social' },
    ];

    return (
        <Container>
            <Table columns={columns} list={userIdentifyFilter} path="/criar/familia" name="Famílias Criança Feliz" linkView="/familiaPCF/" filter={filter} />
        </Container>
    )
}

export default ListFamilyHCScreen;