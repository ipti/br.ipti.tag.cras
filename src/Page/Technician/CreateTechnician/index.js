import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateTechnicianContext } from "../../../context/Technician/CreateTechnician/context";
import CrasDropdown from "../../../CrasUi/Dropdown";

const CreateTechnicianScreen = () => {

    const { handleCreateTechnician, CreateSchema, initialValue, user } = useContext(CreateTechnicianContext);
    const functions = [{ type: "Assistente Social", id: "ASSISTENTE_SOCIAL" }, { type: "Psicólogo", id: "PSICOLOGO" }]

    return (
        <Container>
            <Column>
                <h1>
                    Novo Tecnico
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={initialValue} onSubmit={(values) => handleCreateTechnician({...values, type: values.type.id})} validationSchema={CreateSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) =>
                        <form onSubmit={handleSubmit}>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        label="Nome *" />
                                    <Padding />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}</div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasDropdown name="user" value={values.user} options={user} onChange={handleChange} optionLabel={"name"} label="Usuário *" />
                                    <Padding />
                                    {errors.user && touched.user ? (
                                        <div style={{ color: "red" }}>{errors.user}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput
                                        name="professional_register"
                                        value={values.professional_register}
                                        onChange={handleChange}
                                        label="Registro Profissional" />
                                    <Padding />
                                    {errors.professional_register && touched.professional_register ? (
                                        <div style={{ color: "red" }}>{errors.professional_register}</div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasDropdown name="type" value={values.type} options={functions} onChange={handleChange} optionLabel={"type"} label="Função" />
                                    <Padding />
                                    {errors.type && touched.type ? (
                                        <div style={{ color: "red" }}>{errors.type}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Cadastrar" />
                            </Row>
                        </form>
                    }
                </Formik>

            </Column>
        </Container>
    )
}


export default CreateTechnicianScreen;