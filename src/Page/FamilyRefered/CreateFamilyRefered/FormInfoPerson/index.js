import React from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasCalendar from "../../../../CrasUi/Calendar";

const FormInfoPerson = () => {
    return (
        <Column>
            <Padding padding="4%">
                <h1>
                    Novo usuário
                </h1>
                <Row>
                    <div class="col"><CrasInput label="Pasta" /></div>
                    <div class="col"><CrasInput label="Arquivo" /></div>
                    <div class="col"><CrasInput label="Nº" /></div>
                </Row>
                <Row>
                    <div class="col"><CrasCalendar label="Data Entrada" showIcon /></div>
                    <div class="col"><CrasCalendar label="Data Desligamento" showIcon /></div>
                </Row>
                <Padding padding="8px" />
                <h3>Nome</h3>
                <Row>
                    <div class="col"><CrasInput label="Nome" /></div>
                    <div class="col"><CrasInput label="Apelido" /></div>
                </Row>
                <Row>
                    <div class="col"><CrasInput label="Data de Nascimento" /></div>
                    <div class="col"><CrasInput label="Nº Cadastro" /></div>
                    <div class="col"><CrasInput label="NIS" /></div>
                </Row>
                <Row id="end">
                    <ButtonPrime label="Cadastrar" />
                </Row>
            </Padding>
        </Column>
    )
}

export default FormInfoPerson;