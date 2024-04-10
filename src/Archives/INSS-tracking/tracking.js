import { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import Document from "./archives";

const INNStracking = () => {

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

            const currentDate = new Date(); // Formato para colocar a data atual no nome do doc
            const formattedDate = currentDate.toLocaleDateString().replace(/\//g, '-');
            const formattedTime = currentDate.toLocaleTimeString().replace(/:/g, '-');
            const formattedDateTime = `${formattedDate}_${formattedTime}`;

            pdf.save(`Acompanhamento_INSS_${formattedDateTime}.pdf`); //Modelo: "Acompanhamento_INSS_10-04-2024_12-34-56.pdf"
        });
    };

    return (
        <div style={{ overflowY: "scroll", position: "relative", height: "100vh" }}>
            <Padding padding={"32px"}>
                <span style={{ color: "red", fontSize: "12px" }}>Recomendado gerar em computadores</span>
                <Padding padding="32px 16px">
                    <button style={{ padding: "8px", cursor: "pointer" }} onClick={generatePDF}><Row><Column id='center'><i className='pi pi-print' /></Column> <Padding padding="2px" /><h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Gerar PDF</h3></Row></button>
                </Padding>
                <div ref={contentRef} style={{width: "23cm", height: "29.7cm"}}>
                    <Padding padding="2px">
                        <Document  />
                    </Padding>
                </div>
            </Padding>
        </div>
    );
};

export default INNStracking;
