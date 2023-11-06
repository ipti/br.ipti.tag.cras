import { Container, Grid, Padding } from "../../CrasUi/styles/styles";
import AttendanceFinishorPending from "./AttendanceFinishorPending";
import CountActiveFamily from "./CountActiveFamily";
import Attendencebymonth from "./CountAttendence";
import CountUniFamily from "./CountUniFamily";

const DashboardScreen = () => {

    return (
        <Container>
            <Grid checkMockup={[{}, {}, {}]}>
                <CountActiveFamily />
                <CountUniFamily />
                <AttendanceFinishorPending />
            </Grid>
            <Padding padding="16px">
                <Attendencebymonth />
            </Padding>
        </Container>
    )
}

export default DashboardScreen;