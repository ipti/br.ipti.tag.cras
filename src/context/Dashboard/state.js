import { useContext, useEffect, useState } from "react";
import { AplicationContext } from "../../context/Aplication/context";
import { useFetchAttendanceorPending, useFetchCoundAttendanceMonth, useFetchCoundFamily, useFetchCoundUniFamily } from "../../sdk/Dashboard/request";

export const DashboardState = () => {

    const { selectedYear } = useContext(AplicationContext);

    const [countUniFamily, setcountUniFamily] = useState();
    const [countAttendenceMonth, setCountAttendanceMonth] = useState();
    const [attendanceFinishorPending, setattendanceFinishorPending] = useState();
    const [CountFamily, setCountFamily] = useState()
    const { data: CountUniFamilyRequest } = useFetchCoundUniFamily();
    const { data: attendanceFinishorPendingRequest } = useFetchAttendanceorPending(selectedYear);
    const { data: CountAttendanceMonthRequest } = useFetchCoundAttendanceMonth(selectedYear);
    const { data: CountFamilyRequest } = useFetchCoundFamily()

    useEffect(() => {
        if (typeof CountUniFamilyRequest === "number") {
            setcountUniFamily(CountUniFamilyRequest)
        }
        if (typeof CountFamilyRequest === "number") {
            setCountFamily(CountFamilyRequest)
        }
        if (attendanceFinishorPendingRequest) {
            setattendanceFinishorPending(attendanceFinishorPendingRequest)
        }
        if (CountAttendanceMonthRequest) {
            setCountAttendanceMonth(CountAttendanceMonthRequest)
        }

    }, [CountUniFamilyRequest, attendanceFinishorPendingRequest, CountAttendanceMonthRequest, CountFamilyRequest])


    return {
        countUniFamily, countAttendenceMonth, attendanceFinishorPending, CountFamily
    }
}