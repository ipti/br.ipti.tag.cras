import React, { useContext } from "react";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
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
                <h3>Dados do atendimento</h3>
                {serviceOne ? <Formik initialValues={initialValue} onSubmit={handleCreateService} validationSchema={CreateUserSchema}>
                    {({ values, handleChange, handleSubmit, errors, touched }) => {
                        const date = new Date(values.data)
                        return <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasCalendar name="data" date={date} onChange={handleChange} showIcon />
                                    <Padding />
                                    {errors.data && touched.data ? (
                                        <div style={{ color: "red" }}>{errors.data}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasDropdown name="servico" value={values.servico} onChange={handleChange} optionLabel={"nome"} options={service} label="Serviço" />
                                    <Padding />
                                    {errors.servico && touched.servico ? (
                                        <div style={{ color: "red" }}>{errors.servico}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput name="solicitacao" value={values.solicitacao} onChange={handleChange} label="Solicitação" />
                                    <Padding />
                                    {errors.solicitacao && touched.solicitacao ? (
                                        <div style={{ color: "red" }}>{errors.solicitacao}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasInput name="encaminhamento" value={values.encaminhamento} onChange={handleChange} label="Providências" />
                                    <Padding />
                                    {errors.encaminhamento && touched.encaminhamento ? (
                                        <div style={{ color: "red" }}>{errors.encaminhamento}</div>
                                    ) : null}

                                </div>
                                <div className="col">
                                    <CrasInput name="resultado" value={values.resultado} onChange={handleChange} label="Resultado" />
                                    <Padding />
                                    {errors.resultado && touched.resultado ? (
                                        <div style={{ color: "red" }}>{errors.resultado}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasDropdown optionLabel={"nome"} name="tecnico" onChange={handleChange} value={values.tecnico} options={technician} label="Técnico Responsável" />
                                    <Padding />
                                    {errors.tecnico && touched.tecnico ? (
                                        <div style={{ color: "red" }}>{errors.tecnico}</div>
                                    ) : null}
                                </div>
                                <div className="col"><CrasDropdown onChange={handleChange} value={values.id_identificacao_usuario} name={"id_identificacao_usuario"} optionLabel={"nome"} options={userIdentify} label="Usuário ou Membro Familiar" />
                                <Padding />
                                    {errors.id_identificacao_usuario && touched.id_identificacao_usuario ? (
                                        <div style={{ color: "red" }}>{errors.id_identificacao_usuario}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Salvar" />
                            </Row>
                        </form>
                    }}
                </Formik> : null}
            </Column>
        </Container>
    )
}

export default EditServicePage;