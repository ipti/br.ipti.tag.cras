import { createContext } from "react";
import { DashboardState } from "./state";

export const DashboardContext = createContext({});

const DashboardProvider = ({ children }) => {

    const { countUniFamily, countAttendenceMonth, attendanceFinishorPending, CountFamily } = DashboardState();

    return (
        <DashboardContext.Provider value={{ countUniFamily, countAttendenceMonth, attendanceFinishorPending, CountFamily }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider;