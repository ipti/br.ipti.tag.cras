import { useEffect, useState } from "react";
import { AttendanceUnityController } from "../../../sdk/AttendanceUnity/ListAttendanceUnity/controller";

export const ListListAttendanceUnityState = () => {

    const { DeleteAttendanceRequestMutation, attendancefetch, isLoading } = AttendanceUnityController();
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        if (attendancefetch) {
            setAttendance(attendancefetch)
        }
    }, [attendancefetch])


    const deleteAttendance = (id) => {
        DeleteAttendanceRequestMutation.mutate(id)
    }

    return {
        attendance, isLoading, deleteAttendance
    }
}