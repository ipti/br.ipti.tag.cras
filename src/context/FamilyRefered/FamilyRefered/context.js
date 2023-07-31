import { createContext } from "react";
import { UserIdentifyState } from "./states";

export const UserIdentifyContext = createContext({});

const UserIdentifyProvider = ({children}) => {

    const { error, isLoading, userIdentify } = UserIdentifyState();
    return (
        <UserIdentifyContext.Provider value={{ error, isLoading, userIdentify }}>
            {children}
        </UserIdentifyContext.Provider>
    )
}

export default UserIdentifyProvider;