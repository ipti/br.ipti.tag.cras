import { useEffect, useState } from "react";
import { useFetchMe } from "../../sdk/Login/request";
import { GetIdAttendance, getUserData, idAttendance, setUserData } from "../../services/localstorage";
import { AttendanceUnityController } from "../../sdk/AttendanceUnity/ListAttendanceUnity/controller";

const AplicationState = () => {

    const currentYear = new Date().getFullYear();
    const year = Array.from({ length: currentYear - 1998 }, (_, i) => 1999 + i);

    // Inicializa do localStorage — disponível imediatamente, sem flash
    const [user, setUser] = useState(() => getUserData());

    // GET /auth/me: lê do token JWT no servidor, sem query no banco
    // staleTime 5min — react-query reutiliza o cache, não refaz a cada mount
    const { data: meResponse } = useFetchMe();

    useEffect(() => {
        const fresh = meResponse?.data;
        if (!fresh) return;
        setUser(fresh);
        setUserData(fresh);
    }, [meResponse]);

    const handleUser = (userData) => {
        setUser(userData);
        setUserData(userData);
    };

    const { attendancefetch } = AttendanceUnityController();
    const [attendance, setAttendance] = useState([]);
    const [noUnities, setNoUnities] = useState(false);

    useEffect(() => {
        if (attendancefetch === undefined) return;
        setAttendance(attendancefetch);
        setNoUnities(attendancefetch.length === 0);

        if (!GetIdAttendance()) {
            if (user?.role === 'TECHNICIAN') {
                const firstId = user?.attendance_unity_ids?.[0];
                if (firstId) idAttendance(firstId);
            } else if (attendancefetch.length > 0) {
                idAttendance(attendancefetch[0].id);
            }
        }
    }, [attendancefetch, user]);

    return { user, handleUser, year, attendance, noUnities };
};

export default AplicationState;
