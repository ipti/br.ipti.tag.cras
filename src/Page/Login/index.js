import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../CrasUi/Input/Input";
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import TagLogin from "../../assets/images/taglogin.svg";
import { LoginContext } from "../../context/Login/context";
import { Box, Container, TopBar } from "./style";

const LoginPage = () => {

    const { handleLogin, initialValue, LoginSchema } = useContext(LoginContext);

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
                    <p id="subTitleLogin">Entre com as suas credenciais </p>
                    <Formik initialValues={initialValue} validationSchema={LoginSchema} onSubmit={(values) => handleLogin(values)}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) =>
                            <form onSubmit={handleSubmit}>
                                <CrasInput name={"email"} type={"email"} onChange={handleChange} value={values.email} label="Email" placeholder="Digite o seu email" />
                                <Padding />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>{errors.email}</div>
                                ) : null}
                                <Padding />
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