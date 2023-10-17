import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../CrasUi/Dropdown";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateServicesContext } from "../../../context/Service/CreateService/context";

const CreateServicesScreen = () => {

    const { initialValue, service, technician, handleCreateService, CreateUserSchema, userIdentify } = useContext(CreateServicesContext)

    console.log(technician)

    return (
        <Container>
            <Column>
                <h1>
                    Novo Atendimentos
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={initialValue} onSubmit={handleCreateService} validationSchema={CreateUserSchema}>
                    {({ values, handleChange, handleSubmit, errors, touched }) => {
                        return <form onSubmit={handleSubmit}>
                            <h3>Dados do atendimento</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown name="servico" value={values.servico} onChange={handleChange} optionLabel={"name"} options={service} label="Serviço" />
                                    <Padding />
                                    {errors.servico && touched.servico ? (
                                        <div style={{ color: "red" }}>{errors.servico}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput name="solicitacao" value={values.solicitacao} onChange={handleChange} label="Solicitação" />
                                    <Padding />
                                    {errors.solicitacao && touched.solicitacao ? (
                                        <div style={{ color: "red" }}>{errors.solicitacao}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="encaminhamento" value={values.encaminhamento} onChange={handleChange} label="Providências" />
                                    <Padding />
                                    {errors.encaminhamento && touched.encaminhamento ? (
                                        <div style={{ color: "red" }}>{errors.encaminhamento}<Padding /></div>
                                    ) : null}

                                </Column>
                                <Column>
                                    <CrasInput name="resultado" value={values.resultado} onChange={handleChange} label="Resultado" />
                                    <Padding />
                                    {errors.resultado && touched.resultado ? (
                                        <div style={{ color: "red" }}>{errors.resultado}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown optionLabel={"name"} name="tecnico" onChange={handleChange} value={values.tecnico} options={technician} label="Técnico Responsável" />
                                    <Padding />
                                    {errors.tecnico && touched.tecnico ? (
                                        <div style={{ color: "red" }}>{errors.tecnico}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column><CrasDropdown onChange={handleChange} value={values.id_identificacao_usuario} name={"id_identificacao_usuario"} optionLabel={"nome"} options={userIdentify} label="Usuário ou Membro Familiar" />
                                    <Padding />
                                    {errors.id_identificacao_usuario && touched.id_identificacao_usuario ? (
                                        <div style={{ color: "red" }}>{errors.id_identificacao_usuario}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Cadastrar" />
                            </Row>
                        </form>
                    }}
                </Formik>
            </Column>
            <Padding padding="16px" />
        </Container>
    )
}

export default CreateServicesScreen;