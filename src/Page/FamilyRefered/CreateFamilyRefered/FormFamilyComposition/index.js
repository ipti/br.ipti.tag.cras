import React, { useContext } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";

const FormFamilyComposition = () => {
    const { backStep, handleFamiliaRefered } = useContext(CreateFamilyReferedContext);

    return (
        <Column>
            <Padding padding="16px" />
            <Row id="center">
                <h2>Pressione 'Finalizar' para concluir o cadastro da família ou retorne para revisar os dados.</h2>
            </Row>
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