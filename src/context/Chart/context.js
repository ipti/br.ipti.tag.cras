import { createContext } from "react";
import { ChartsState } from "./state";

export const ChartsContext = createContext({});

const ChartsProvider = ({children}) => {

    const { charts } = ChartsState();
    return (
        <ChartsContext.Provider value={{ charts }}>
            {children}
        </ChartsContext.Provider>
    )
}

export default ChartsProvider;