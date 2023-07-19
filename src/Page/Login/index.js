import React from "react";
import CrasCard from "../../CrasUi/Card";
import CrasInput from "../../CrasUi/Input/Input";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";
import { Column, Padding } from "../../CrasUi/styles/styles";
import { Box } from "./style";

const LoginPage = () => {
    return (
        <Column style={{height: "100vh"}}>
            <Box>
                <CrasCard title={"Login"}>
                    <CrasInput label="Email" />
                    <Padding />
                    <CrasInput label="Senha" />
                    <Padding padding="16px" />
                    <ButtonPrime label={"Entrar"} />
                </CrasCard>
            </Box>
        </Column>
    )
}

export default LoginPage;