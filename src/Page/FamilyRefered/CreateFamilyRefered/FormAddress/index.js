import React, { useContext } from "react";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { CreateFamilyReferedContext } from "../../../../context/CreateFamilyRefered/context";

const FormAddress = () => {

    const {backStep, nextStep} = useContext(CreateFamilyReferedContext)

    return (
        <Column>
            <Padding padding="16px" />
            <h3>Endereço</h3>
            <Row>
                <div className="col"><CrasInput label="Endereço" /></div>
            </Row>
            <Row>
                <div className="col"><CrasInput label="Telefone" /></div>
                <div className="col"><CrasInput label="Ponto de Referência" /></div>
            </Row>
            <Row>
                <div className="col">
                    <label>Condições de Moradia</label>
                    <Padding />
                    <Row>
                        <CrasRadioButton selectValue={1} name="Própria" />
                        <CrasRadioButton selectValue={2} name="Alugada" />
                        <CrasRadioButton selectValue={3} name="Cedida" />
                        <CrasRadioButton selectValue={4} name="Área de Ocupação" />
                    </Row>
                </div>
            </Row>
            <Row>
            </Row>
            <div className="col">
                <label>Tipo de Construção</label>
                <Padding />
                <Row>
                    <CrasRadioButton selectValue={1} name="Alvenaria" />
                    <CrasRadioButton selectValue={2} name="Madeira" />
                    <CrasRadioButton selectValue={3} name="Mista" />
                    <CrasRadioButton selectValue={4} name="Taipa" />
                </Row>
            </div>
            <Row>
                <div className="col"><CrasInput label="Nº de Comodos" /></div>
                <div className="col"><CrasInput label="Valor" /></div>
            </Row>
            <Padding padding="16px" />
            <Row id="end">
                <ButtonPrime label="Voltar" onClick={backStep} />
                <Padding />
                <ButtonPrime label="Próximo" onClick={nextStep} />
            </Row>
        </Column>
    )
}

export default FormAddress;