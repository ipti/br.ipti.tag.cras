import { useNavigate, useParams } from "react-router-dom";

import { Card } from 'primereact/card';
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import styles from "../../../CrasUi/styles";

const FamilyOnePage = () => {

    const history = useNavigate();
    const {id} =useParams()

    return (
        <Container>
            <h1>Familias</h1>
            <Grid checkMockup={[{}, {}]}>
                <Card style={{ width: "auto", cursor: "pointer" }} onClick={() => history(`/edit/familia/${id}`)}>
                    <Row>
                        <Column id="center">
                            <i className="pi pi-user-edit" style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}></i>
                        </Column>
                        <Padding />
                        <Column id="space-between">
                            <h2>Alterar dados da familia</h2>
                            <Padding />
                            <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Alterar dados da Familia, adicionar membros a familia </p>
                        </Column>
                    </Row>
                </Card>
                <Card style={{ width: "auto", cursor: "pointer" }} onClick={() => history(`/encaminhamento/familia/${id}`)}>
                    <Row>
                        <Column id="center">
                            <i className="pi pi-send" style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}></i>
                        </Column>
                        <Padding />
                        <Column id="space-between">
                            <h2>Encaminhamentos da familia</h2>
                            <Padding />
                            <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Visualizar e criar Encaminhamentos para familia</p>
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

export default FamilyOnePage;