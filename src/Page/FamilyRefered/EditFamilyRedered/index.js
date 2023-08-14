import React, { useContext } from "react";
import Steps from "../../../CrasUi/Steps";
import { Container, Padding } from "../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../context/FamilyRefered/EditFamilyRefered/context";
import FormAddress from "./FormAddress";
import FormFamilyComposition from "./FormFamilyComposition";
import FormFinances from "./FormFinances";
import FormInfoPerson from "./FormInfoPerson";
import { Toast } from "primereact/toast";


const EditFamilyReferedScreen = () => {

    const { setActiveStep, activeStep, toast } = useContext(EditFamilyReferedContext);


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

    const larguraTela = window.innerWidth;


    return (
        <Container>
            <h1>
                Criar Familia Referenciada
            </h1>
            {larguraTela > 700 ?
                <>
                    <Padding padding="32px" />
                    <Steps activeIndex={activeStep} items={items} setActiveIndex={setActiveStep} readOnly={true} />
                    <Padding padding="32px" />
                </>
                : null
            }
         
            {activeStep === 0 ?
                <FormInfoPerson /> : activeStep === 1 ?
                    <FormAddress /> : activeStep === 2 ?
                        <FormFinances /> : activeStep === 3 ?
                            <FormFamilyComposition /> : null}
            <Padding padding="16px" />
            <Toast ref={toast} />

        </Container>
    )
}

export default EditFamilyReferedScreen;