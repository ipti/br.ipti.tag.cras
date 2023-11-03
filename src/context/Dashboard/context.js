import { createContext } from "react";
import { DashboardState } from "./state";

export const DashboardContext = createContext({});

const DashboardProvider = ({ children }) => {

    const { countAttendence, countAttendenceMonth, attendanceFinishorPending } = DashboardState();

    return (
        <DashboardContext.Provider value={{ countAttendence, countAttendenceMonth, attendanceFinishorPending }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider;