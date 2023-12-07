import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef } from 'react';
import { Column, Padding, Row } from '../../CrasUi/styles/styles';
import SeuComponenteReact from './Tables/tableone';
import TableThree from './Tables/tablethree';
import TableTwo from './Tables/tabletwo';
import { LineBottom, StyledTable, StyledTableCell } from './styled';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
import { useFetchMonthRma } from '../../sdk/RMA-CRAS/request';


const MonthlyForm = () => {

    const date = new Date(Date.now())


    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
    const { data: rma } = useFetchMonthRma(date?.getMonth() + 1, date?.getFullYear(), GetIdAttendance())


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
                                    MÊS:  </p><Padding /><Row id='center' style={{ width: "80px", background: "white" }}>{month[date.getMonth()]}</Row><Padding /> / <Padding /><Row id='center' style={{ width: "40px", background: "white" }}>{date.getFullYear()}</Row>
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
                            <Row>
                                <Padding />
                                <p> {unityAttendance?.name}</p>
                            </Row>
                            <LineBottom />
                        </Column>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <p>Nº da unidade:</p>
                        <Column style={{ width: "80%" }}>
                            <Row >
                                <Padding />
                                <p>{unityAttendance?.unity_number}</p>
                            </Row>
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
                        <Row id='start'>
                            <Padding />
                            <p>{unityAttendance?.address?.address}</p>
                        </Row>
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
                            <Row>
                                <Padding />
                                <p>{unityAttendance?.edcenso_city?.name}</p>
                            </Row>
                            <LineBottom />
                        </Column>
                    </Row>
                    <Row style={{ width: "10%" }}>
                        <p>UF: </p>
                        <Column style={{ width: "100%" }}>
                            <Row id='center'>
                                <p>{unityAttendance?.edcenso_city?.edcenso_uf?.acronym}</p>
                            </Row>
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
                <SeuComponenteReact item={rma?.bloco1} />
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
                <TableTwo item={rma?.bloco2} />
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
                <TableThree item={rma?.bloco3} />
            </StyledTable>
        </div>
    );
};




const RmaCras = () => {

    const contentRef = useRef(null);

    const date = new Date(Date.now())

    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const generatePDF = () => {
        if (!contentRef.current) return;

        const elementToCapture = contentRef.current;
        

        html2canvas(elementToCapture).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save(`RMA-${month[date.getMonth()]}.pdf`);
        });
    };

    return (
        <div style={{ overflowY: "scroll", position: "relative", height: "100vh" }}>
            <Padding padding={"32px"}>
                <span style={{ color: "red", fontSize: "12px" }}>Recomendado gerar em computadores</span>
                <Padding padding="32px 16px">
                    <button style={{ padding: "8px", cursor: "pointer" }} onClick={generatePDF}><Row><Column id='center'><i className='pi pi-print' /></Column> <Padding padding="2px" /><h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Gerar PDF</h3></Row></button>
                </Padding>
                <div ref={contentRef}>
                    <Padding padding="32px">
                        <MonthlyForm />
                    </Padding>
                </div>
            </Padding>
        </div>
    );
};

export default RmaCras;
