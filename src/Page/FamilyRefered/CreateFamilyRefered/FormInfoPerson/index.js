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
                <div className="col"><CrasInput label="Pasta" /></div>
                <div className="col"><CrasInput label="Arquivo" /></div>
                <div className="col"><CrasInput label="Nº" /></div>
            </Row>
            <Row>
                <div className="col"><CrasCalendar label="Data Entrada" showIcon /></div>
                <div className="col"><CrasCalendar label="Data Desligamento" showIcon /></div>
            </Row>
            <Padding padding="8px" />
            <h3>Dados Pessoais</h3>
            <Row>
                <div className="col"><CrasInput label="Nome" /></div>
                <div className="col"><CrasInput label="Apelido" /></div>
            </Row>
            <Row>
                <div className="col"><CrasCalendar label="Data de Nascimento" showIcon /></div>
                <div className="col"><CrasInput label="Nº Cadastro" /></div>
                <div className="col"><CrasInput label="NIS" /></div>
            </Row>
            <Row>
                <div className="col"><CrasInput label="RG" /></div>
                <div className="col"><CrasCalendar label="Data de Emissão" showIcon /></div>
                <div className="col"><CrasDropdown label="UF" /></div>
                <div className="col"><CrasInput label="Órgão Emissor" /></div>
            </Row>
            <Row>
                <div className="col"><CrasInput label="CPF" /></div>
                <div className="col">
                    <label>Deficiente Físico ou Mental ?</label>
                    <Row>
                        <CrasRadioButton selectValue={1} name="Sim" />
                        <CrasRadioButton selectValue={2} name="Não" />
                    </Row>
                </div>
            </Row>

            <Row>
                <div className="col"><CrasInput label="Mãe" /></div>
                <div className="col"><CrasInput label="Pai" /></div>
            </Row>
            <Row>
                <div className="col">
                    <label>Estado Civil</label>
                    <Row>
                        <CrasRadioButton selectValue={1} name="Sim" />
                        <CrasRadioButton selectValue={2} name="Não" />
                    </Row>
                </div>
            </Row>

            <Row>
                <div className="col"><CrasDropdown label="Grau de Escolaridade" /></div>
            </Row>
            <Padding padding="16px" />
            <Row id="end">
                <ButtonPrime onClick={nextStep} label="Próximo" />
            </Row>
        </Column>
    )
}

export default FormInfoPerson;