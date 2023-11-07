import { Chart } from 'primereact/chart';
import { useContext, useEffect, useState } from "react";
import CrasCard from "../../../CrasUi/Card";
import { Padding } from "../../../CrasUi/styles/styles";
import { DashboardContext } from "../../../context/Dashboard/context";

const Attendencebymonth = () => {

    const { countAttendenceMonth } = useContext(DashboardContext)

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

 

    useEffect(() => {

        const ValueMonth = () => {
            const month = [];
            countAttendenceMonth?.forEach((element) => {
                month.push(element.value);
            });
            return month;
        }
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    label: 'Atendimentos por mês',
                    data: countAttendenceMonth ?  ValueMonth() : [],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [countAttendenceMonth]);

    return (
        <CrasCard title={"Card"}>
            <Padding padding="16px">
                {/* <CrasDropdown options={year} optionLabel={""} label={"Escolha um ano"} /> */}
                {countAttendenceMonth ? <Chart type="line" data={chartData} options={chartOptions} /> : null}
            </Padding>
        </CrasCard>
    )
}

export default Attendencebymonth;