import { createContext } from "react";
import AplicationState from "./state";

export const AplicationContext = createContext({});

const AplicationProvider = ({ children }) => {

    const { user, handleUser, year } = AplicationState();

    return (
        <AplicationContext.Provider value={{ user, handleUser, year }}>
            {children}
        </AplicationContext.Provider>
    )
}

export default AplicationProvider;