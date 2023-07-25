import React, { useContext } from "react";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import CrasInput from "../../../CrasUi/Input/Input";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasCalendar from "../../../CrasUi/Calendar";
import CrasDropdown from "../../../CrasUi/Dropdown";
import { CreateServicesContext } from "../../../context/CreateService/context";

const CreateServicesScreen = () => {

    const {initialValue, service, technician, isLoadingService, isLoadingtechnician} = useContext(CreateServicesContext)
    
    console.log(service)
    return (
        <Container>
            <Column>
                    <h1>
                        Novo Atendimentos
                    </h1>
                    <Row>
                        <div className="col">
                            <CrasCalendar showIcon />
                        </div>
                        <div className="col">
                        </div>
                    </Row>
                    <h3>Dados do atendimento</h3>
                    <Row>
                        <div className="col"><CrasDropdown optionLabel={"name"}  options={service} label="Serviço" /></div>
                        <div className="col"><CrasInput label="Solicitação" /></div>
                    </Row>
                    <Row>
                        <div className="col"><CrasInput label="Providências" /></div>
                        <div className="col"><CrasInput label="Resultado" /></div>
                    </Row>
                    <Row>
                        <div className="col"><CrasDropdown optionLabel={"name"} options={technician} label="Técnico Responsável" /></div>
                        <div className="col"><CrasDropdown label="Usuário ou Membro Familiar" /></div>
                    </Row>
                    <Padding padding="16px" /> 
                    <Row id="end">
                        <ButtonPrime label="Cadastrar" />
                    </Row>
            </Column>
        </Container>
    )
}

export default CreateServicesScreen;