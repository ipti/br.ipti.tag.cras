import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";


const FormAddress = ({ values, errors, touched, handleChange }) => {

    const { backStep, nextStep, family } = useContext(EditFamilyReferedContext);

    if (!family) return null;

    const initialValue = {
        endereco: family.id_endereco_endereco.endereco ?? "",
        telefone: family.id_endereco_endereco.telefone ?? "",
        ponto_referencia: family.id_endereco_endereco.ponto_referencia ?? "",
        condicoes_moradia: family.id_endereco_endereco.condicoes_moradia ?? "",
        tipo_construcao: family.id_endereco_endereco.tipo_construcao ?? "",
        comodos: family.id_endereco_endereco.comodos ?? "",
        valor_aluguel: family.id_endereco_endereco.valor_aluguel ?? 0
    }

    const validationSchema = Yup.object().shape({
        endereco: Yup.string().required("Campo obrigatotório"),
        telefone: Yup.string().required("Campo obrigatotório"),
        ponto_referencia: Yup.string(),
        condicoes_moradia: Yup.string().required("Campo obrigatotório"),
        tipo_construcao: Yup.string().required("Campo obrigatotório"),
        comodos: Yup.string().required("Campo obrigatotório"),
        valor_aluguel: Yup.number(),
    });

    return (
        <Column>
            <Padding padding="16px" />
            <h3>Endereço</h3>
            <Grid checkMockup={[{}]}>
                <Column>
                    <CrasInput name="endereco" onChange={handleChange} value={values.endereco} label="Endereço" />
                    <Padding />
                    {errors.endereco && touched.endereco ? (
                        <div style={{ color: "red" }}>{errors.endereco}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInput onChange={handleChange} value={values.telefone} name="telefone" label="Telefone" />
                    <Padding />
                    {errors.telefone && touched.telefone ? (
                        <div style={{ color: "red" }}>{errors.telefone}<Padding /></div>
                    ) : null}

                </Column>
                <Column>
                    <CrasInput onChange={handleChange} value={values.ponto_referencia} name="ponto_referencia" label="Ponto de Referência" />
                    <Padding />
                    {errors.ponto_referencia && touched.ponto_referencia ? (
                        <div style={{ color: "red" }}>{errors.ponto_referencia}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
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
                    {errors.condicoes_moradia && touched.condicoes_moradia ? (
                        <div style={{ color: "red" }}>{errors.condicoes_moradia}</div>
                    ) : null}
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
                {errors.tipo_construcao && touched.tipo_construcao ? (
                    <div style={{ color: "red" }}>{errors.tipo_construcao}</div>
                ) : null}
            </div>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInput name={"comodos"} value={values.comodos} onChange={handleChange} label="Nº de Comodos" />
                    <Padding />
                    {errors.comodos && touched.comodos ? (
                        <div style={{ color: "red" }}>{errors.comodos}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput value={values.valor_aluguel} onChange={handleChange} name={"valor_aluguel"} label="Valor" />
                    <Padding />
                    {errors.valor_aluguel && touched.valor_aluguel ? (
                        <div style={{ color: "red" }}>{errors.valor_aluguel}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Padding padding="16px" />
           
        </Column>
    )
}

export default FormAddress;