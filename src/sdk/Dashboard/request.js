import { useQuery } from "react-query";
import http from "../../services/axios";
import { GetIdAttendance, getToken, logout } from "../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const CountUniFamilyRequest = async () => {
    try {
        return await http.get("/bff/charts/count-uni-family", { params: { attendance_unity_fk: parseInt(GetIdAttendance()) } }, config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401) {
                    logout();
                    window.location.reload()
                }
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}

const CountFamilyRequest = async () => {
    try {
        return await http.get("/bff/charts/count-family", { params: { attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined } }, config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401) {
                    logout();
                    window.location.reload()
                }
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}

const CountAttendancebyMonthRequest = async () => {
    try {
        return await http.get("/bff/charts/attendance-by-month", {
            params: {
                year: 2023,
                attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined
            }
        }, config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401) {
                    logout();
                    window.location.reload()
                }
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}

const CountAttendanceFinishedorPendingRequest = async () => {


    try {
        return await http.get("/bff/charts/attendance-finished-or-pending", { params: { year: 2023, attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined } }, config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401) {
                    logout();
                    window.location.reload()
                }
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}

export const useFetchAttendanceorPending = () => {
    return useQuery("ChartAttendanceFinishorPneding", () => CountAttendanceFinishedorPendingRequest());
};

export const useFetchCoundAttendanceMonth = () => {
    return useQuery("ChartCountAttendanceMonth", () => CountAttendancebyMonthRequest());
};

export const useFetchCoundUniFamily = () => {
    return useQuery("ChartCountUniFamily", () => CountUniFamilyRequest());
};

export const useFetchCoundFamily = () => {
    return useQuery("ChartCountFamily", () => CountFamilyRequest());
};

