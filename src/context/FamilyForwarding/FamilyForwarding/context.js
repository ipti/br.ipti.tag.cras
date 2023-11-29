import { createContext } from "react";
import { FamilyForwardingState } from "./state";

export const FamilyForwardingContext = createContext({});

const FamilyForwardingProvider = ({children}) => {

    const { FamilyForwarding, CreateForwarding, forwarding} = FamilyForwardingState();
    return (
        <FamilyForwardingContext.Provider value={{ FamilyForwarding, CreateForwarding, forwarding }}>
            {children}
        </FamilyForwardingContext.Provider>
    )
}

export default FamilyForwardingProvider;