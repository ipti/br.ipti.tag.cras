import { createContext } from "react";
import AplicationState from "./state";

export const AplicationContext = createContext({});

const AplicationProvider = ({ children }) => {

    const { user, handleUser } = AplicationState();

    return (
        <AplicationContext.Provider value={{ user, handleUser }}>
            {children}
        </AplicationContext.Provider>
    )
}

export default AplicationProvider;