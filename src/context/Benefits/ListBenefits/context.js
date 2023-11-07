import { createContext } from "react";
import { ListBenefitsState } from "./state";

export const BenefitsContext = createContext({});

const BenefitsProvider = ({ children }) => {

    const { benefits, isLoading, error, deleteBenefits } = ListBenefitsState();

    return (
        <BenefitsContext.Provider value={{ benefits, isLoading, error, deleteBenefits }}>
            {children}
        </BenefitsContext.Provider>
    )
}

export default BenefitsProvider;