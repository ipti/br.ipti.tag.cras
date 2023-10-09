import { Formik } from "formik";
import { Toast } from "primereact/toast";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { EditUserContext } from "../../../context/User/EditUser/context";

const EditUserScreen = () => {

    const { handleEditUser, EditUserSchema, initialValue, user, toast } = useContext(EditUserContext);


    return (
        <Container>
            <Column>
                <h1>
                    Editar usuário
                </h1>
                <Padding padding="16px" />
                {user ?
                    <Formik initialValues={initialValue} onSubmit={(values) => handleEditUser(values)} validationSchema={EditUserSchema}>
                        {({ values, handleChange, errors, touched, handleSubmit }) =>
                            <form onSubmit={handleSubmit}>
                                <Grid checkMockup={[{}, {}]}>
                                    <Column>
                                        <CrasInput
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            label="Nome" />
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
                                            label="Email" />
                                        <Padding />
                                        {errors.email && touched.email ? (
                                            <div style={{ color: "red" }}>{errors.email}<Padding /></div>
                                        ) : null}
                                    </Column>
                                </Grid>
                                <Grid checkMockup={[{}, {}, {}]}>
                                    <Column>
                                        <CrasInput
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            label="Nome de usuário" />
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
                                    <ButtonPrime type="submit" label="Salvar" />
                                </Row>
                            </form>
                        }
                    </Formik>
                    : null}
            </Column>
            <Toast ref={toast} />

        </Container>
    )
}

export default EditUserScreen;