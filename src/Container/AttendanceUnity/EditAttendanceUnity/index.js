import EditAttendanceUnityPage from "../../../Page/AttendanceUnity/EditAttendanceUnity"
import EditAttendanceUnityProvider from "../../../context/AttendanceUnity/EditAttendanceUnity/context"

const EditAttendanceUnity = () => {

    return(
        <EditAttendanceUnityProvider>
            <EditAttendanceUnityPage />
        </EditAttendanceUnityProvider>
    )
    
}

export default EditAttendanceUnity