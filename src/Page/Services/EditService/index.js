import React, { useContext } from "react";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { Formik } from "formik";
import CrasCalendar from "../../../CrasUi/Calendar";
import CrasDropdown from "../../../CrasUi/Dropdown";
import CrasInput from "../../../CrasUi/Input/Input";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import { EditServiceContext } from "../../../context/Service/EditService/context";

const EditServicePage = () => {
    const { initialValue, service, technician, handleCreateService, CreateUserSchema, userIdentify, serviceOne } = useContext(EditServiceContext)

    return (
        <Container>
            <Column>
                <h1>
                    Editar Atendimentos
                </h1>
                <Padding padding="16px" />
                {serviceOne ? <Formik initialValues={initialValue} onSubmit={handleCreateService} validationSchema={CreateUserSchema}>
                    {({ values, handleChange, handleSubmit, errors, touched }) => {
                        const date = new Date(values.data)
                        return <form onSubmit={handleSubmit}>
                            <h3>Dados do atendimento</h3>
                            <Grid checkMockup={[{}]}>
                                <Column>
                                    <CrasCalendar name="data" date={date} onChange={handleChange} showIcon />
                                    <Padding />
                                    {errors.data && touched.data ? (
                                        <div style={{ color: "red" }}>{errors.data}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown name="servico" value={values.servico} onChange={handleChange} optionLabel={"nome"} options={service} label="Serviço" />
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
                                    <CrasDropdown optionLabel={"nome"} name="tecnico" onChange={handleChange} value={values.tecnico} options={technician} label="Técnico Responsável" />
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
                                <ButtonPrime type="submit" label="Salvar" />
                            </Row>
                        </form>
                    }}
                </Formik> : null}
            </Column>
            <Padding padding="16px" />
        </Container>
    )
}

export default EditServicePage;