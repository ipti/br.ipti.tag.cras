import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { Formik } from "formik";
import CrasDropdown from "../../../CrasUi/Dropdown";
import { CreateUserContext } from "../../../context/User/CreateUser/context";

const CreateUserScreen = () => {

    const { handleCreateUser, initialValue, CreateUserSchema, typeUser } = useContext(CreateUserContext);

    return (
        <Container>
            <Column>
                <h1>
                    Novo usuário
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={initialValue} onSubmit={(values) => handleCreateUser(values)} validationSchema={CreateUserSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) =>
                        <form onSubmit={handleSubmit}>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput
                                        name="nome"
                                        value={values.nome}
                                        onChange={handleChange}
                                        label="Nome" />
                                    <Padding />
                                    {errors.nome && touched.nome ? (
                                        <div style={{ color: "red" }}>{errors.nome}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        label="Email" />
                                    <Padding />
                                    {errors.email && touched.email ? (
                                        <div style={{ color: "red" }}>{errors.email}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasDropdown
                                        optionLabel={"nome"}
                                        options={typeUser}
                                        name="type_user"
                                        value={values.type_user}
                                        onChange={handleChange}
                                        label="Tipo de usuário" />
                                    <Padding />
                                    {errors.type_user && touched.type_user ? (
                                        <div style={{ color: "red" }}>{errors.type_user}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        name="password"
                                        label="Senha" />
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
                                        label="Confirmar Senha" />
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