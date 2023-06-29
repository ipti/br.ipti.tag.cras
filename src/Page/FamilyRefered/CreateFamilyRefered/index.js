import React, { useState } from "react";
import { Container } from "../../../CrasUi/styles/styles";
import Steps from "../../../CrasUi/Steps";
import FormInfoPerson from "./FormInfoPerson";

const CreateFamilyReferedScreen = () => {
    const [activeStep, setActiveStep] = useState(0)

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
            <Steps activeIndex={activeStep} items={items} setActiveIndex={setActiveStep} />
            {activeStep === 0 ? <FormInfoPerson /> : null}
        </Container>
    )
}

export default CreateFamilyReferedScreen;