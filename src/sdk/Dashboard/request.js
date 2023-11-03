import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken, logout } from "../../services/localstorage";

const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const CountAttendanceRequest = async () => {
    try {
        return await http.get("/charts/count-attendance", config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 403) {
                    logout();
                    window.location.reload()
                }
                alert(err.message)
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}

const CountAttendancebyMonthRequest = async () => {
    try {
        return await http.get("/charts/attendance-by-month", {
            params: {
                year: 2023
            }
        }, config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 403) {
                    logout();
                    window.location.reload()
                }
                alert(err.message)
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}

const CountAttendanceFinishedorPendingRequest = async () => {
    try {
        return await http.get("/charts/attendance-finished-or-pending", {
            params: {
                year: 2023
            }
        }, config).then(response => response.data)
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 403) {
                    logout();
                    window.location.reload()
                }
                alert(err.message)
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

export const useFetchCoundAttendance = () => {
    return useQuery("ChartCountAttendance", () => CountAttendanceRequest());
};