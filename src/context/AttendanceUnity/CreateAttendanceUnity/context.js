import { createContext } from "react";
import { CreateAttendanceState } from "./state";

export const CreateAttendanceContext = createContext({});

const CreateAttendanceProvider = ({ children }) => {

    const { handleCreateAttendance,  } = CreateAttendanceState();

    return (
        <CreateAttendanceContext.Provider value={{ handleCreateAttendance }}>
            {children}
        </CreateAttendanceContext.Provider>
    )
}

export default CreateAttendanceProvider;