import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container, Padding } from "../../../CrasUi/styles/styles";
import { ServiceContext } from "../../../context/Service/Service/context";

const ListServicesScreen = () => {

    const { isLoading, service, deleteService, typeService, technician } = useContext(ServiceContext)


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'servico', header: 'Servico' },
        { field: 'result', header: 'Resultado' },
        { field: 'tecnico', header: 'Tecnico responsavel' }
    ];

    if(!technician && !typeService) return null


    const ServiceConvert = service ? service.map((data) => ({ ...data, servico: typeService.find(fil => fil.id === data.servico)?.nome, tecnico: technician.find(fil => fil.id === data.tecnico)?.nome })) : [];

    return (
        <Container>
            {
                isLoading ? <div>carregando...</div> : <Table columns={columns} list={ServiceConvert} path="/criar/atendimento" name="Atendimentos" delet={deleteService} pathEdit={"/edit/atendimento/"} />
            }
            <Padding padding="16px" />
        </Container>
    )
}

export default ListServicesScreen;