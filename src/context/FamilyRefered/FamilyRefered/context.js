import { createContext } from "react";
import { UserIdentifyState } from "./states";

export const UserIdentifyContext = createContext({});

const UserIdentifyProvider = ({children}) => {

    const { error, isLoading, userIdentifyFamily , handleCreateServiceGroup} = UserIdentifyState();
    return (
        <UserIdentifyContext.Provider value={{ error, isLoading, userIdentifyFamily, handleCreateServiceGroup }}>
            {children}
        </UserIdentifyContext.Provider>
    )
}

export default UserIdentifyProvider;