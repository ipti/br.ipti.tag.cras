import React, { useContext } from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Table from "../../../Components/Table";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";

const ListFamilyReferedScreen = () => {
   
    const {userIdentify } = useContext(UserIdentifyContext)

    const columns = [
        {field: "id", header: "id"},
        { field: 'nome', header: 'Nome' },
    ];


    return(
        <Container>
            <Table columns={columns} list={userIdentify} path="/criar/familia" name="Família Referenciadas" />
        </Container>
    )
}

export default ListFamilyReferedScreen;