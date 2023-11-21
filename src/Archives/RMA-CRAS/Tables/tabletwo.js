// Importe as bibliotecas necessárias
import React from 'react';
import styled from 'styled-components';
import Line from './Line';
import { Padding, Row } from '../../../CrasUi/styles/styles';

// Estilize os componentes usando Styled Components
const Table = styled.table`
  border-collapse: collapse;
`;


const Paragraph = styled.p`
  padding-top: ${(props) => props.paddingTop || '0'};
  padding-left: ${(props) => props.paddingLeft || '0'};
  padding-right: ${(props) => props.paddingRight || '0'};
  text-indent: 0;
  text-align: ${(props) => props.textAlign || 'left'};
`;


// Componente principal
const TableTwo = () => {
    return (
        <Table>
            <Line text={"C. Volume de atendimentos particularizados realizados no CRAS no mês de referência"} value={"Quantidade"} color={"#92D050"} />
            <Line text={"C.1. Total de atendimentos particularizados realizados no mês de referência"} />
            <Line text={"C.2. Famílias encaminhadas para inclusão no Cadastro Único"} />
            <Line text={"C.3. Famílias encaminhadas para atualização cadastral no Cadastro Único"} />
            <Line text={"C.4. Indivíduos encaminhados para acesso ao BPC"} />
            <Line text={"C.5. Famílias encaminhadas para o CREAS"} />
            <Line text={"C.6. Visitas domiciliares realizadas"} />
            <Line text={"C.7. Total de auxílios-natalidade concedidos/entregues durante o mês de referência"} />
            <Line text={"C.8. Total de auxílios-funeral concedidos/entregues durante o mês de referência"} />
            <Line text={"C.9 Outros benefícios eventuais concedidos/entregues durante o mês de referência"} />
            <Padding />
            <Paragraph className="s7" paddingLeft="8pt">
                <Row>
                    <p style={{ color: "green", fontSize: "12px" }}>
                        <span style={{ color: "red", fontSize: "12px" }}>Atenção!</span> Nos campos C1 a C6 devem ser contabilizadas todas as famílias/indivíduos, independente de estarem, ou não, em acompanhamento sistemático do PAIF. Nos campos C7, C8 e C9,
                        considere os auxílios e os benefícios eventuais concedidos e /ou entregues no CRAS. Caso o CRAS não conceda nem entregue auxílios ou benefícios-eventuais marque 0 (zero) nos respectivos
                        campos.

                    </p>
                </Row>
            </Paragraph>
            <Padding />
        </Table>
    );
};

export default TableTwo;
