import CreateAttendanceUnityPage from "../../../Page/AttendanceUnity/CreateAttendanceUnity";
import CreateAttendanceProvider from "../../../context/AttendanceUnity/CreateAttendanceUnity/context";

const CreateAttendanceUnity = () => {
    return (
        <CreateAttendanceProvider>
            <CreateAttendanceUnityPage />
        </CreateAttendanceProvider>
    )
}

export default CreateAttendanceUnity;