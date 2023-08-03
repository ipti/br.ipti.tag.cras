import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { Formik } from "formik";
import { CreateUserContext } from "../../../context/CreateUser/context";
import CrasDropdown from "../../../CrasUi/Dropdown";

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
                            <Row>
                                <div className="col">
                                    <CrasInput
                                        name="nome"
                                        value={values.nome}
                                        onChange={handleChange}
                                        label="Nome" />
                                    {errors.nome && touched.nome ? (
                                        <div style={{ color: "red" }}>{errors.nome}</div>
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
                                    <CrasDropdown
                                        optionLabel={"nome"}
                                        options={typeUser}
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