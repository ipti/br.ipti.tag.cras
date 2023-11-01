import React, { useContext } from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Table from "../../../Components/Table";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";
import { formatarData } from "../../../services/functions";

const ListFamilyReferedScreen = () => {

    const { userIdentify } = useContext(UserIdentifyContext)

    const columns = [
        { field: "family_representative_fk", header: "id" },
        { field: 'representative.name', header: 'Nome' },
        { field: "birthday", header: "Data de Nascimento" },
        { field: "initial_date", header: "Data de Entrada" },
    ];

    const userIdentifyFilter = userIdentify ? userIdentify.map((data) => ({ ...data, birthday: formatarData(data.representative.birthday), initial_date: formatarData(data.representative.initial_date) })) : [];

    return (
        <Container>
            <Table columns={columns} list={userIdentifyFilter} path="/criar/familia" name="Família Referenciadas" pathEdit="/edit/familia/" />
        </Container>
    )
}

export default ListFamilyReferedScreen;