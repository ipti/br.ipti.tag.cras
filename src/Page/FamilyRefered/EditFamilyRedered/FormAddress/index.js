import React, { useContext } from "react";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputMask from "../../../../CrasUi/Input/InputMask";
import CrasInputNumber from "../../../../CrasUi/Input/InputNumber";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";


const FormAddress = ({ values, errors, touched, handleChange }) => {

    const {family } = useContext(EditFamilyReferedContext);

    if (!family) return null;

    return (
        <Column>
            <Padding padding="16px" />
            <h3>Endereço</h3>
            <Grid checkMockup={[{}]}>
                <Column>
                    <CrasInput name="address" onChange={handleChange} value={values.address} label="Endereço" />
                    <Padding />
                    {errors.address && touched.address ? (
                        <div style={{ color: "red" }}>{errors.address}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInputMask mask={"(99) 9 9999-9999"} onChange={handleChange} value={values.telephone} name="telephone" label="Telefone" />
                    <Padding />
                    {errors.telephone && touched.telephone ? (
                        <div style={{ color: "red" }}>{errors.telephone}<Padding /></div>
                    ) : null}

                </Column>
                <Column>
                    <CrasInput onChange={handleChange} value={values.reference} name="reference" label="Ponto de Referência" />
                    <Padding />
                    {errors.reference && touched.reference ? (
                        <div style={{ color: "red" }}>{errors.reference}<Padding /></div>
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
                            checked={values.conditions === "Própria"}
                            label={"Própria"}
                            onChange={handleChange}
                            name="conditions" />
                        <CrasRadioButton
                            selectValue={"Alugada"}
                            value={"Alugada"}
                            checked={values.conditions === "Alugada"}
                            label={"Alugada"}
                            onChange={handleChange}
                            name="conditions" />
                        <CrasRadioButton
                            selectValue={"Cedida"}
                            value="Cedida"
                            onChange={handleChange}
                            checked={values.conditions === "Cedida"}
                            label={"Cedida"}
                            name="conditions" />
                        <CrasRadioButton
                            selectValue={"Área de Ocupação"}
                            value={"Área de Ocupação"}
                            onChange={handleChange}
                            checked={values.conditions === "Área de Ocupação"}
                            label={"Área de Ocupação"}
                            name="conditions" />
                    </Row>
                    {errors.conditions && touched.conditions ? (
                        <div style={{ color: "red" }}>{errors.conditions}</div>
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
                        checked={values.construction_type === "Alvenaria"}
                        label={"Alvenaria"}
                        name="construction_type" />
                    <CrasRadioButton
                        selectValue={"Madeira"}
                        value={"Madeira"}
                        onChange={handleChange}
                        checked={values.construction_type === "Madeira"}
                        label={"Madeira"}
                        name="construction_type" />
                    <CrasRadioButton
                        selectValue={"Mista"}
                        value={"Mista"}
                        onChange={handleChange}
                        checked={values.construction_type === "Mista"}
                        label={"Mista"}
                        name="construction_type" />
                    <CrasRadioButton
                        selectValue={"Taipa"}
                        value={"Taipa"}
                        onChange={handleChange}
                        checked={values.construction_type === "Taipa"}
                        label={"Taipa"}
                        name="construction_type" />
                </Row>
                {errors.construction_type && touched.construction_type ? (
                    <div style={{ color: "red" }}>{errors.construction_type}</div>
                ) : null}
            </div>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInputNumber showButtons={true} name={"rooms"} value={values.rooms} onChange={handleChange} label="Nº de Comodos" />
                    <Padding />
                    {errors.rooms && touched.rooms ? (
                        <div style={{ color: "red" }}>{errors.rooms}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInputNumber  mode="currency"
                        currency="BRL"
                        locale="pt-BR" showButtons={true} value={values.rent_value} onChange={handleChange} name={"rent_value"} label="Valor" />
                    <Padding />
                    {errors.rent_value && touched.rent_value ? (
                        <div style={{ color: "red" }}>{errors.rent_value}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Padding padding="16px" />
        </Column>
    )
}

export default FormAddress;