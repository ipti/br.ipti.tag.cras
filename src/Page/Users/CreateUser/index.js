import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { Formik } from "formik";
import { CreateUserContext } from "../../../context/CreateUser/context";

const CreateUserScreen = () => {

    const { handleCreateUser, initialValue, CreateUserSchema } = useContext(CreateUserContext);

    return (
        <Container>
            <Column>
                <h1>
                    Novo usuário
                </h1>
                <Formik initialValues={initialValue} onSubmit={(values) => handleCreateUser(values)} validationSchema={CreateUserSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) =>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        label="Nome" />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        label="Email" />
                                    {errors.email && touched.email ? (
                                        <div style={{ color: "red" }}>{errors.email}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>

                                <div className="col">
                                    <CrasInput
                                        name="type_user"
                                        value={values.type_user}
                                        onChange={handleChange}
                                        label="Tipo de usuário" />

                                    {errors.type_user && touched.type_user ? (
                                        <div style={{ color: "red" }}>{errors.type_user}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        name="password"
                                        label="Senha" />

                                    {errors.password && touched.password ? (
                                        <div style={{ color: "red" }}>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput
                                        type="password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        label="Confirmar Senha" />

                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                            </Row>
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