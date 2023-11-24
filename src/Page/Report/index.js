import { useNavigate } from "react-router-dom";
import { Container } from "../../CrasUi/styles/styles";

import { Card } from 'primereact/card';

const ReportPage = () => {

    const history = useNavigate();

    return (
        <Container>
            <h1>Relatorios</h1>
            <Card style={{width: "auto"}}>
                <p onClick={() => history("/rma-cras")}>RMA</p>
            </Card>
        </Container>
    )
}

export default ReportPage;