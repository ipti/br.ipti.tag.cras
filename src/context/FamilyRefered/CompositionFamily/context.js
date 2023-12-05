import { createContext } from "react";
import { CompositionFamily } from "./state";

export const CompositionFamilyContext = createContext({});

const CompositionFamilyProvider = ({ children }) => {

    const { handleEditFamilyMember, HandleCreateUserIdentify, deleteFamilyMember, family, escolaridadeNoBrasil, estadosCivis, estadosDoBrasil, parentesco, open, setOpen, addMember, setAddMember } = CompositionFamily();
    return (
        <CompositionFamilyContext.Provider value={{ handleEditFamilyMember,HandleCreateUserIdentify, deleteFamilyMember, family, escolaridadeNoBrasil, estadosCivis, estadosDoBrasil, parentesco, open, setOpen, addMember, setAddMember }}>
            {children}
        </CompositionFamilyContext.Provider>
    )
}

export default CompositionFamilyProvider;