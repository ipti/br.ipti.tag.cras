import { createContext } from "react";
import { EditUser } from "./states";

export const EditUserContext = createContext({});

const EditUserProvider = ({children}) => {

    const { handleEditUser, EditUserSchema, initialValue, user, toast, role } = EditUser();
    return (
        <EditUserContext.Provider value={{ handleEditUser, EditUserSchema, initialValue, user, toast, role }}>
            {children}
        </EditUserContext.Provider>
    )
}

export default EditUserProvider;