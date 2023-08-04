import { createContext } from "react";
import { UserState } from "./state";

export const UserContext = createContext({});

const UserProvider = ({children}) => {

    const { error, isLoading, user, deleteUser } = UserState();
    return (
        <UserContext.Provider value={{ error, isLoading, user, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;