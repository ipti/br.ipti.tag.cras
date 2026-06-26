import { createContext } from "react";
import { UserFormState } from "./state";

export const UserFormContext = createContext({});

const UserFormProvider = ({ children }) => {
    const state = UserFormState();

    return (
        <UserFormContext.Provider value={state}>
            {children}
        </UserFormContext.Provider>
    );
};

export default UserFormProvider;
