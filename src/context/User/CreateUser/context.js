import { createContext } from "react";
import { CreateUserState } from "./state";

export const CreateUserContext = createContext({});

const CreateUserProvider = ({children}) => {

    const { initialValue, CreateUserSchema, handleCreateUser, typeUser } = CreateUserState();
    return (
        <CreateUserContext.Provider value={{ handleCreateUser, initialValue, CreateUserSchema, typeUser }}>
            {children}
        </CreateUserContext.Provider>
    )
}

export default CreateUserProvider;