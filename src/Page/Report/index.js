import { useNavigate } from "react-router-dom";
import { Column, Container, Grid, Padding, Row } from "../../CrasUi/styles/styles";

import { Card } from 'primereact/card';
import styles from "../../CrasUi/styles";

const ReportPage = () => {

    const history = useNavigate();


    return (
        <Container>
            <h1>Relatórios</h1>
            <Grid checkMockup={[{}, {}]}>
                <Card style={{ width: "auto", cursor: "pointer" }} onClick={() => history("/rma-cras")}>
                    <Row>
                        <Column id="center">
                            <i className="pi pi-file" style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}></i>
                        </Column>
                        <Padding />
                        <Column id="space-between">
                            <h2>Registro Mensal de Atendimento do CRAS</h2>
                            <Padding />
                            <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Serviços ofertados e o volume de atendimentos nos Centros de Referência da Assistência SociaL</p>
                        </Column>
                    </Row>
                </Card>
                {/* <Card style={{ width: "auto" }}>    
                    <p onClick={() => history("/rma-cras")}>RMA</p>
                </Card> */}
            </Grid>
        </Container>
    )
}

export default ReportPage;