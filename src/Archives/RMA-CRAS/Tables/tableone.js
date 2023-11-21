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
const TableOne = () => {
  return (
    <Table>
      <Line text={"A. Volume de famílias em acompanhamento pelo PAIF"} value={"Total"} color={"#92D050"} />
      <Line text={"A.1. Total de famílias em acompanhamento pelo PAIF"} />
      <Line text={"A.2. Novas famílias inseridas no acompanhamento do PAIF durante o mês de referência"} />
      <Line text={"B. Perfil das novas famílias inseridas em acompanhamento no PAIF"} value={"Total"} color={"#92D050"} />
      <Line text={"B.1. Famílias em situação de extrema pobreza"} />
      <Line text={"B.2. Famílias beneficiárias do Programa Bolsa Família"} />
      <Line text={"B.3. Famílias beneficiárias do Programa Bolsa Família em descumprimento de condicionalidades"} />
      <Line text={"B.4. Famílias com membros beneficiários do BPC"} />
      <Line text={"B.5. Famílias com crianças ou adolescentes em situação de trabalho infantil"} />
      <Line text={"B.6. Famílias com crianças ou adolescentes em Serviço de Acolhimento"} />
      <Padding />
      <Paragraph className="s7" paddingLeft="8pt">
        <Row>
          <p style={{ color: "green", fontSize: "12px" }}>
            <span style={{ color: "red", fontSize: "12px" }}>Atenção!</span> Os itens B1 a B6 identificam apenas alguns perfis de famílias. É normal
            que algumas famílias contadas no item A2 não se enquadrem em nenhuma das
            condições acima, enquanto outras podem se enquadrar simultaneamente
            em mais de uma condição. Portanto, a soma de B1 a B6 não terá, necessariamente,
            o mesmo valor relatado em A2.
          </p>
        </Row>
      </Paragraph>
    <Padding />
    </Table>
  );
};

export default TableOne;
