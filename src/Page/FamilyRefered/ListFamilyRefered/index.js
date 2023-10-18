import React, { useContext } from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Table from "../../../Components/Table";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";

const ListFamilyReferedScreen = () => {

    const { userIdentify } = useContext(UserIdentifyContext)

    const columns = [
        { field: "id", header: "id" },
        { field: 'name', header: 'Nome' },
        { field: "birthday", header: "Data de Nascimento" },
        { field: "initial_date", header: "Data de Entrada" },
    ];


    function formatarData(dateUser) {
        const date = new Date(dateUser);
        const dia = String(date.getDate()).padStart(2, '0'); // Obtém o dia e adiciona um zero à esquerda, se necessário
        const mes = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembrando que os meses são indexados a partir de 0) e adiciona um zero à esquerda, se necessário
        const ano = date.getFullYear(); // Obtém o ano

        return `${dia}/${mes}/${ano}`;
    }

    const userIdentifyFilter = userIdentify ? userIdentify.map((data) => ({ ...data, birthday: formatarData(data.birthday), initial_date: formatarData(data.initial_date) })) : [];


    return (
        <Container>
            <Table columns={columns} list={userIdentifyFilter} path="/criar/familia" name="Família Referenciadas" pathEdit="/edit/familia/" />
        </Container>
    )
}

export default ListFamilyReferedScreen;