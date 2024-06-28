import { createContext } from "react";
import CreateFamilyHappyChildState from "./states";

export const CreateFamilyHappyChildContext = createContext({});

const CreateFamilyHappyChildProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, benefitsfetch, isLoading, error, benefits, setbenefits } = CreateFamilyHappyChildState();
    return (
        <CreateFamilyHappyChildContext.Provider value={{ activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis, benefitsfetch, isLoading, error, benefits, setbenefits }}>
            {children}
        </CreateFamilyHappyChildContext.Provider>
    )
}

export default CreateFamilyHappyChildProvider;