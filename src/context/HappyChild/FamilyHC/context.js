import { createContext } from "react";
<<<<<<< HEAD
import { FamilyHCState } from "./states";

export const FamilyHCContext = createContext({});

const FamilyHCProvider = ({children}) => {
=======
import { UserIdentifyState } from "./states";

export const FamilyHCContext = createContext({});

const UserIdentifyProvider = ({children}) => {
>>>>>>> 934d3c805e1f7b73812cc389d1c8b50ea2f74c74

    const { error, isLoading, familyHCFamily , handleCreateServiceGroup} = FamilyHCState();
    return (
        <FamilyHCContext.Provider value={{ error, isLoading, familyHCFamily, handleCreateServiceGroup }}>
            {children}
        </FamilyHCContext.Provider>
    )
}

<<<<<<< HEAD
export default FamilyHCProvider;
=======
export default UserIdentifyProvider;
>>>>>>> 934d3c805e1f7b73812cc389d1c8b50ea2f74c74
