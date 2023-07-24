import { createContext } from "react";
import { CreateUserState } from "./state";

export const CreateUserContext = createContext({});

const CreateUserProvider = ({children}) => {

    const { initialValue, CreateUserSchema, handleCreateUser } = CreateUserState();
    return (
        <CreateUserContext.Provider value={{ handleCreateUser, initialValue, CreateUserSchema }}>
            {children}
        </CreateUserContext.Provider>
    )
}

export default CreateUserProvider;