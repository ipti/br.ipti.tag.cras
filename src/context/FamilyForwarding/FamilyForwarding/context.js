import { createContext } from "react";
import { FamilyForwardingState } from "./state";

export const FamilyForwardingContext = createContext({});

const FamilyForwardingProvider = ({children}) => {

    const { FamilyForwarding, CreateForwarding, forwarding, familyOne} = FamilyForwardingState();
    return (
        <FamilyForwardingContext.Provider value={{ FamilyForwarding, CreateForwarding, forwarding, familyOne }}>
            {children}
        </FamilyForwardingContext.Provider>
    )
}

export default FamilyForwardingProvider;