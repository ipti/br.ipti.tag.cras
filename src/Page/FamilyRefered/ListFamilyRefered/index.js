import React, { useContext } from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Table from "../../../Components/Table";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";
import { formatarData } from "../../../services/functions";

const ListFamilyReferedScreen = () => {

    const { userIdentifyFamily } = useContext(UserIdentifyContext)

    const columns = [
        { field: "family_representative_fk", header: "Identificação" },
        { field: 'representative.name', header: 'Nome' },
        { field: "birthday", header: "Data de Nascimento" },
        { field: "initial_date", header: "Data de Entrada" },
        { field: "members_quantity", header: "Quant. Membros" },
    ];

    const userIdentifyFilter = userIdentifyFamily ? userIdentifyFamily.map((data) => ({ ...data, birthday: formatarData(data.representative.birthday), initial_date: formatarData(data.representative.initial_date) })) : [];

    const filter = (filt, namefilter) => {
        return filt?.representative?.name?.toLowerCase()?.includes(namefilter) || filt?.representative?.birthday?.toLowerCase()?.includes(namefilter)
    }

    return (
        <Container>
            <Table columns={columns} list={userIdentifyFilter} path="/criar/familia" name="Famílias Referenciadas" linkView="/familia/" filter={filter} />
        </Container>
    )
}

export default ListFamilyReferedScreen;