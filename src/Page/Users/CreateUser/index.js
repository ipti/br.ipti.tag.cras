import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateUserContext } from "../../../context/User/CreateUser/context";
import CrasDropdown from "../../../CrasUi/Dropdown";

const CreateUserScreen = () => {

    const { handleCreateUser, initialValue, CreateUserSchema, role } = useContext(CreateUserContext);

    return (
        <Container>
            <Column>
                <h1>
                    Novo usuário
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={initialValue} onSubmit={(values) => {handleCreateUser(values);}} validationSchema={CreateUserSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) => 
                        <form onSubmit={handleSubmit}>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInput
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        label="Nome *" />
                                    <Padding />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        label="Email *" />
                                    <Padding />
                                    {errors.email && touched.email ? (
                                        <div style={{ color: "red" }}>{errors.email}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasDropdown
                                        optionLabel={"name"}
                                        options={role}
                                        name="role"
                                        value={values.role}
                                        onChange={handleChange}
                                        label="Tipo de usuário *" />
                                    <Padding />
                                    {errors.role && touched.role ? (
                                        <div style={{ color: "red" }}>{errors.role}<Padding /></div>
                                    ) : null}
                                </Column>

                            </Grid>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInput
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        label="Nome de usuário * " />
                                    <Padding />
                                    {errors.username && touched.username ? (
                                        <div style={{ color: "red" }}>{errors.username}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        name="password"
                                        label="Senha *" />
                                    <Padding />
                                    {errors.password && touched.password ? (
                                        <div style={{ color: "red" }}>{errors.password}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput
                                        type="password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        label="Confirmar Senha *" />
                                    <Padding />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div style={{ color: "red" }}>{errors.confirmPassword}<Padding /></div>
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

export default CreateUserScreen;