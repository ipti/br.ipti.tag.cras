import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
import { formatarData } from '../../services/functions';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';
import { useFetchOneTechnician, useFetchOneTechnicianPsico } from '../../sdk/Technician/EditTechnician/request';
import { useFetchOneFowardByForwarding} from '../../sdk/FOUIForwarding/requests';

// import { getFOUIForwardingByUserIdentification } from '../../sdk/FOUIFowarding/request';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Times New Roman';
    font-size: 12pt;
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

const BodyTextAsign = styled.p`
  margin: 0;
  font-size: 11pt;
  text-align: center;
`;

const EncaminhamentoContainer = styled.div`
  margin-left: 18pt;
`;

const SubTitle = styled.h1`
  margin-left: 18pt;
`;


// Componente React
const Document = ({ visibleEdit }) => {
  const { id, idUser, idassis, idpsico, idFoward } = useParams()

  const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
  const { data: familyReferedId } = useFetchFamilyReferedId(id)
  const { data: assistente} = useFetchOneTechnician(idassis)
  const { data: psicologo} = useFetchOneTechnicianPsico(idpsico)
  const { data: fowardMotivation } = useFetchOneFowardByForwarding(idFoward)
 // const { data: dataEncaminhamento } = formatarData(visibleEdit?.date)

  console.log(assistente, psicologo)

  const typeNames = [{ type: "Assistente Social", id: "ASSISTENTE_SOCIAL" }, { type: "Psicólogo", id: "PSICOLOGO" }]
  const typeNamesConvert = typeNames?.find((type) => type.id === assistente?.type)
  const typeNamesConvertPsico = typeNames?.find((type) => type.id === psicologo?.type)

  const name_user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))
  const CPF_user_identify = familyReferedId?.user_identify?.find((cpf) => cpf.id === parseInt(idUser))

  //console.log(familyReferedId)
  //console.log(name_user_identify)
  //console.log(CPF_user_identify)

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
      <p> {fowardMotivation?.description} </p>

      <SubTitle>III. BREVE RELATO DA SITUAÇÃO:</SubTitle>
      <BodyText>{unityAttendance?.edcenso_city.name}-{unityAttendance?.edcenso_city.edcenso_uf.acronym} , ____ de _____ de __________</BodyText>

      
      <BodyTextAsign>__________________________________________________</BodyTextAsign>
      <BodyTextAsign>{psicologo?.name}</BodyTextAsign>
      <BodyTextAsign>{typeNamesConvert?.type}  – 19/IS- {psicologo?.professional_register}</BodyTextAsign>

      <BodyTextAsign>__________________________________________________</BodyTextAsign>
      <BodyTextAsign>{assistente?.name}</BodyTextAsign>
      <BodyTextAsign>{typeNamesConvertPsico?.type} – CRESS/SE- {assistente?.professional_register}</BodyTextAsign> 
    </>
  );
};

export default Document;
