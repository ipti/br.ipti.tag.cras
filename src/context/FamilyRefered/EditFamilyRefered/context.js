import { createContext } from "react";
import EditFamilyReferedState from "./states";

export const EditFamilyReferedContext = createContext({});

const EditFamilyProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, sexo,escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, family, handleCreateFamilyMember, parentesco, member } = EditFamilyReferedState();
    return (
        <EditFamilyReferedContext.Provider value={{ family, activeStep, sexo,setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis, handleCreateFamilyMember, parentesco, member }}>
            {children}
        </EditFamilyReferedContext.Provider>
    )
}

export default EditFamilyProvider;