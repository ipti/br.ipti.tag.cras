import { useContext } from "react"
import { DashboardContext } from "../../../context/Dashboard/context"
import CrasCard from "../../../CrasUi/Card"
import { Padding } from "../../../CrasUi/styles/styles"

const CountUniFamily = () => {

    const { countUniFamily } = useContext(DashboardContext)

    return (
        <CrasCard>
            <Padding padding="16px">
                <h2>Unifamiliares</h2>
                <h1>{countUniFamily}</h1>
            </Padding>
        </CrasCard>
    )
}

export default CountUniFamily