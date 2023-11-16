import { createContext } from "react";
import { EditAttendanceUnityState } from "./state";

export const EditAttendanceUnityContext = createContext({});

const EditAttendanceUnityProvider = ({ children }) => {

    const {oneAttendance, HandleEditAttendance} = EditAttendanceUnityState()

    return (
        <EditAttendanceUnityContext.Provider value={{ oneAttendance, HandleEditAttendance }}>
            {children}
        </EditAttendanceUnityContext.Provider>
    )
}

export default EditAttendanceUnityProvider;