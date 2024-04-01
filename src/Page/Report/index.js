
import { Card } from 'primereact/card';
import { useState } from "react";
import styles from "../../CrasUi/styles";
import ModalDateReport from "./ModalDateReport";
import { Column, Container, Grid, Padding, Row } from '../../CrasUi/styles/styles';

//import MyPDFViewer from '../../Archives/reactPDF';
import FolhaAssinaturas from "../../Archives/SignatureSheet/Registro-FOLHADEASSINATURASDASVISITAS.pdf"

const ReportPage = () => {

    const [visible, setVisible] = useState(false)
    const pdfUrl = FolhaAssinaturas;
    const abrirPDF = () => {
        window.open(pdfUrl);
    };

    return (
        <Container>
            <h1>Relatórios</h1>
            <Grid checkMockup={[{}, {}]}>
                <Card style={{ width: "auto", cursor: "pointer" }} onClick={() => setVisible(!visible)}>
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
                <ModalDateReport visible={visible} setVisible={() => setVisible(!visible)} />
                {/* <Card style={{ width: "auto" }}>    
                    <p onClick={() => history("/rma-cras")}>RMA</p>
                </Card> */}

                <Card style={{ width: "auto", cursor: "pointer" }} onClick={abrirPDF}>
                    <Row>
                        <Column id="center">
                            <i className="pi pi-file" style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}></i>
                        </Column>
                        <Padding />
                        <Column id="space-between">
                            <h2>Registro - FOLHA DE ASSINATURAS DAS VISITAS</h2>
                            <Padding />
                            <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Folha de assinaturas para registro e controle de visitas domiciliares</p>
                        </Column>
                    </Row>
                </Card>
            </Grid>
        </Container>
    )
}

export default ReportPage;