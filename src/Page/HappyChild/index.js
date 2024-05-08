
import { Card } from 'primereact/card';
import { useState } from "react";
import styles from "../../CrasUi/styles";
//import ModalDateHappyChild from "./ModalDateHappyChild";
import { Column, Container, Grid, Padding, Row } from '../../CrasUi/styles/styles';

//import MyPDFViewer from '../../Archives/reactPDF';
import FolhaAssinaturas from "../../Archives/SignatureSheet/Registro-FOLHADEASSINATURASDASVISITAS.pdf"

const HappyChildPage = () => {

    const [visible, setVisible] = useState(false)
    const pdfUrl = FolhaAssinaturas;
    const abrirPDF = () => {
        window.open(pdfUrl);
    };

    return (
        <Container>
            <h1>Criança Feliz</h1>
            <Grid checkMockup={[{}, {}]}>

                <Card style={{ width: "auto", cursor: "pointer" }} onClick={abrirPDF}>
                    <Row>
                        <Column id="center">
                            <i className="pi pi-file" style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}></i>
                        </Column>
                        <Padding />
                        <Column id="space-between">
                            <h2>PLANO DE VISITA</h2>
                            <Padding />
                            <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Plano de Visitas - Programa Criança Feliz</p> 
                        </Column>
                    </Row>
                </Card>

                <Card style={{ width: "auto", cursor: "pointer" }} onClick={abrirPDF}>
                    <Row>
                        <Column id="center">
                            <i className="pi pi-file" style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}></i>
                        </Column>
                        <Padding />
                        <Column id="space-between">
                            <h2>CONTROLE DE VISITA</h2>
                            <Padding />
                            <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Controle de Visitas - Programa Criança Feliz</p>
                        </Column>
                    </Row>
                </Card>
               
            </Grid>
        </Container>
    )
}

export default HappyChildPage;