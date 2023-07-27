import React, { useContext } from "react";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { CreateFamilyReferedContext } from "../../../../context/CreateFamilyRefered/context";
import { Formik } from "formik";

const FormAddress = () => {

    const { backStep, nextStep, dataValues } = useContext(CreateFamilyReferedContext);

    const initialValue = {
        endereco: dataValues.endereco ?? "",
        telefone: dataValues.telefone ?? "",
        ponto_referencia: dataValues.ponto_referencia ?? "",
        condicoes_moradia: dataValues.condicoes_moradia ?? "",
        tipo_construcao: dataValues.tipo_construcao ?? "",
        comodos: dataValues.comodos ?? "",
        valor_aluguel: dataValues.valor_aluguel ?? ""
    }

    return (
        <Column>
            <Padding padding="16px" />
            <h3>Endereço</h3>
            <Formik initialValues={initialValue} onSubmit={value => nextStep(value)}>
                {({ values, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col"><CrasInput name="endereco" onChange={handleChange} value={values.endereco} label="Endereço" /></div>
                            </Row>
                            <Row>
                                <div className="col"><CrasInput onChange={handleChange} value={values.telefone} name="telefone" label="Telefone" /></div>
                                <div className="col"><CrasInput onChange={handleChange} value={values.ponto_referencia} name="ponto_referencia" label="Ponto de Referência" /></div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <label>Condições de Moradia</label>
                                    <Padding />
                                    <Row>
                                        <CrasRadioButton
                                            selectValue={"Própria"}
                                            value={"Própria"}
                                            checked={values.condicoes_moradia === "Própria"}
                                            label={"Própria"}
                                            onChange={handleChange}
                                            name="condicoes_moradia" />
                                        <CrasRadioButton
                                            selectValue={"Alugada"}
                                            value={"Alugada"}
                                            checked={values.condicoes_moradia === "Alugada"}
                                            label={"Alugada"}
                                            onChange={handleChange}
                                            name="condicoes_moradia" />
                                        <CrasRadioButton
                                            selectValue={"Cedida"}
                                            value="Cedida"
                                            onChange={handleChange}
                                            checked={values.condicoes_moradia === "Cedida"}
                                            label={"Cedida"}
                                            name="condicoes_moradia" />
                                        <CrasRadioButton
                                            selectValue={"Área de Ocupação"}
                                            value={"Área de Ocupação"}
                                            onChange={handleChange}
                                            checked={values.condicoes_moradia === "Área de Ocupação"}
                                            label={"Área de Ocupação"}
                                            name="condicoes_moradia" />
                                    </Row>
                                </div>
                            </Row>
                            <Row>
                            </Row>
                            <div className="col">
                                <label>Tipo de Construção</label>
                                <Padding />
                                <Row>
                                    <CrasRadioButton
                                        selectValue={"Alvenaria"}
                                        value={"Alvenaria"}
                                        onChange={handleChange}
                                        checked={values.tipo_construcao === "Alvenaria"}
                                        label={"Alvenaria"}
                                        name="tipo_construcao" />
                                    <CrasRadioButton
                                        selectValue={"Madeira"}
                                        value={"Madeira"}
                                        onChange={handleChange}
                                        checked={values.tipo_construcao === "Madeira"}
                                        label={"Madeira"}
                                        name="tipo_construcao" />
                                    <CrasRadioButton
                                        selectValue={"Mista"}
                                        value={"Mista"}
                                        onChange={handleChange}
                                        checked={values.tipo_construcao === "Mista"}
                                        label={"Mista"}
                                        name="tipo_construcao" />
                                    <CrasRadioButton
                                        selectValue={"Taipa"}
                                        value={"Taipa"}
                                        onChange={handleChange}
                                        checked={values.tipo_construcao === "Taipa"}
                                        label={"Taipa"}
                                        name="tipo_construcao" />
                                </Row>
                            </div>
                            <Row>
                                <div className="col"><CrasInput name={"comodos"} value={values.comodos} onChange={handleChange} label="Nº de Comodos" /></div>
                                <div className="col"><CrasInput value={values.valor_aluguel} onChange={handleChange} name={"valor_aluguel"} label="Valor" /></div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">

                                <Padding />
                                <ButtonPrime label="Próximo" type="submit" />
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

export default FormAddress;