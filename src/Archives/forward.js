import React from 'react';
import styled from 'styled-components';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Times New Roman';
    font-size: 11pt;
    margin: 0;
    padding: 0;
  }
`;

// Estilos dos componentes
const HeaderContainer = styled.div`
  text-align: center;
  border-bottom: 1.5pt solid #000000;
  padding-bottom: 1pt;
`;

const Title = styled.p`
  margin-top: 6.9pt;
  margin-right: 90.75pt;
  margin-left: 88.9pt;
  text-align: center;
  font-size: 14pt;
  font-weight: bold;
`;

const BodyText = styled.p`
  margin: 0;
  font-size: 11pt;
`;

const EncaminhamentoContainer = styled.div`
  margin-left: 18pt;
`;

const SubTitle = styled.h1`
  margin-left: 18pt;
`;

const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
// Componente React
const Document = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <p>PREFEITURA MUNICIPAL DE {unityAttendance?.edcenso_city}</p>
        <p>SECRETARIA MUNICIPAL DE ASSISTÊNCIA SOCIAL</p>
        {unityAttendance?.type === 'CRAS' ? (
            <p>CENTRO DE REFERÊNCIA DE ASSISTÊNCIA SOCIAL – {unityAttendance?.name}</p>
        ) : (
            <p>CENTRO DE REFERÊNCIA ESPECIALIZADO DE ASSISTÊNCIA SOCIAL – {unityAttendance?.name}</p>
        )}
      </HeaderContainer>
      <Title>ENCAMINHAMENTO</Title>
      <BodyText>
        O Centro de Referência Especializado da Assistência Social – {unityAttendance?.name}, no uso de suas atribuições, prestador de serviço público na área da Política de Assistência Social encaminha o(a) usuário(a):
      </BodyText>
      <BodyText>Nome:</BodyText> <p> {userIdentify?.name} </p>
      <BodyText>CPF:</BodyText> <p> {userIdentify?.cpf} </p>
      <BodyText>Endereço:</BodyText> <p> {userIdentify?.address} </p>
      <SubTitle>SETOR/ ÓRGÃO A SER ENCAMINHADO:</SubTitle> <p>  </p> 
      <BodyText>Motivo:</BodyText>
       
      <BodyText>III. BREVE RELATO DA SITUAÇÃO:</BodyText>
      <BodyText>{unityAttendance?.address}, __ de ________ de ____</BodyText>

      <BodyText>__________________________________________________</BodyText>
      <BodyText>{technician?.name}</BodyText>
      <BodyText>{technician?.type}  – 19/IS- {technician?.professional_register}</BodyText>

      <BodyText>__________________________________________________</BodyText>
      <BodyText>{technician?.name}</BodyText>
      <BodyText>{technician?.type} – CRESS/SE- {technician?.professional_register}</BodyText>
    </>
  );
};

export default Document;
