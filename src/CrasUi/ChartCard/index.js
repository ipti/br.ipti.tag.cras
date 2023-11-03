import { Chart } from "primereact/chart"
import CrasCard from "../Card"

const ChartCardCras = ({ title, chartData, chartOptions }) => {
    return (
        <CrasCard>
            <h3>
                {title}
            </h3>
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-20rem" />
        </CrasCard>
    )
}

export default ChartCardCras