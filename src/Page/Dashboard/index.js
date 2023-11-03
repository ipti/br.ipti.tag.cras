import { useContext } from "react";
import { DashboardContext } from "../../context/Dashboard/context";
import AttendanceFinishorPending from "./AttendanceFinishorPending";

const DashboardScreen = () => {

    const { countAttendenceMonth } = useContext(DashboardContext)

    console.log(countAttendenceMonth)
    return (
        <>
            <AttendanceFinishorPending />
        </>
    )
}

export default DashboardScreen;