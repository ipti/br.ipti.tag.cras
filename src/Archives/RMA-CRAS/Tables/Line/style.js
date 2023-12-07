import styled from 'styled-components';

export const TableRow = styled.tr`
  height: ${(props) => props.height || '100%'};
`;

export const TableCell = styled.td`
  width: ${(props) => props.width || '100%'};
  border-top: 1pt solid;
  border-left: 1pt solid;
  border-bottom: 1pt solid;
  border-right: 1pt solid;
  background-color: ${(props) => props.bgColor || 'transparent'};
`;

export const Paragraph = styled.p`
  padding-top: ${(props) => props.paddingTop || '0'};
  padding-left: ${(props) => props.paddingLeft || '0'};
  padding-right: ${(props) => props.paddingRight || '0'};
  text-indent: 0;
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const EmptyParagraph = styled.p`
  text-indent: 0;
  text-align: left;
  margin: 0;
`;