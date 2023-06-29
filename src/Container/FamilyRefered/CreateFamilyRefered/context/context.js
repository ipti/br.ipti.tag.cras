import { createContext } from "react";

export const CreateFamilyReferedContext = createContext({});

const CreateFamilyProvider = ({children}) => {
    return(
        <CreateFamilyReferedContext.Provider>
            {children}
        </CreateFamilyReferedContext.Provider>
    )
}

export default CreateFamilyProvider;