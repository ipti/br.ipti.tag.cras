import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputMask from "../../../../CrasUi/Input/InputMask";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyHappyChildContext } from "../../../../context/HappyChild/FamilyHC/CreateFamilyHC/context";


const FormIdentify = () => {

    const { nextStep, dataValues} = useContext(CreateFamilyHappyChildContext);


    const initialValue = {
        nis_number: dataValues.nis_number ?? "",
        uf: dataValues.uf ?? "",
        city: dataValues.city ?? "",
        neighborhood: dataValues.neighborhood ?? "",
        adress: dataValues.adress ?? "",
        cep: dataValues.cep ?? "",
        reference: dataValues.nis ?? "",
        area: dataValues.rg_number ?? "",
    }

    const validationSchema = Yup.object().shape({
        nis_number: Yup.number().required("Campo obrigatório"),
        uf: Yup.string().required("Campo obrigatório"),
        city: Yup.string().required("Campo obrigatório"),
        neighborhood: Yup.string().required("Campo obrigatório"),
        adress: Yup.string().required("Campo obrigatório"),
        cep: Yup.string().required("Campo obrigatório"),
        reference: Yup.string().required("Campo obrigatório"),
        area: Yup.string().required("Campo obrigatório"),
    });

    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                IDENTIFICAÇÃO DA FAMÍLIA
            </h3>
            <Formik initialValues={initialValue} onSubmit={values => { nextStep(values) }} validationSchema={validationSchema}>
                {({ values, handleChange, handleSubmit, errors, touched }) => {

                    return (
                        <form onSubmit={handleSubmit}>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInput label="NIS" name={"nis_number"} onChange={handleChange} value={values.nis_number} />
                                    <Padding />
                                    {errors.nis_number && touched.nis_number ? (
                                        <div style={{ color: "red" }}>{errors.nis_number} <Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Unidade Federativa" name="uf" onChange={handleChange} value={values.uf} />
                                    <Padding />
                                    {errors.uf && touched.uf ? (
                                        <div style={{ color: "red" }}>{errors.uf}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Municipio" name="city" onChange={handleChange} value={values.city} />
                                    <Padding />
                                    {errors.city && touched.city ? (
                                        <div style={{ color: "red" }}>{errors.city}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>

                                <Column>
                                    <CrasInput label="Logradouro" name="adress" onChange={handleChange} value={values.adress} />
                                    <Padding />
                                    {errors.adress && touched.adress ? (
                                        <div style={{ color: "red" }}>{errors.adress}<Padding /></div>
                                    ) : null}
                                </Column>
                           
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput label="Bairro" name="neighborhood" onChange={handleChange} value={values.neighborhood} />
                                    <Padding />
                                    {errors.neighborhood && touched.neighborhood ? (
                                        <div style={{ color: "red" }}>{errors.neighborhood}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInputMask mask={"99999-999"} label="CEP" name="cep" onChange={handleChange} value={values.cep} />
                                    <Padding />
                                    {errors.cep && touched.cep ? (
                                        <div style={{ color: "red" }}>{errors.cep}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>

                                <Column>
                                    <CrasInput label="Logradouro" name="reference" onChange={handleChange} value={values.reference} />
                                    <Padding />
                                    {errors.reference && touched.reference ? (
                                        <div style={{ color: "red" }}>{errors.reference}<Padding /></div>
                                    ) : null}
                                </Column>

                                <Column>
                                    <CrasDropdown label="Area" name="area" onChange={handleChange} value={values.area} options={escolaridadeNoBrasil} />
                                </Column>
                                    
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Próximo" />
                            </Row>
                        </form>
                    )
                }
                }
            </Formik>

        </Column >
    )
}

export default FormIdentify;