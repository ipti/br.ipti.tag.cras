import { createContext } from "react";
import EditFamilyReferedState from "./states";

export const EditFamilyReferedContext = createContext({});

const EditFamilyProvider = ({ children }) => {

    const { deleteFamilyBenefits, deleteFamily, HandleCreateUserIdentify, handleFamilyIsActive, benefitsfetch, activeStep, handleCreateFamilyBenefits, setActiveStep, backStep, nextStep, estadosDoBrasil, sexo, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, family, handleCreateFamilyMember, parentesco, member, deleteMember, toast, deleteFamilyMember, handleEditFamilyMember } = EditFamilyReferedState();
    return (
        <EditFamilyReferedContext.Provider value={{ handleFamilyIsActive, deleteFamily, deleteFamilyBenefits, HandleCreateUserIdentify, benefitsfetch, handleCreateFamilyBenefits, family, activeStep, sexo, setActiveStep, backStep, nextStep, estadosDoBrasil, handleFamiliaRefered, escolaridadeNoBrasil, dataValues, estadosCivis, handleCreateFamilyMember, parentesco, member, deleteMember, toast, deleteFamilyMember, handleEditFamilyMember }}>
            {children}
        </EditFamilyReferedContext.Provider>
    )
}

export default EditFamilyProvider;