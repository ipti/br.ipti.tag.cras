import { createContext } from "react";
import { UserState } from "./state";

export const UserContext = createContext({});

const UserProvider = ({children}) => {

    const { error, isLoading, user } = UserState();
    return (
        <UserContext.Provider value={{ error, isLoading, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;