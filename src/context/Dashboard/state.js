import { useEffect, useState } from "react"
import { useFetchAttendanceorPending, useFetchCoundAttendance, useFetchCoundAttendanceMonth } from "../../sdk/Dashboard/request"

export const DashboardState = () => {

    const [countAttendence, setcountAttendence] = useState()
    const [countAttendenceMonth, setCountAttendanceMonth] = useState()
    const [attendanceFinishorPending, setattendanceFinishorPending] = useState()
    const { data: CountAttendanceRequest } = useFetchCoundAttendance()
    const { data: attendanceFinishorPendingRequest } = useFetchAttendanceorPending()

    const { data: CountAttendanceMonthRequest } = useFetchCoundAttendanceMonth()

    useEffect(() => {
        if (CountAttendanceRequest) {
            setcountAttendence(CountAttendanceRequest)
        }
        if (attendanceFinishorPendingRequest) {
            console.log("ajsdnjndsja")
            console.log(attendanceFinishorPendingRequest)
            setattendanceFinishorPending(attendanceFinishorPendingRequest)
        }
        if (CountAttendanceMonthRequest) {
            setCountAttendanceMonth(CountAttendanceMonthRequest)
        }

    }, [CountAttendanceRequest, attendanceFinishorPendingRequest, CountAttendanceMonthRequest])

    console.log(attendanceFinishorPendingRequest)


    return {
        countAttendence, countAttendenceMonth, attendanceFinishorPending
    }
}