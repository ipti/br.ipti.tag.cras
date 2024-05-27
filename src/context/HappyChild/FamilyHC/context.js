import { createContext } from "react";
import { UserIdentifyState } from "./states";

export const FamilyHCContext = createContext({});

const UserIdentifyProvider = ({children}) => {

    const { error, isLoading, familyHCFamily , handleCreateServiceGroup} = FamilyHCState();
    return (
        <FamilyHCContext.Provider value={{ error, isLoading, familyHCFamily, handleCreateServiceGroup }}>
            {children}
        </FamilyHCContext.Provider>
    )
}

export default UserIdentifyProvider;