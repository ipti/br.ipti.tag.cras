import React, { useContext } from "react";
import Steps from "../../../CrasUi/Steps";
import { Container, Padding } from "../../../CrasUi/styles/styles";
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
        // {
        //     label: 'Endereço',
        //     command: (event) => {
        //         setActiveStep(1)
        //     }
        // },
        {
            label: 'Situação Financeira e Previdenciária',
            command: (event) => {
                setActiveStep(1)
            }
        },
        {
            label: 'Composição Familiar',
            command: (event) => {
                setActiveStep(2)
            }
        }
    ];

    return (
        <Container>
            <h1>
                Criar Familia Referenciada
            </h1>
            <Padding padding="32px" />
            <Steps activeIndex={activeStep} items={items} setActiveIndex={setActiveStep} readOnly={true} />
            <Padding padding="32px" />
            {activeStep === 0 ?
                <FormInfoPerson /> : activeStep === 1 ?
                    // <FormAddress /> : activeStep === 2 ?
                        <FormFinances /> : activeStep === 2 ?
                            <FormFamilyComposition /> : null}
                            <Padding padding="16px"/>
        </Container>
    )
}

export default EditFamilyReferedScreen;