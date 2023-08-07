import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { ServiceContext } from "../../../context/Service/Service/context";

const ListServicesScreen = () => {

    const { isLoading, service, deleteService } = useContext(ServiceContext)


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'servico', header: 'Servico' },
        { field: 'resultado', header: 'Resultado' },
        { field: 'tecnico', header: 'Tecnico responsavel' }
    ];

    // const products = [
    //     { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
    //     { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
    //     { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
    //     { code: 'code', name: 'Code', category: 'category', quantity: "quantity" },
    // ]



    return (
        <Container>
            {
                isLoading ? <div>carregando...</div> : <Table columns={columns} list={service} path="/criar/atendimento" name="Atendimentos" delet={deleteService} pathEdit={"/edit/atendimento/"} />
            }
        </Container>
    )
}

export default ListServicesScreen;