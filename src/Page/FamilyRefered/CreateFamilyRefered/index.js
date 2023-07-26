import React, { useContext } from "react";
import Steps from "../../../CrasUi/Steps";
import { Container } from "../../../CrasUi/styles/styles";
import FormInfoPerson from "./FormInfoPerson";
import FormAddress from "./FormAddress";
import FormFinances from "./FormFinances";
import FormFamilyComposition from "./FormFamilyComposition";
import { CreateFamilyReferedContext } from "../../../context/CreateFamilyRefered/context";

const CreateFamilyReferedScreen = () => {

    const { setActiveStep, activeStep } = useContext(CreateFamilyReferedContext);

    const items = [
        {
            label: 'Informações Pessoais',
            command: (event) => {
                setActiveStep(0)
            }
        },
        {
            label: 'Endereço',
            command: (event) => {
                setActiveStep(1)
            }
        },
        {
            label: 'Situação Financeira e Previdenciária',
            command: (event) => {
                setActiveStep(2)
            }
        },
        {
            label: 'Composição Familiar',
            command: (event) => {
                setActiveStep(3)
            }
        }
    ];

    return (
        <Container>
            <h1>
                Criar Familia Referenciada
            </h1>
            <Steps activeIndex={activeStep} items={items} setActiveIndex={setActiveStep} />
            {activeStep === 0 ?
                <FormInfoPerson /> : activeStep === 1 ?
                    <FormAddress /> : activeStep === 2 ?
                        <FormFinances /> : activeStep === 3 ?
                            <FormFamilyComposition /> : null}
        </Container>
    )
}

export default CreateFamilyReferedScreen;