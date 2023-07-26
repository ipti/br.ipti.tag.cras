import React, { useContext } from "react";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { CreateFamilyReferedContext } from "../../../../context/CreateFamilyRefered/context";

const FormFinances = () => {

    const {backStep, nextStep} = useContext(CreateFamilyReferedContext)


    return (
        <Column>
            <Padding padding="16px" />
            <h3>Principais Vulnerabilidades</h3>
            <Row>
                <div className="col"> <CrasCheckbox name={"Residem em área de ocupação irregular"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"Existência de idosos dependentes na família"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"Existência de deficientes na família"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"Crianças que ficam sozinhos no domicilio"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"Desemprego"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"Baixa renda"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"Outros"} /></div>
            </Row>
            <h3>Situação Financeira e Previdenciária</h3>
            <Row>
                <div className="col"><CrasInput label="Profissão" /></div>
                <div className="col">
                    <label>Carteira Assinada</label>
                    <Row>
                        <CrasRadioButton selectValue={1} name="Sim" />
                        <CrasRadioButton selectValue={2} name="Não" />
                    </Row>
                </div>
            </Row>
            <Row>
                <div className="col"><CrasInput label="Renda Mensal do usuário" /></div>
                <div className="col">
                    <label>Reside com:</label>
                    <Row>
                        <CrasRadioButton selectValue={1} name="Família" />
                        <CrasRadioButton selectValue={2} name="Sozinho" />
                        <CrasRadioButton selectValue={2} name="Outros" />

                    </Row>
                </div>
            </Row>
            <h3>
                Benefício (Benefício do usuário cadastrado)
            </h3>
            <Row>
                <div className="col"><CrasInput label="LOAS/BPC" /></div>
                <div className="col"><CrasInput label="Previdência Social" /></div>
                <div className="col"><CrasInput label="Bolsa Família" /></div>
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
export default FormFinances;