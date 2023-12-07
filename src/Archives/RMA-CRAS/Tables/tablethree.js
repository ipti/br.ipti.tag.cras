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
const TableThree = ({ item }) => {
    return (
        <Table>
            <Line text={"D. Volume de atendimentos coletivos realizados no CRAS durante o mês de referência"} value={"Quantidade"} color={"#92D050"} />
            <Line text={"D.1. Famílias participando regularmente de grupos no âmbito do PAIF"} value={item?.familyGroupsPAIF} />
            <Line text={"D.2. Crianças de 0 a 6 anos em Serviços de Convivência e Fortalecimento de Vínculos"} value={item?.childStrengtheningServices} />
            <Line text={"D.3. Crianças/adolescentes de 7 a 14 anos em Serviços de Convivência e Fortalecimento de Vínculos"} value={item?.childTeenStrengtheningServices} />
            <Line text={"D.4. Adolescentes de 15 a 17 anos em Serviços de Convivência e Fortalecimento de Vínculos"} value={item?.teenStrengtheningServices} />
            <Line text={"D.8. Adultos entre 18 e 59 anos em Serviços de Convivência e Fortalecimento de Vínculos"} value={item?.adultStrengtheningServices} />
            <Line text={"D.5. Idosos em Serviços de Convivência e Fortalecimento de Vínculos para idosos"} value={item?.elderlyStrengtheningServices} />
            <Line text={"D.6. Pessoas que participaram de palestras, oficinas e outras atividades coletivas de caráter não continuado"} value={item?.peopleOtherCollectiveActivities} />
            <Line text={"D.7. Pessoas com deficiência, participando dos Serviços de Convivência ou dos grupos do PAIF"} value={item?.peopleWithDeficiencyStrengtheningServicesOrGroupsPAIF} />
            <Padding />
            <Paragraph className="s7" paddingLeft="8pt">
                <Row>
                    <p style={{ color: "green", fontSize: "12px" }}>
                        * Apesar dos serviços de convivência não estarem mais vinculados a faixas etárias, para facilidade de registro, os usuários devem ser contabilizadosde acordo com a sua idade, independente de
                        estarem, ou não, no mesmo grupo
                    </p>
                </Row>
            </Paragraph>
            <Padding />
        </Table>
    );
};

export default TableThree;
