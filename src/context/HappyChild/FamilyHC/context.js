import { createContext } from "react";
import { FamilyHCState } from "./states";

export const FamilyHCContext = createContext({});

const FamilyHCProvider = ({children}) => {

    const { error, isLoading, familyHCFamily , handleCreateServiceGroup} = FamilyHCState();
    return (
        <FamilyHCContext.Provider value={{ error, isLoading, familyHCFamily, handleCreateServiceGroup }}>
            {children}
        </FamilyHCContext.Provider>
    )
}

export default FamilyHCProvider;