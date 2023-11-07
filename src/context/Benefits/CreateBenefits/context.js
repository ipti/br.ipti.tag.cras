import { createContext } from "react";
import { CreateBenefitsState } from "./state";

export const CreateBenefitsContext = createContext({});

const CreateBenefitsProvider = ({ children }) => {

    const { handleCreateBenefits, CreateSchema, initialValue, types } = CreateBenefitsState();

    return (
        <CreateBenefitsContext.Provider value={{ handleCreateBenefits, initialValue, CreateSchema, types }}>
            {children}
        </CreateBenefitsContext.Provider>
    )
}

export default CreateBenefitsProvider;