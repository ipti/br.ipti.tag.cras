import { useEffect, useState } from "react";
import { useFetchMe } from "../../sdk/Login/request";
import { GetIdAttendance, getUserData, idAttendance, setUserData } from "../../services/localstorage";
import { AttendanceUnityController } from "../../sdk/AttendanceUnity/ListAttendanceUnity/controller";

const AplicationState = () => {

    const year = [
        1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
        2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        2029, 2030,
    ];

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

    useEffect(() => {
        if (!attendancefetch) return;
        setAttendance(attendancefetch);
        if (attendancefetch[0] && !GetIdAttendance() && user?.role === "SECRETARY") {
            idAttendance(attendancefetch[0].id);
        }
    }, [attendancefetch, user]);

    return { user, handleUser, year, attendance };
};

export default AplicationState;
