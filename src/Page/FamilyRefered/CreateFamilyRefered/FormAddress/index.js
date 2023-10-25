import { Formik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputMask from "../../../../CrasUi/Input/InputMask";
import CrasInputNumber from "../../../../CrasUi/Input/InputNumber";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";
import { useFetchAllState } from "../../../../sdk/State/request";
import http from "../../../../services/axios";
import { getToken } from "../../../../services/localstorage";


const FormAddress = () => {

    const { backStep, nextStep, dataValues } = useContext(CreateFamilyReferedContext);

    const [city, setcity] = useState([])

    const { data: state } = useFetchAllState();


    const initialValue = {
        address: dataValues.address ?? "",
        telephone: dataValues.telephone ?? "",
        reference: dataValues.reference ?? "",
        edcenso_uf_fk: dataValues.edcenso_uf_fk ?? "",
        edcenso_city_fk: dataValues.edcenso_city_fk ?? "",
        conditions: dataValues.conditions ?? "",
        construction_type: dataValues.construction_type ?? "",
        rooms: dataValues.rooms ?? 0,
        rent_value: dataValues.rent_value ?? 0
    }

    const validationSchema = Yup.object().shape({
        address: Yup.string().required("Campo obrigatotório"),
        telephone: Yup.string().required("Campo obrigatotório"),
        reference: Yup.string(),
        conditions: Yup.string().required("Campo obrigatotório"),
        construction_type: Yup.string().required("Campo obrigatotório"),
        rooms: Yup.number().required("Campo obrigatotório"),
        rent_value: Yup.number(),
    });



    const config = {
        headers: { Authorization: `Bearer ${getToken()}` },
    };

    const getCity = (id) => {

        if (id) {

            (async () => {
                const res = await http.get(`/bff/get-city?ufId=${id}`, config)
                setcity(res.data)
            })();
        }

    }


    const stateSelect = (e, setFieldValue) => {
        setFieldValue("edcenso_uf_fk", e.target.value)
        getCity(e.target.value.id)
    }


    return (
        <Column>
            <Padding padding="16px" />
            <h3>Endereço</h3>
            <Formik initialValues={initialValue} onSubmit={value => nextStep(value)} validationSchema={validationSchema}>
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="address" onChange={handleChange} value={values.address} label="Endereço" />
                                    <Padding />
                                    {errors.address && touched.address ? (
                                        <div style={{ color: "red" }}>{errors.address}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput onChange={handleChange} value={values.reference} name="reference" label="Referência" />
                                    <Padding />
                                    {errors.reference && touched.reference ? (
                                        <div style={{ color: "red" }}>{errors.reference}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    {state ? <CrasDropdown name="edcenso_uf_fk" optionLabel={"name"} options={state} onChange={(e) => stateSelect(e, setFieldValue)} value={values.edcenso_uf_fk} label="Estado" />
                                        : <></>}
                                    <Padding />
                                    {errors.edcenso_uf_fk && touched.edcenso_uf_fk ? (
                                        <div style={{ color: "red" }}>{errors.edcenso_uf_fk}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasDropdown onChange={handleChange} optionLabel={"name"} options={city} value={values.edcenso_city_fk} name="edcenso_city_fk" label="Cidade" />
                                    <Padding />
                                    {errors.edcenso_city_fk && touched.edcenso_city_fk ? (
                                        <div style={{ color: "red" }}>{errors.edcenso_city_fk}<Padding /></div>
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
                                    <CrasInputNumber mode="currency"
                                        currency="BRL"
                                        locale="pt-BR" showButtons={true} value={values.rent_value} onChange={handleChange} name={"rent_value"} label="Valor" />
                                    <Padding />
                                    {errors.rent_value && touched.rent_value ? (
                                        <div style={{ color: "red" }}>{errors.rent_value}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
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