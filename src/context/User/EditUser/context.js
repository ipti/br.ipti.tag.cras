import { createContext } from "react";
import { EditUser } from "./states";

export const EditUserContext = createContext({});

const EditUserProvider = ({children}) => {

    const { typeUser, handleEditUser, EditUserSchema, initialValue, user } = EditUser();
    return (
        <EditUserContext.Provider value={{ typeUser, handleEditUser, EditUserSchema, initialValue, user }}>
            {children}
        </EditUserContext.Provider>
    )
}

export default EditUserProvider;