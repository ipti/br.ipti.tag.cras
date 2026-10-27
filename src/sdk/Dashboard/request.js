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

const CountAttendancebyMonthRequest = async (year) => {
    try {
        return await http.get("/bff/charts/attendance-by-month", {
            params: {
                year,
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

const CountAttendanceFinishedorPendingRequest = async (year) => {
    try {
        return await http.get("/bff/charts/attendance-finished-or-pending", { params: { year, attendance_unity_fk: GetIdAttendance() ? parseInt(GetIdAttendance()) : undefined } }, config).then(response => response.data)
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

export const useFetchAttendanceorPending = (year) => {
    return useQuery(["ChartAttendanceFinishorPneding", year], () => CountAttendanceFinishedorPendingRequest(year));
};

export const useFetchCoundAttendanceMonth = (year) => {
    return useQuery(["ChartCountAttendanceMonth", year], () => CountAttendancebyMonthRequest(year));
};

export const useFetchCoundUniFamily = () => {
    return useQuery("ChartCountUniFamily", () => CountUniFamilyRequest());
};

export const useFetchCoundFamily = () => {
    return useQuery("ChartCountFamily", () => CountFamilyRequest());
};

