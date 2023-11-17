import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { StyledParagraph, StyledTable, StyledTableCell } from './styled';
import { Padding } from '../../CrasUi/styles/styles';

const MonthlyForm = () => {
    return (
        <StyledTable cellspacing="0">
            <tr style={{ height: '16pt' }}>
                <StyledTableCell width="401pt" bgColor="#92D050">
                    <StyledParagraph
                        className="s1"
                        paddingTop="1pt"
                        paddingLeft="2pt"
                        lineHeight="13pt"
                    >
                        FORMULÁRIO DE REGISTRO MENSAL DE ATENDIMENTOS DO CRAS MÊS:
                    </StyledParagraph>
                </StyledTableCell>
                {/* Repeat the pattern for other cells */}
            </tr>
        </StyledTable>
    );
};




const RmaCras = () => {
    const htmlRef = useRef(null);

    const handleCapture = () => {
        html2canvas(htmlRef.current).then(canvas => {
            // Faça algo com o canvas (exibir, salvar, etc.)
        });
    };

    return (
        <Padding padding="32px">
            <MonthlyForm />
            <button onClick={handleCapture}>Capturar como Canvas</button>
        </Padding>
    );
};

export default RmaCras;
