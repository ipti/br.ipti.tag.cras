import React, { useContext } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";

const FormFamilyComposition = () => {
    const { backStep, handleFamiliaRefered } = useContext(CreateFamilyReferedContext);

    return (
        <Column>
            <Padding padding="16px" />
                <h1>Clique em Finalizar para cadastrar familia</h1>
            <Padding padding="16px" />
            <Row id="center">
                <ButtonPrime label="Voltar" onClick={backStep} />
                <Padding />
                <ButtonPrime label="Finalizar" onClick={handleFamiliaRefered} />
            </Row>
        </Column>
    )
};

export default FormFamilyComposition;