import React, { useContext } from "react";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { CreateFamilyReferedContext } from "../../../../context/CreateFamilyRefered/context";
import { Formik } from "formik";

const FormFinances = () => {

    const { backStep, nextStep, dataValues } = useContext(CreateFamilyReferedContext)

    const initialValue = {
        profissao: dataValues.profissao ?? "",
        renda: dataValues.renda ?? "",
        reside_familia: dataValues.reside_familia ?? "",
        bolsa_familia: dataValues.bolsa_familia ?? "",
        loasbpc: dataValues.loasbpc ?? "",
        previdencia: dataValues.previdencia ?? "",
        carteira_assinada: dataValues.carteira_assinada ?? "",
        ocupacao_irregular: dataValues.ocupacao_irregular ?? "",
        crianca_sozinha: dataValues.crianca_sozinha ?? "",
        idosos_dependentes: dataValues.idosos_dependentes ?? "",
        desempregados: dataValues.desempregados ?? "",
        deficientes: dataValues.deficientes ?? "",
        baixa_renda: dataValues.baixa_renda ?? "",
        outros: dataValues.outros ?? ""
    }


    return (
        <Column>
            <Padding padding="16px" />


            <h3>Principais Vulnerabilidades</h3>
            <Formik initialValues={initialValue} onSubmit={(values => nextStep(values))}>
                {({ values, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col"> <CrasCheckbox checked={values.ocupacao_irregular[0] === 1} name={"ocupacao_irregular"} value={1} onChange={handleChange} label={"Residem em área de ocupação irregular"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"idosos_dependentes"} value={1} checked={values.idosos_dependentes[0] === 1} onChange={handleChange} label={"Existência de idosos dependentes na família"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"deficientes"} value={1} checked={values.deficientes[0] === 1} onChange={handleChange} label={"Existência de deficientes na família"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"crianca_sozinha"} value={1} checked={values.crianca_sozinha[0] === 1} onChange={handleChange} label={"Crianças que ficam sozinhos no domicilio"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"desempregados"} value={1} checked={values.desempregados[0] === 1} onChange={handleChange} label={"Desemprego"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"baixa_renda"} value={1} checked={values.baixa_renda[0] === 1} onChange={handleChange} label={"Baixa renda"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"outros"} value={1} checked={values.outros[0] === 1} onChange={handleChange} label={"Outros"} /></div>
                            </Row>
                            <h3>Situação Financeira e Previdenciária</h3>
                            <Row>
                                <div className="col"><CrasInput name="profissao" onChange={handleChange} value={values.profissao} label="Profissão" /></div>
                                <div className="col">
                                    <label>Carteira Assinada</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} name="carteira_assinada" value={"Sim"} onChange={handleChange} checked={values.carteira_assinada === "Sim"} label={"Sim"} />
                                        <CrasRadioButton selectValue={2} name="carteira_assinada" label={"Não"} value={"Não"} onChange={handleChange} checked={values.carteira_assinada === "Não"} />
                                    </Row>
                                </div>
                            </Row>
                            <Row>
                                <div className="col"><CrasInput value={values.renda} name={"renda"} onChange={handleChange} label="Renda Mensal do usuário" /></div>
                                <div className="col">
                                    <label>Reside com:</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.reside_familia === "Familia"} value={"Familia"} name={"reside_familia"} label="Família" />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.reside_familia === "Sozinho"} value={"Sozinho"} name={"reside_familia"} label="Sozinho" />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.reside_familia === "Outros"} value={"Outros"} name={"reside_familia"} label="Outros" />

                                    </Row>
                                </div>
                            </Row>
                            <h3>
                                Benefício (Benefício do usuário cadastrado)
                            </h3>
                            <Row>
                                <div className="col"><CrasInput value={values.loasbpc} name={"loasbpc"} onChange={handleChange} label="LOAS/BPC" /></div>
                                <div className="col"><CrasInput value={values.previdencia} name={"previdencia"} onChange={handleChange} label="Previdência Social" /></div>
                                <div className="col"><CrasInput value={values.bolsa_familia} name={"bolsa_familia"} onChange={handleChange} label="Bolsa Família" /></div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">
                                <Padding />
                                <ButtonPrime label="Próximo" type={"submit"} />
                            </Row>
                        </form>
                    )
                }}
            </Formik>
            <Row id="start">
                <ButtonPrime label="Voltar" onClick={backStep} />
            </Row>
        </Column>
    )
}
export default FormFinances;