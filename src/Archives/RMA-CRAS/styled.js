import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  overflow-y: auto;

  p{
    font-size: medium;
  }
`;

export const LineBottom = styled.div`
 
  width: 100%;
  height: 1px; /* Ajuste a altura conforme necessário */
  background-color: #000; /* Cor da linha */
`;

export const StyledTableCell = styled.td`
  width: ${(props) => props.width || 'auto'};
  border-top-style: solid;
  border-top-width: 2pt;
  border-top-color: #006600;
  border-left-style: solid;
  border-left-width: 2pt;
  border-left-color: #006600;
  border-bottom-style: solid;
  border-bottom-width: 2pt;
  border-bottom-color: #006600;
  border-right-style: solid;
  border-right-width: 2pt;
  border-right-color: #006600;
  background-color: ${(props) => props.bgColor || 'transparent'};
`;

export const StyledParagraph = styled.p`
  text-indent: 0pt;
  text-align: left;
  padding-top: ${(props) => props.paddingTop || '0pt'};
  padding-left: ${(props) => props.paddingLeft || '0pt'};
  line-height: ${(props) => props.lineHeight || 'auto'};
`;
