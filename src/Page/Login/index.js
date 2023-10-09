import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../CrasUi/Input/Input";
import CrasMessage from "../../CrasUi/Message";
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import TagLogin from "../../assets/images/taglogin.svg";
import { LoginContext } from "../../context/Login/context";
import { Box, Container, TopBar } from "./style";

const LoginPage = () => {

    const { handleLogin, initialValue, LoginSchema, error } = useContext(LoginContext);


    return (
        <Container>
            <Column style={{ height: "100%" }}>
                <Row>
                    <TopBar style={{ backgroundColor: "#667DF4" }} />
                    <TopBar style={{ backgroundColor: "#F45A5A" }} />
                    <TopBar style={{ backgroundColor: "#66D654" }} />
                    <TopBar style={{ backgroundColor: "#EADA48" }} />
                </Row>
                <img style={{
                    margin: "20px",
                    position: "absolute"
                }} src={TagLogin} alt=""></img>
                <Box>
                    <p id="titleLogin">Cras Online </p>
                    <Row id="center">
                        <Padding>
                            {error ? <CrasMessage severity="error" text={error} /> : null}
                        </Padding>
                    </Row>
                    <Formik initialValues={initialValue} validationSchema={LoginSchema} onSubmit={(values) => handleLogin(values)}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                        }) =>
                            <form onSubmit={handleSubmit}>
                                <CrasInput name={"username"} onChange={handleChange} value={values.username} label="Nome do usuário" placeholder="Digite o nome de usuário" />
                                <Padding />
                                {errors.username && touched.username ? (
                                    <div style={{ color: "red" }}>{errors.username}</div>
                                ) : null}
                                <Padding />
                                {/* <Password style={{width: "100%"}} value={values.password} name="password"  onChange={handleChange} toggleMask /> */}
                                <CrasInput type={"password"} name={"password"} onChange={handleChange} value={values.password} label="Senha" placeholder="Digite sua senha" />
                                <Padding />
                                {errors.password && touched.password ? (
                                    <div style={{ color: "red" }}>{errors.password}</div>
                                ) : null}
                                <Padding padding="16px" />
                                <ButtonPrime type="submit" label={"Entrar"} />
                            </form>
                        }
                    </Formik>
                </Box>
            </Column>
        </Container>
    )
}

export default LoginPage;