import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { ServiceContext } from "../../../context/Service/Service/context";
import { TabPanel, TabView } from "primereact/tabview";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import { useNavigate } from "react-router-dom";


const ListServicesScreen = () => {

    const { isLoading, service, deleteService, typeService, technician, serviceGroup } = useContext(ServiceContext)


    const filter = (filt, namefilter) => {
        return filt?.task?.name?.toLowerCase()?.includes(namefilter) || filt?.technician.name?.toLowerCase()?.includes(namefilter)
    }
    const history = useNavigate()

    const columns = [
        { field: 'id', header: 'id' },
        { field: 'task.name', header: 'Servico' },
        { field: 'result', header: 'Resultado' },
        { field: 'technician.name', header: 'Tecnico responsavel' }
    ];

    const columnsGroup = [
        { field: 'id', header: 'id' },
        { field: 'servico', header: 'Servico' },
        { field: 'result', header: 'Resultado' },
        { field: 'tecnico', header: 'Tecnico responsavel' }
    ];

    if (!technician && !typeService && !serviceGroup) return null


    const ServiceConvert = service ? service.map((data) => ({ ...data, servico: typeService.find(fil => fil.id === data.servico)?.nome, tecnico: technician.find(fil => fil.id === data.tecnico)?.nome })).filter(props => props.user_identify_fk) : [];

    const ServiceGroupConvert = service ? serviceGroup.map((data) => ({ ...data, servico: typeService.find(fil => fil.id === data.task_fk)?.name, tecnico: technician.find(fil => fil.id === data.technician_fk)?.name })) : [];
    return (
        <Container>

            <Padding padding="16px" />
            <h1>Atendimentos</h1>
            <Row>
                <ButtonPrime label={"Criar atendimentos"} onClick={() => history("/criar/atendimento")} />
            </Row>
            <Padding padding="16px" />            {
                isLoading ? <div>carregando...</div> :
                    <div className="card">
                        <TabView>
                            <TabPanel header="Atendimentos">
                                <Table columns={columns} list={ServiceConvert} name="Atendimentos" pathEdit={"/edit/atendimento/"} delet={deleteService} filter={filter} />
                            </TabPanel>
                            <TabPanel header="Atendimentos em grupo">
                                <Table columns={columnsGroup} list={ServiceGroupConvert} filter={filter} name="Atendimentos" delet={deleteService} pathEdit={"/edit/atendimento/"} />
                            </TabPanel>
                        </TabView>
                    </div>
            }
            <Padding padding="16px" />
        </Container>
    )
}

export default ListServicesScreen;