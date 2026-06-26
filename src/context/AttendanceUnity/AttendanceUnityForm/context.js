import { createContext } from "react";
import { AttendanceUnityFormState } from "./state";

export const AttendanceUnityFormContext = createContext({});

const AttendanceUnityFormProvider = ({ children }) => {
    const state = AttendanceUnityFormState();

    return (
        <AttendanceUnityFormContext.Provider value={state}>
            {children}
        </AttendanceUnityFormContext.Provider>
    );
};

export default AttendanceUnityFormProvider;
