import { createContext } from "react";
import CreateFamilyReferedState from "./states";

export const CreateFamilyReferedContext = createContext({});

const CreateFamilyProvider = ({ children }) => {

    const { activeStep, setActiveStep, backStep, nextStep } = CreateFamilyReferedState();
    return (
        <CreateFamilyReferedContext.Provider value={{ activeStep, setActiveStep, backStep, nextStep }}>
            {children}
        </CreateFamilyReferedContext.Provider>
    )
}

export default CreateFamilyProvider;