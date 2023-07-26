import { useState } from "react"

const CreateFamilyReferedState = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [dataValues, setDataValues] = useState({})



    const nextStep = (values) => {
        console.log(values)
        let data = Object.assign(dataValues, values);
        console.log(data)
        setDataValues(data);

        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
        }
    }

    const backStep = (values) => {

        let data = Object.assign(dataValues, values);

        setDataValues(data);

        if (activeStep !== 0) {
            setActiveStep(activeStep - 1);
        }
    }


    console.log(dataValues)
    return {
        activeStep, setActiveStep, nextStep, backStep
    }
}

export default CreateFamilyReferedState;