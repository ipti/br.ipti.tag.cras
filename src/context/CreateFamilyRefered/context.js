import { createContext } from "react";
import CreateFamilyReferedState from "./states";

export const CreateFamilyReferedContext = createContext({});

const CreateFamilyProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis } = CreateFamilyReferedState();
    return (
        <CreateFamilyReferedContext.Provider value={{ activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered,escolaridadeNoBrasil, dataValues, estadosCivis }}>
            {children}
        </CreateFamilyReferedContext.Provider>
    )
}

export default CreateFamilyProvider;