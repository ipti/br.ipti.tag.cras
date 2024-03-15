import { Form, Formik } from "formik";
import { MultiSelect } from 'primereact/multiselect';
import React, { useContext, useState } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../CrasUi/Dropdown";
import CrasInput from "../../../CrasUi/Input/Input";
import CrasInputArea from "../../../CrasUi/Input/inputArea";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateServicesContext } from "../../../context/Service/CreateService/context";
import CrasCheckbox from "../../../CrasUi/Checkbox";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";
import CrasInputMask from "../../../CrasUi/Input/InputMask";
import { useFetchUserIdentifyByNameCpfRequest } from "../../../sdk/Services/CreateService/request";
import queryClient from "../../../services/react-query";


const CreateServicesScreen = () => {
    const [attendanceGroup, setattendanceGroup] = useState(false)
    const [attendanceNewUser, setattendanceNewUser] = useState(false)
    const [nomeorcpf, setnameorcpf] = useState("")
    const {data} = useFetchUserIdentifyByNameCpfRequest(nomeorcpf)
    const { userIdentifyFamily } = useContext(UserIdentifyContext)
    const { initialValue, service, technician, handleCreateService, CreateUserSchema, userIdentify, result, handleCreateServiceGroup, CreateAttendanceSchema, CreateNewUserSchema, handleCreateServiceNewUser } = useContext(CreateServicesContext);

    return (
        <Container>
            <Column>
                <h1>
                    Novo Atendimentos
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={attendanceNewUser ? { ...initialValue, name: "", cpf: "" } : initialValue} onSubmit={attendanceGroup ? handleCreateServiceGroup : attendanceNewUser ? handleCreateServiceNewUser : handleCreateService} validationSchema={attendanceGroup ? CreateAttendanceSchema : attendanceNewUser ? CreateNewUserSchema : CreateUserSchema}>
                    {({ values, handleChange, handleSubmit, errors, touched }) => {
                        console.log(errors)
                        return <Form
                        >
                            <h3>Dados do atendimento</h3>
                            <Padding />
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown name="task_fk" value={values.task_fk} onChange={handleChange} optionLabel={"name"} options={service} label="Serviço *" />
                                    <Padding />
                                    {errors.task_fk && touched.task_fk ? (
                                        <div style={{ color: "red" }}>{errors.task_fk}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput name="solicitation" value={values.solicitation} onChange={handleChange} label="Solicitação *" />
                                    <Padding />
                                    {errors.solicitation && touched.solicitation ? (
                                        <div style={{ color: "red" }}>{errors.solicitation}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="providence" value={values.providence} onChange={handleChange} label="Providências *" />
                                    <Padding />
                                    {errors.providence && touched.providence ? (
                                        <div style={{ color: "red" }}>{errors.providence}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasDropdown name="result" value={values.result} optionLabel={"name"} options={result} onChange={handleChange} label="Resultado *" />
                                    <Padding />
                                    {errors.result && touched.result ? (
                                        <div style={{ color: "red" }}>{errors.result}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}]}>
                                <CrasCheckbox checked={attendanceGroup} value={attendanceGroup} onChange={() => setattendanceGroup(!attendanceGroup)} label={"Atendimento em grupos"} />
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown optionLabel={"name"} name="technician_fk" onChange={handleChange} value={values.technician_fk} options={technician} label="Técnico Responsável" />
                                    <Padding />
                                    {errors.technician_fk && touched.technician_fk ? (
                                        <div style={{ color: "red" }}>{errors.technician_fk}<Padding /></div>
                                    ) : null}
                                </Column>
                                {!attendanceGroup ? <Column><CrasDropdown onChange={handleChange} filter onFilter={(value) => {setnameorcpf(value); queryClient.refetchQueries("UserIndentifyByNameCpfRequest")}} value={values.user_identify_fk} name={"user_identify_fk"} optionLabel={"name"} options={data} label="Usuário ou Membro Familiar" />
                                        

                                    <Padding />
                                    {errors.user_identify_fk && touched.user_identify_fk ? (
                                        <div style={{ color: "red" }}>{errors.user_identify_fk}<Padding /></div>
                                    ) : null}
                                </Column> : <Column>
                                    <label htmlFor="username" style={{ marginBottom: "8px", marginLeft: "4px" }}>Selecione as familias</label>
                                    <MultiSelect style={{ height: "37px" }} placeholder="Selecione as familias" name="family" value={values.family} onChange={handleChange} options={userIdentifyFamily} optionLabel="representative.name"
                                        filter maxSelectedLabels={3} />
                                    <Padding />
                                    {errors.family && touched.family ? (
                                        <div style={{ color: "red" }}>{errors.family}<Padding /></div>
                                    ) : null}
                                </Column>}
                            </Grid>
                            <Grid checkMockup={[{}]}>
                                <CrasCheckbox checked={attendanceNewUser} value={attendanceNewUser} onChange={() => setattendanceNewUser(!attendanceNewUser)} label={"Usuário não cadastrado"} />
                            </Grid>
                            {attendanceNewUser ? <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="name" value={values.name} onChange={handleChange} label="Nome do Indivíduo *" />
                                    <Padding />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInputMask mask={"999.999.999-99"} label="CPF" name="cpf" onChange={handleChange} value={values.cpf} />
                                    <Padding />
                                    {errors.cpf && touched.cpf ? (
                                        <div style={{ color: "red" }}>{errors.cpf}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid> : null}
                            <Grid checkMockup={[{}]}>
                                <CrasInputArea name={"description"} label={"Descrição"} onChange={handleChange} value={values.description} />
                            </Grid>
                            <Padding />
                            {(errors.description && touched.description) ? (
                                <div style={{ color: "red" }}>{errors.description}<Padding /></div>
                            ) : null}
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Cadastrar" />
                            </Row>
                        </Form>
                    }}
                </Formik>
            </Column>
            <Padding padding="16px" />
        </Container>
    )
}

export default CreateServicesScreen;