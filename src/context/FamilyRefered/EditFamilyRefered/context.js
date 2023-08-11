import { createContext } from "react";
import EditFamilyReferedState from "./states";

export const EditFamilyReferedContext = createContext({});

const EditFamilyProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep, estadosDoBrasil, sexo,escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, family, handleCreateFamilyMember, parentesco, member, addMember, setAddMember,deleteMember, toast, open, setOpen } = EditFamilyReferedState();
    return (
        <EditFamilyReferedContext.Provider value={{ family, activeStep, addMember, setAddMember, sexo,setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis, handleCreateFamilyMember, parentesco, member , deleteMember, toast, open, setOpen}}>
            {children}
        </EditFamilyReferedContext.Provider>
    )
}

export default EditFamilyProvider;