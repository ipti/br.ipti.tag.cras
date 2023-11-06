import { Chart } from "primereact/chart";
import { useContext, useEffect, useState } from "react";
import CrasCard from "../../../CrasUi/Card";
import { Row } from "../../../CrasUi/styles/styles";
import { DashboardContext } from "../../../context/Dashboard/context";

const AttendanceFinishorPending = () => {
    const { attendanceFinishorPending } = useContext(DashboardContext)
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Finalizado', 'Pendente'],
            datasets: [
                {
                    label: 'Atendimentos',
                    data: [attendanceFinishorPending?.finished, attendanceFinishorPending?.pending],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [attendanceFinishorPending?.finished, attendanceFinishorPending?.pending]);


    return (
        <CrasCard>
            <Row id="center">
                <Chart type="bar" data={chartData} options={chartOptions} />
            </Row>
        </CrasCard>
    )

}

export default AttendanceFinishorPending