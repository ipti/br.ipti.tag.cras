import { createContext } from "react";
import { EditForwardingState } from "./state";

export const EditForwardingContext = createContext({});

const EditForwardingProvider = ({ children }) => {

    const { handleEditForwarding, status } = EditForwardingState();

    return (
        <EditForwardingContext.Provider value={{ handleEditForwarding, status }}>
            {children}
        </EditForwardingContext.Provider>
    )
}

export default EditForwardingProvider;