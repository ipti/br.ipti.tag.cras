import DashboardScreen from "../../Page/Dashboard";
import DashboardProvider from "../../context/Dashboard/context"

const Dashboard = () => {
    return (
        <DashboardProvider>
            <DashboardScreen />
        </DashboardProvider>
    )
}

export default Dashboard;