import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container, Padding } from "../../../CrasUi/styles/styles";
import { ServiceContext } from "../../../context/Service/Service/context";

const ListServicesScreen = () => {

    const { isLoading, service, deleteService, typeService, technician } = useContext(ServiceContext)

    
    const filter = (filt, namefilter) => {
        return filt?.task?.name?.toLowerCase()?.includes(namefilter) || filt?.technician.name?.toLowerCase()?.includes(namefilter)
    }

    const columns = [
        { field: 'id', header: 'id' },
        { field: 'task.name', header: 'Servico' },
        { field: 'result', header: 'Resultado' },
        { field: 'technician.name', header: 'Tecnico responsavel' }
    ];

    if(!technician && !typeService) return null


    const ServiceConvert = service ? service.map((data) => ({ ...data, servico: typeService.find(fil => fil.id === data.servico)?.nome, tecnico: technician.find(fil => fil.id === data.tecnico)?.nome })) : [];

    return (
        <Container>
            {
                isLoading ? <div>carregando...</div> : <Table columns={columns} list={ServiceConvert} filter={filter} path="/criar/atendimento" name="Atendimentos" delet={deleteService} pathEdit={"/edit/atendimento/"} />
            }
            <Padding padding="16px" />
        </Container>
    )
}

export default ListServicesScreen;