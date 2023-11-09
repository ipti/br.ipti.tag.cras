import ListAttendanceUnity from "../../../Page/AttendanceUnity/ListAttendanceUnity"
import AttendanceUnityProvider from "../../../context/AttendanceUnity/ListAttendanceUnity/context"

const AttendanceUnity = () => {
    return(
        <AttendanceUnityProvider>
            <ListAttendanceUnity />
        </AttendanceUnityProvider>
    )
}

export default AttendanceUnity