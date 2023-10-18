import { createContext } from "react";
import { EditBenefitsState } from "./state";

export const EditBenefitsContext = createContext({});

const EditBenefitsProvider = ({ children }) => {

    const { handleEditBenefits, CreateSchema, initialValue, types } = EditBenefitsState();

    return (
        <EditBenefitsContext.Provider value={{ handleEditBenefits, initialValue, CreateSchema, types }}>
            {children}
        </EditBenefitsContext.Provider>
    )
}

export default EditBenefitsProvider;