import { createContext } from "react";
import EditFamilyReferedState from "./states";

export const EditFamilyReferedContext = createContext({});

const EditFamilyProvider = ({ children }) => {

    const { deleteFamilyBenefits, HandleCreateUserIdentify, benefitsfetch, activeStep, handleCreateFamilyBenefits, setActiveStep, backStep, nextStep, estadosDoBrasil, sexo, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, family, handleCreateFamilyMember, parentesco, member, addMember, setAddMember, deleteMember, toast, open, setOpen, deleteFamilyMember, handleEditFamilyMember } = EditFamilyReferedState();
    return (
        <EditFamilyReferedContext.Provider value={{ deleteFamilyBenefits, HandleCreateUserIdentify, benefitsfetch, handleCreateFamilyBenefits, family, activeStep, addMember, setAddMember, sexo, setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis, handleCreateFamilyMember, parentesco, member, deleteMember, toast, open, setOpen, deleteFamilyMember, handleEditFamilyMember }}>
            {children}
        </EditFamilyReferedContext.Provider>
    )
}

export default EditFamilyProvider;