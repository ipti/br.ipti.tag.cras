import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
import { formatarData } from '../../services/functions';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';

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


// Componente React
const Document = ({ visibleEdit }) => {
  const { id, idUser } = useParams()

  const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
  const { data: familyReferedId } = useFetchFamilyReferedId(id)

  const name_user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))
  const CPF_user_identify = familyReferedId?.user_identify?.find((cpf) => cpf.id === parseInt(idUser))

  console.log(familyReferedId)
  console.log(name_user_identify)
  console.log(CPF_user_identify)

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <p>PREFEITURA MUNICIPAL DE {unityAttendance?.edcenso_city.name}</p>
        <p>SECRETARIA MUNICIPAL DE ASSISTÊNCIA SOCIAL</p>
        {unityAttendance?.type === 'CRAS' ? (
          <p>CENTRO DE REFERÊNCIA DE ASSISTÊNCIA SOCIAL – {unityAttendance?.name} </p>
        ) : (
          <p>CENTRO DE REFERÊNCIA ESPECIALIZADO DE ASSISTÊNCIA SOCIAL – {unityAttendance?.name}</p>
        )}
      </HeaderContainer>
      <Title>ENCAMINHAMENTO</Title>
      <SubTitle>I. IDENTIFICAÇÃO:</SubTitle>
      <BodyText>
        O Centro de Referência Especializado da Assistência Social – {unityAttendance?.name}, no uso de suas atribuições, prestador de serviço público na área da Política de Assistência Social encaminha o(a) usuário(a):
      </BodyText>
      <BodyText>Nome:</BodyText> <p> {name_user_identify?.name} </p>
      <BodyText>CPF:</BodyText> <p> {CPF_user_identify?.cpf} </p> 
      <BodyText>Endereço:</BodyText> <p> {familyReferedId?.address.address} </p>

      <SubTitle>II- SETOR/ ÓRGÃO A SER ENCAMINHADO:</SubTitle> <p>  </p>
      <BodyText>Motivo:</BodyText>
      <p>  </p>

      <SubTitle>III. BREVE RELATO DA SITUAÇÃO:</SubTitle>
      <BodyText>{unityAttendance?.edcenso_city.name}-{unityAttendance?.edcenso_city.edcenso_uf.acronym} , ____ de _____ de __________</BodyText>

      <BodyText>__________________________________________________</BodyText>
      {/* <BodyText>{technician?.name}</BodyText>
      <BodyText>{technician?.type}  – 19/IS- {technician?.professional_register}</BodyText> */}

      <BodyText>__________________________________________________</BodyText>
      {/* <BodyText>{technician?.name}</BodyText>
      <BodyText>{technician?.type} – CRESS/SE- {technician?.professional_register}</BodyText> */}
    </>
  );
};

export default Document;
