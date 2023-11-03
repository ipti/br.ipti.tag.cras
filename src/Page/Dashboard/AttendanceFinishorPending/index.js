import { Chart } from "primereact/chart";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../../context/Dashboard/context";
import CrasCard from "../../../CrasUi/Card";
import { Padding } from "../../../CrasUi/styles/styles";

const AttendanceFinishorPending = () => {
    const { attendanceFinishorPending } = useContext(DashboardContext)

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    console.log(attendanceFinishorPending)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Finalizado', 'Pendente'],
            datasets: [
                {
                    data: [attendanceFinishorPending?.finished, attendanceFinishorPending?.pending],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [attendanceFinishorPending]);

    return (
        <CrasCard title={"Title"}>
            <Padding>

                qwdjsadkansdjklsadjsdakasdlsadjkl
            </Padding>
        </CrasCard>
    )

}

export default AttendanceFinishorPending