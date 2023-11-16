import { createContext } from "react";
import { ListListAttendanceUnityState } from "./state";

export const AttendanceUnityContext = createContext({});

const AttendanceUnityProvider = ({ children }) => {

    const { attendance, deleteAttendance, isLoading } = ListListAttendanceUnityState();


    return (
        <AttendanceUnityContext.Provider value={{ attendance, isLoading, deleteAttendance }}>
            {children}
        </AttendanceUnityContext.Provider>
    )
}

export default AttendanceUnityProvider;