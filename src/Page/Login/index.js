import React, { useContext } from "react";
import CrasCard from "../../CrasUi/Card";
import CrasInput from "../../CrasUi/Input/Input";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";
import { Column, Padding } from "../../CrasUi/styles/styles";
import { Box } from "./style";
import { LoginContext } from "../../context/Login/context";
import { Formik } from "formik";

const LoginPage = () => {

    const { handleLogin, initialValue, LoginSchema } = useContext(LoginContext);

    return (
        <Column style={{ height: "100vh" }}>
            <Box>
                <CrasCard title={"Login"}>
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
                                <CrasInput name={"email"} onChange={handleChange} value={values.email} label="Email" placeholder="Digite o seu email" />
                                <Padding />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>{errors.email}</div>
                                ) : null}
                                <Padding />
                                <CrasInput name={"password"} onChange={handleChange} value={values.password} label="Senha" placeholder="Digite sua senha" />
                                <Padding />
                                {errors.password && touched.password ? (
                                    <div style={{ color: "red" }}>{errors.password}</div>
                                ) : null}
                                <Padding padding="16px" />
                                <ButtonPrime type="submit" label={"Entrar"} />
                            </form>
                        }
                    </Formik>
                </CrasCard>
            </Box>
        </Column>
    )
}

export default LoginPage;