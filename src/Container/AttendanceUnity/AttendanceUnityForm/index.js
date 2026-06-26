import AttendanceUnityFormProvider from "../../../context/AttendanceUnity/AttendanceUnityForm/context";
import AttendanceUnityFormPage from "../../../Page/AttendanceUnity/AttendanceUnityForm";

const AttendanceUnityForm = () => (
    <AttendanceUnityFormProvider>
        <AttendanceUnityFormPage />
    </AttendanceUnityFormProvider>
);

export default AttendanceUnityForm;
