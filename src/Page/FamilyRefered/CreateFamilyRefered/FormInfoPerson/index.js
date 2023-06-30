import React, { useContext } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasCalendar from "../../../../CrasUi/Calendar";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import { CreateFamilyReferedContext } from "../../../../Container/FamilyRefered/CreateFamilyRefered/context/context";

const FormInfoPerson = () => {

    const {nextStep} = useContext(CreateFamilyReferedContext)
    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                Dados da Familia
            </h3>
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
            <h3>Dados Pessoais</h3>
            <Row>
                <div class="col"><CrasInput label="Nome" /></div>
                <div class="col"><CrasInput label="Apelido" /></div>
            </Row>
            <Row>
                <div class="col"><CrasCalendar label="Data de Nascimento" showIcon /></div>
                <div class="col"><CrasInput label="Nº Cadastro" /></div>
                <div class="col"><CrasInput label="NIS" /></div>
            </Row>
            <Row>
                <div class="col"><CrasInput label="RG" /></div>
                <div class="col"><CrasCalendar label="Data de Emissão" showIcon /></div>
                <div class="col"><CrasDropdown label="UF" /></div>
                <div class="col"><CrasInput label="Órgão Emissor" /></div>
            </Row>
            <Row>
                <div class="col"><CrasInput label="CPF" /></div>
                <div class="col">
                    <label>Deficiente Físico ou Mental ?</label>
                    <Row>
                        <CrasRadioButton selectValue={1} name="Sim" />
                        <CrasRadioButton selectValue={2} name="Não" />
                    </Row>
                </div>
            </Row>

            <Row>
                <div class="col"><CrasInput label="Mãe" /></div>
                <div class="col"><CrasInput label="Pai" /></div>
            </Row>
            <Row>
                <div class="col">
                    <label>Estado Civil</label>
                    <Row>
                        <CrasRadioButton selectValue={1} name="Sim" />
                        <CrasRadioButton selectValue={2} name="Não" />
                    </Row>
                </div>
            </Row>

            <Row>
                <div class="col"><CrasDropdown label="Grau de Escolaridade" /></div>
            </Row>
            <Padding padding="16px" />
            <Row id="end">
                <ButtonPrime onClick={nextStep} label="Próximo" />
            </Row>
        </Column>
    )
}

export default FormInfoPerson;