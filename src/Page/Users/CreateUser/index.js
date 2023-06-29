import React from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";

const CreateUserScreen = () => {

    return (
        <Container>
            <Column>
                    <h1>
                        Novo usuário
                    </h1>
                    <Row>
                        <div class="col"><CrasInput label="Nome" /></div>
                        <div class="col"><CrasInput label="Email" /></div>
                    </Row>
                    <Row>
                        <div class="col"><CrasInput label="Tipo de usuário" /></div>
                        <div class="col"><CrasInput label="Senha" /></div>
                        <div class="col"><CrasInput label="Confirmar Senha" /></div>
                    </Row>
                    <Padding padding="16px" />
                    <Row id="end">
                        <ButtonPrime label="Cadastrar" />
                    </Row>
            </Column>
        </Container>
    )
}

export default CreateUserScreen;