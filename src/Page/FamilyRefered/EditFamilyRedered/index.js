import React, { useContext } from "react";
import Steps from "../../../CrasUi/Steps";
import { Container } from "../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../context/FamilyRefered/EditFamilyRefered/context";
import FormAddress from "./FormAddress";
import FormFamilyComposition from "./FormFamilyComposition";
import FormFinances from "./FormFinances";
import FormInfoPerson from "./FormInfoPerson";

const EditFamilyReferedScreen = () => {

    const { setActiveStep, activeStep } = useContext(EditFamilyReferedContext);


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

export default EditFamilyReferedScreen;