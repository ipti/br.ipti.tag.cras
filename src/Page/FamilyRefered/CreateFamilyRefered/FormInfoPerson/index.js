import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasCalendar from "../../../../CrasUi/Calendar";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputMask from "../../../../CrasUi/Input/InputMask";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";


const FormInfoPerson = () => {

    const { nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, estadosCivis } = useContext(CreateFamilyReferedContext);


    const initialValue = {
        name: dataValues.name ?? "",
        surname: dataValues.surname ?? "",
        birthday: dataValues.birthday ?? "",
        birth_certificate: dataValues.birth_certificate ?? "",
        folder: dataValues.folder ?? "",
        archive: dataValues.arquivo ?? "",
        number: dataValues.nº ?? "",
        nis: dataValues.nis ?? "",
        rg_number: dataValues.rg_number ?? "",
        rg_date_emission: dataValues.rg_date_emission ?? "",
        uf_rg: dataValues.uf_rg ?? "",
        emission_rg: dataValues.emission_rg ?? "",
        cpf: dataValues.cpf ?? "",
        is_deficiency: dataValues.is_deficiency ?? "",
        deficiency: dataValues.deficiency ?? "",
        mother: dataValues.mother ?? "",
        father: dataValues.father ?? "",
        marital_status: dataValues.marital_status ?? "",
        escolarity: dataValues.escolarity ?? "",
        initial_date: dataValues.initial_date,
        final_date: dataValues.final_date
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        surname: Yup.string(),
        birthday: Yup.string().required("Campo obrigatório"),
        birth_certificate: Yup.number(),
        folder: Yup.string(),
        archive: Yup.string(),
        number: Yup.string(),
        nis: Yup.number(),
        rg_number: Yup.string().required("Campo obrigatório"),
        rg_date_emission: Yup.string().required("Campo obrigatório"),
        initial_date: Yup.string().required("Campo obrigatório"),
        final_date: Yup.string(),
        uf_rg: Yup.object().required("Campo obrigatório"),
        emission_rg: Yup.string().required("Campo obrigatório"),
        cpf: Yup.string().required("Campo obrigatório"),
        is_deficiency: Yup.string().required("Campo obrigatório"),
        deficiency: Yup.string(),
        mother: Yup.string().required("Campo obrigatório"),
        father: Yup.string().required("Campo obrigatório"),
        marital_status: Yup.string().required("Campo obrigatório"),
        escolarity: Yup.string().required("Campo obrigatório"),
    });

    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                Dados da Familia
            </h3>
            <Formik initialValues={initialValue} onSubmit={values => { nextStep(values) }} validationSchema={validationSchema}>
                {({ values, handleChange, handleSubmit, errors, touched }) => {
                    const dateEntry = new Date(values.initial_date);
                    const dateEmit = new Date(values.rg_date_emission);
                    const dateBithrday = new Date(values.birthday)

                    console.log(errors)

                    return (
                        <form onSubmit={handleSubmit}>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInput label="Pasta" name={"folder"} onChange={handleChange} value={values.folder} />
                                    <Padding />
                                    {errors.folder && touched.folder ? (
                                        <div style={{ color: "red" }}>{errors.folder} <Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Arquivo" name="archive" onChange={handleChange} value={values.archive} />
                                    <Padding />
                                    {errors.archive && touched.archive ? (
                                        <div style={{ color: "red" }}>{errors.archive}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Número" name="number" onChange={handleChange} value={values.number} />
                                    <Padding />
                                    {errors.number && touched.number ? (
                                        <div style={{ color: "red" }}>{errors.number}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasCalendar name={"initial_date"} date={dateEntry} onChange={handleChange} label="Data Entrada" showIcon />
                                    <Padding />
                                    {errors.initial_date && touched.initial_date ? (
                                        <div style={{ color: "red" }}>{errors.initial_date}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Padding padding="8px" />
                            <h3>Dados Pessoais</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput label="Nome" name="name" onChange={handleChange} value={values.name} />
                                    <Padding />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Apelido" name="surname" onChange={handleChange} value={values.surname} />
                                    <Padding />
                                    {errors.surname && touched.surname ? (
                                        <div style={{ color: "red" }}>{errors.surname}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasCalendar label="Data de Nascimento" date={dateBithrday} name="birthday" onChange={handleChange} showIcon />
                                    <Padding />
                                    {errors.birthday && touched.birthday ? (
                                        <div style={{ color: "red" }}>{errors.birthday}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Certificado" name={"birth_certificate"} onChange={handleChange} value={values.birth_certificate} />
                                    <Padding />
                                    {errors.birth_certificate && touched.birth_certificate ? (
                                        <div style={{ color: "red" }}>{errors.birth_certificate}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="NIS" name="nis" onChange={handleChange} value={values.nis} />
                                    <Padding />
                                    {errors.nis && touched.nis ? (
                                        <div style={{ color: "red" }}>{errors.nis}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}, {}, {}]}>
                                <Column>
                                    <CrasInputMask mask={"99.999-9999"} label="RG" name="rg_number" onChange={handleChange} value={values.rg_number} />
                                    <Padding />
                                    {errors.rg_number && touched.rg_number ? (
                                        <div style={{ color: "red" }}>{errors.rg_number}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasCalendar date={dateEmit} label="Data de Emissão" name="rg_date_emission" onChange={handleChange} showIcon />
                                    <Padding />
                                    {errors.rg_date_emission && touched.rg_date_emission ? (
                                        <div style={{ color: "red" }}>{errors.rg_date_emission}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasDropdown options={estadosDoBrasil} value={values.uf_rg} optionLabel={"uf"} label="UF" name="uf_rg" onChange={handleChange} />
                                    <Padding />
                                    {errors.uf_rg && touched.uf_rg ? (
                                        <div style={{ color: "red" }}>{errors.uf_rg}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Órgão Emissor" name="emission_rg" onChange={handleChange} value={values.emission_rg} />
                                    <Padding />
                                    {errors.emission_rg && touched.emission_rg ? (
                                        <div style={{ color: "red" }}>{errors.emission_rg}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInputMask mask={"999.999.999-99"} label="CPF" name="cpf" onChange={handleChange} value={values.cpf} />
                                    <Padding />
                                    {errors.cpf && touched.cpf ? (
                                        <div style={{ color: "red" }}>{errors.cpf}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <label>Deficiente Físico ou Mental ?</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.is_deficiency === "Sim"} value={"Sim"} name="is_deficiency" label={"Sim"} />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.is_deficiency === "Não"} value={"Não"} name="is_deficiency" label="Não" />
                                    </Row>
                                    <Padding />
                                    {errors.is_deficiency && touched.is_deficiency ? (
                                        <div style={{ color: "red" }}>{errors.is_deficiency}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput label="Mãe" name="mother" onChange={handleChange} value={values.mother} />
                                    <Padding />
                                    {errors.mother && touched.mother ? (
                                        <div style={{ color: "red" }}>{errors.mother}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput label="Pai" name={"father"} onChange={handleChange} value={values.father} />
                                    <Padding />
                                    {errors.father && touched.father ? (
                                        <div style={{ color: "red" }}>{errors.father}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}]}>
                                <Column>
                                    <CrasDropdown options={estadosCivis} optionLabel={""} value={values.marital_status} label={"Estado civil"} onChange={handleChange} name="marital_status" />
                                    <Padding />
                                    {errors.marital_status && touched.marital_status ? (
                                        <div style={{ color: "red" }}>{errors.marital_status}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>

                            <Grid checkMockup={[{}]}>
                                <Column>
                                    <CrasDropdown options={escolaridadeNoBrasil} optionLabel={""} label="Grau de Escolaridade" name="escolarity" onChange={handleChange} value={values.escolarity} />
                                    <Padding />
                                    {errors.escolarity && touched.escolarity ? (
                                        <div style={{ color: "red" }}>{errors.escolarity}<Padding />
                                        </div>
                                    ) : null}
                                </Column>
                            </Grid>
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

export default FormInfoPerson;