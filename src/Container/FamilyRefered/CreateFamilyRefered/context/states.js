import { useState } from "react"

const CreateFamilyReferedState = () => {
    const [activeStep, setActiveStep] = useState(0)

    const nextStep = () => {
        if(activeStep < 3){
            setActiveStep(activeStep + 1);
        }
    }

    const backStep = () => {
        if(activeStep !== 0){
            setActiveStep(activeStep - 1);
        }
    }

    

    return{
        activeStep, setActiveStep, nextStep, backStep
    }
}

export default CreateFamilyReferedState;