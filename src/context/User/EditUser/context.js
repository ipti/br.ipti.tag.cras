import { createContext } from "react";
import { EditUser } from "./states";

export const EditUserContext = createContext({});

const EditUserProvider = ({children}) => {

    const { typeUser, handleEditUser, EditUserSchema, initialValue, user, toast } = EditUser();
    return (
        <EditUserContext.Provider value={{ typeUser, handleEditUser, EditUserSchema, initialValue, user, toast }}>
            {children}
        </EditUserContext.Provider>
    )
}

export default EditUserProvider;