import { useContext } from "react"
import CrasCard from "../../../CrasUi/Card"
import { Padding } from "../../../CrasUi/styles/styles"
import { DashboardContext } from "../../../context/Dashboard/context"

const CountActiveFamily = () => {

    const { CountFamily } = useContext(DashboardContext)


    return (
        <CrasCard>
            <Padding padding="16px">
                <h2>Familias ativas</h2>
                <h1>{CountFamily}</h1>
            </Padding>
        </CrasCard>
    )
}

export default CountActiveFamily