import React from "react";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import CrasInput from "../../../CrasUi/Input/Input";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasCalendar from "../../../CrasUi/Calendar";
import CrasDropdown from "../../../CrasUi/Dropdown";

const CreateServicesScreen = () => {
    return (
        <Container>
            <Column>
                    <h1>
                        Novo Atendimentos
                    </h1>
                    <Row>
                        <div class="col">
                            <CrasCalendar showIcon />
                        </div>
                        <div class="col">
                        </div>
                    </Row>
                    <h3>Dados do atendimento</h3>
                    <Row>
                        <div class="col"><CrasDropdown label="Serviço" /></div>
                        <div class="col"><CrasInput label="Solicitação" /></div>
                    </Row>
                    <Row>
                        <div class="col"><CrasInput label="Providências" /></div>
                        <div class="col"><CrasInput label="Resultado" /></div>
                    </Row>
                    <Row>
                        <div class="col"><CrasDropdown label="Técnico Responsável" /></div>
                        <div class="col"><CrasDropdown label="Usuário ou Membro Familiar" /></div>
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