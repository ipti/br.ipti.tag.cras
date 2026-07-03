import { Formik } from "formik";
import { useContext } from "react";
import { MultiSelect } from "primereact/multiselect";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import CrasDropdown from "../../../CrasUi/Dropdown";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { UserFormContext } from "../../../context/User/UserForm/context";
import { ROLE_OPTIONS } from "../../../context/User/UserForm/state";
import { useFetchAllAttendanceUnity } from "../../../sdk/AttendanceUnity/ListAttendanceUnity/request";

const UserFormPage = () => {
    const { isEdit, user, validationSchema, handleSubmit } = useContext(UserFormContext);
    const { data: allUnities = [] } = useFetchAllAttendanceUnity();

    if (isEdit && !user) return null;

    const initialValues = {
        name: user?.name ?? "",
        email: user?.email ?? "",
        username: user?.username ?? "",
        role: user ? ROLE_OPTIONS.find(r => r.id === user.role) ?? "" : "",
        password: "",
        confirmPassword: "",
        attendance_unity_ids: user?.attendance_unities?.map(u => u.attendance_unity_fk) ?? [],
    };

    return (
        <Container>
            <Column>
                <h1>{isEdit ? "Editar usuário" : "Novo usuário"}</h1>
                <Padding padding="16px" />
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    {({ values, handleChange, errors, touched, handleSubmit: formSubmit, setFieldValue }) => (
                        <form onSubmit={formSubmit}>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInput name="name" value={values.name} onChange={handleChange} label="Nome *" />
                                    <Padding />
                                    {errors.name && touched.name && (
                                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                    )}
                                </Column>
                                <Column>
                                    <CrasInput name="email" value={values.email} onChange={handleChange} label="Email *" />
                                    <Padding />
                                    {errors.email && touched.email && (
                                        <div style={{ color: "red" }}>{errors.email}<Padding /></div>
                                    )}
                                </Column>
                                <Column>
                                    <CrasDropdown
                                        optionLabel="name"
                                        options={ROLE_OPTIONS}
                                        name="role"
                                        value={values.role}
                                        onChange={handleChange}
                                        label="Tipo de usuário *"
                                    />
                                    <Padding />
                                    {errors.role && touched.role && (
                                        <div style={{ color: "red" }}>{errors.role}<Padding /></div>
                                    )}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInput name="username" value={values.username} onChange={handleChange} label="Nome de usuário *" />
                                    <Padding />
                                    {errors.username && touched.username && (
                                        <div style={{ color: "red" }}>{errors.username}<Padding /></div>
                                    )}
                                </Column>
                                <Column>
                                    <CrasInput
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        label={isEdit ? "Nova senha (opcional)" : "Senha *"}
                                    />
                                    <Padding />
                                    {errors.password && touched.password && (
                                        <div style={{ color: "red" }}>{errors.password}<Padding /></div>
                                    )}
                                </Column>
                                <Column>
                                    <CrasInput
                                        type="password"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        label="Confirmar senha"
                                    />
                                    <Padding />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <div style={{ color: "red" }}>{errors.confirmPassword}<Padding /></div>
                                    )}
                                </Column>
                            </Grid>
                            {values.role?.id === "TECHNICIAN" && (
                                <Grid checkMockup={[{}]}>
                                    <Column>
                                        <label>Unidades de Atendimento</label>
                                        <Padding />
                                        <MultiSelect
                                            value={values.attendance_unity_ids}
                                            options={allUnities}
                                            optionLabel="name"
                                            optionValue="id"
                                            onChange={(e) => setFieldValue("attendance_unity_ids", e.value)}
                                            placeholder="Selecione as unidades"
                                            display="chip"
                                            style={{ width: "100%" }}
                                            filter
                                        />
                                        <Padding />
                                    </Column>
                                </Grid>
                            )}
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label={isEdit ? "Salvar" : "Cadastrar"} />
                            </Row>
                        </form>
                    )}
                </Formik>
            </Column>
        </Container>
    );
};

export default UserFormPage;
