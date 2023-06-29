import React, { useState } from "react";
import { Column, Padding, Row } from "../../../CrasUi/styles/styles";
import CrasInput from "../../../CrasUi/Input/Input";
import { Container } from "./style";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";

const CreateUserScreen = () => {



    return(
        <Container>
            <Column>
                <Padding padding="8%">
                    <h1>
                        Novo usuário
                    </h1>
                    <Row>
                        <div class="col"><CrasInput  label="Nome" /></div>
                        <div class="col"><CrasInput  label="Email" /></div>
                    </Row>   
                    <Row>
                        <div class="col"><CrasInput  label="Tipo de usuário" /></div>
                        <div class="col"><CrasInput  label="Senha" /></div>
                        <div class="col"><CrasInput  label="Confirmar Senha" /></div>
                    </Row> 
                    <Row id="end">
                        <ButtonPrime label="Cadastrar" />
                    </Row>
                </Padding>
            </Column>
        </Container>
    )
}

export default CreateUserScreen;