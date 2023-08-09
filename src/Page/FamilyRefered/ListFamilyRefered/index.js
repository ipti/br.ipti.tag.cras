import React, { useContext } from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Table from "../../../Components/Table";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";

const ListFamilyReferedScreen = () => {
   
    const {userIdentify } = useContext(UserIdentifyContext)

    const columns = [
        {field: "id", header: "id"},
        { field: 'nome', header: 'Nome' },
        {field: "data_nascimento", header: "Data de Nascimento"},
        {field: "data_inicial", header: "Data de Entrada"},

    ];


    return(
        <Container>
            <Table columns={columns} list={userIdentify} path="/criar/familia" name="Família Referenciadas" pathEdit="/edit/familia/"/>
        </Container>
    )
}

export default ListFamilyReferedScreen;