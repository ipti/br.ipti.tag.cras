import { createContext } from "react";
import CreateFamilyReferedState from "./states";

export const CreateFamilyReferedContext = createContext({});

const CreateFamilyProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, benefitsfetch, isLoading, error, benefits, setbenefits } = CreateFamilyReferedState();
    return (
        <CreateFamilyReferedContext.Provider value={{ activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis, benefitsfetch, isLoading, error, benefits, setbenefits }}>
            {children}
        </CreateFamilyReferedContext.Provider>
    )
}

export default CreateFamilyProvider;