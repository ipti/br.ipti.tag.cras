import { createContext } from "react";
import { ListBenefitsState } from "./state";

export const BenefitsContext = createContext({});

const BenefitsProvider = ({ children }) => {

    const { benefits, isLoading, error } = ListBenefitsState();

    return (
        <BenefitsContext.Provider value={{ benefits, isLoading, error }}>
            {children}
        </BenefitsContext.Provider>
    )
}

export default BenefitsProvider;