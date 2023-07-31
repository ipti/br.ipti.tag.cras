import { createContext } from "react";
import EditFamilyReferedState from "./states";

export const EditFamilyReferedContext = createContext({});

const EditFamilyProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, family } = EditFamilyReferedState();
    return (
        <EditFamilyReferedContext.Provider value={{ family, activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis }}>
            {children}
        </EditFamilyReferedContext.Provider>
    )
}

export default EditFamilyProvider;