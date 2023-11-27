import { useQuery } from "react-query";
import http from "../../services/axios";
import { getToken, logout } from "../../services/localstorage";


const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
};

const MonthRmaRequest = async (month, year, attendance_unity) => {
    return await http.get("/bff/reports-cras", {
        params: {
            month: month, year: year, attendance_unity: attendance_unity
        }
    }, config).then(response => response.data)
        .catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                logout()
                window.location.reload()
            }
            throw err;
        });;
}


export const useFetchMonthRma = (month, year, attendance_unity) => {
    return useQuery("MonthRma", () => MonthRmaRequest(month, year, attendance_unity));
};
