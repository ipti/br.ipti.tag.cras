import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef } from 'react';
import { Column, Padding, Row } from '../../CrasUi/styles/styles';
import SeuComponenteReact from './Tables/tableone';
import TableThree from './Tables/tablethree';
import TableTwo from './Tables/tabletwo';
import { LineBottom, StyledTable, StyledTableCell } from './styled';


const MonthlyForm = () => {
    return (
        <div style={{ overflowY: "auto" }}>
            <StyledTable cellspacing="0">
                <tr style={{ height: '24pt' }}>
                    <StyledTableCell width="100%" bgColor="#92D050">
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                            <Row>
                                <p>
                                    FORMULÁRIO DE REGISTRO MENSAL DE ATENDIMENTOS DO CRAS
                                </p>
                            </Row>
                            <Row id='end'>
                                <p>
                                    MÊS:  </p><Padding /><Row id='center' style={{ width: "80px", background: "white" }}>Dezembro</Row>/20<Row id='center' style={{ width: "30px", background: "white" }}>{20}</Row>
                                <Padding />
                            </Row>
                        </div>
                    </StyledTableCell>
                </tr>
                <Padding />
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
                <Padding />
                <Row>
                    <p>
                        Endereço:
                    </p>
                    <Column style={{ width: "100%" }}>
                        <p>{99}</p>
                        <LineBottom />
                    </Column>
                </Row>
                <Padding />
                <Row id='space-between'>
                    <Row style={{ width: "100%" }}>
                        <p>
                            Municipio:
                        </p>
                        <Column style={{ width: "100%" }}>
                            <p>{22}</p>
                            <LineBottom />
                        </Column>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <p>UF: </p>
                        <Column style={{ width: "100%" }}>
                            <p>{222}</p>
                            <LineBottom />
                        </Column>
                    </Row>
                </Row>
                <Padding padding="8px" />
                <tr style={{ height: '24pt' }}>
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
                <tr style={{ height: '24pt' }}>
                    <StyledTableCell width="401pt" bgColor="#006600">
                        <Row id='space-between'>
                            <p style={{ color: "white" }}>
                                Bloco 2 - Atendimentos particularizados realizados no CRAS
                            </p>
                        </Row>
                    </StyledTableCell>
                </tr>
                <Padding padding="8px" />
                <TableTwo />
                <tr style={{ height: '24pt' }}>
                    <StyledTableCell width="401pt" bgColor="#006600">
                        <Row id='space-between'>
                            <p style={{ color: "white" }}>
                                Bloco 3 - Atendimentos coletivos realizados no CRAS
                            </p>
                        </Row>
                    </StyledTableCell>
                </tr>
                <Padding padding="8px" />
                <TableThree />
            </StyledTable>
        </div>
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
        <div style={{overflowY: "scroll", position: "relative", height: "100vh"}}>
            <Padding padding={"32px"}>
                <Padding padding="32px 16px">
                    <button style={{ padding: "8px", cursor: "pointer" }} onClick={generatePDF}><Row><h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Gerar PDF</h3></Row></button>
                </Padding>
                <div ref={contentRef}>
                    <Padding padding="8px">
                        <MonthlyForm />
                    </Padding>
                </div>
            </Padding>
        </div>
    );
};

export default RmaCras;
