import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import { Column, Container, Padding, Row } from '../../CrasUi/styles/styles';
import { LineBottom, StyledTable, StyledTableCell } from './styled';
import SeuComponenteReact from './Tables';
import jsPDF from 'jspdf';


const MonthlyForm = () => {
    return (
        <Container >
            <StyledTable cellspacing="0">
                <tr style={{ height: '16pt' }}>
                    <StyledTableCell width="401pt" bgColor="#92D050">
                        <Row id='space-between'>
                            <p>
                                FORMULÁRIO DE REGISTRO MENSAL DE ATENDIMENTOS DO CRAS
                            </p>
                            <Row>
                                <p>
                                    MÊS: </p> <div style={{ width: "80px", background: "white", alignItems: "center" }}>{20}</div>/20<div style={{ width: "30px", background: "white", alignItems: "center" }}>{20}</div>
                                <Padding />
                            </Row>
                        </Row>
                    </StyledTableCell>
                </tr>
                <Row id="space-between">
                    <Row style={{ width: "100%" }}>
                        <p>
                            Nome da unidade:
                        </p>
                        <Column style={{ width: "70%" }}>
                            <p>{99}</p>
                            <LineBottom />
                        </Column>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <p>Nº da unidade:</p>
                        <Column style={{ width: "80%" }}>
                            <p>{99}</p>
                            <LineBottom />
                        </Column>
                    </Row>
                </Row>
                <Row>
                    <p>
                        Endereço:
                    </p>
                    <Column style={{ width: "100%" }}>
                        <p>{99}</p>
                        <LineBottom />
                    </Column>

                </Row>
                <Row>
                    <p>
                        Municipio:
                    </p>
                    <Column style={{ width: "100%" }}>
                        <p>{99}</p>
                        <LineBottom />
                    </Column>

                </Row>
                <Padding padding="8px" />
                <tr style={{ height: '16pt' }}>
                    <StyledTableCell width="401pt" bgColor="#006600">
                        <Row id='space-between'>
                            <p style={{ color: "white" }}>
                                Bloco I - Famílias em acompanhamento pelo PAIF
                            </p>
                        </Row>
                    </StyledTableCell>
                </tr>
                <Padding padding="8px" />
                <SeuComponenteReact />
                <SeuComponenteReact />
                <SeuComponenteReact />

            </StyledTable>
        </Container>
    );
};




const RmaCras = () => {

    const contentRef = useRef(null);


    const generatePDF = () => {
        if (!contentRef.current) return;

        const elementToCapture = contentRef.current;

        html2canvas(elementToCapture).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save(`teste.pdf`);
        });
    };

    return (
        <Padding padding="32px">
            <div ref={contentRef}>
                <Padding padding="8px">
                    <MonthlyForm />
                </Padding>
            </div>
            <Padding padding="32px 16px">
                <button style={{ padding: "8px", cursor: "pointer" }} onClick={generatePDF}><Row><h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Gerar PDF</h3></Row></button>
            </Padding>
        </Padding>
    );
};

export default RmaCras;
