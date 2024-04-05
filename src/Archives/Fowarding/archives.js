import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
//import { formatarData } from '../../services/functions';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';
import { useFetchOneTechnician, useFetchOneTechnicianPsico } from '../../sdk/Technician/EditTechnician/request';
import { useFetchOneFowardByForwarding} from '../../sdk/FOUIForwarding/requests';
import { Column, Row } from '../../CrasUi/styles/styles';
import LogoNSLourdes from "../../assets/images/nslourdes/logo-prefeitura-nslourdes.png";

// Estilos globais
const GlobalStyle = createGlobalStyle`
@page {
  size: A4;
  margin: 0;
}

body {
  font-family: 'Times New Roman';
  font-size: 14pt;
  margin: 0 ;
  padding: 0;
  width: 21cm; /* Largura da folha A4 */
  height: 29.7cm; /* Altura da folha A4 */
  
}
`;
// Estilos dos componentes
const HeaderContainer = styled.div`
  text-align: center;
  border-bottom: 1.5pt solid #000000;
  padding-bottom: 1pt;
  margin-top: 20px;

  margin-left: 2.5cm; 
`;

const Title = styled.p`
  margin-top: 6.9pt;
  margin-right: 90.75pt;
  margin-left: 88.9pt;
  text-align: center;
  font-size: 14pt;
  font-weight: bold;

  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;

const SubTitle = styled.h1`
  font-size: 14pt;
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;

const BodyText = styled.p`
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
  font-size: 12pt;
`;

const BodyTextBold = styled.p`
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
  font-size: 12pt;
  font-weight: bold;
`;

const BodyTextPersonal = styled.p`
  margin-left: 10px;
  font-size: 12pt;
`;

const FooterContainer = styled.div`
  margin-top: 7cm;
  /*bottom: 3cm;  Distância de 3cm a partir do rodapé da página */
  left: 2.5cm; /* Margem de 2,5cm no lado esquerdo */
  right: 2.5cm; /* Margem de 2,5cm no lado direito */
`;

const BodyTextAsign = styled.p`
  margin: 0;
  font-size: 11pt;
  text-align: center;

  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;
const BodyTextDate = styled.p`

  font-size: 11pt;
  text-align: right;
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;
const EncaminhamentoContainer = styled.div`
  width: 21cm; /* Largura da folha A4 */
  height: 29.7cm; /* Altura da folha A4 */
  position: relative;
`;

// Componente React
const Document = ({ visibleEdit }) => {
  const { id, idUser, idassis, idpsico, idFoward } = useParams()

  const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
  const { data: familyReferedId } = useFetchFamilyReferedId(id)
  const { data: assistente} = useFetchOneTechnician(idassis)
  const { data: psicologo} = useFetchOneTechnicianPsico(idpsico)
  const { data: forwardMotivation } = useFetchOneFowardByForwarding(idFoward)
 // const { data: dataEncaminhamento } = formatarData(visibleEdit?.date)

  const typeNames = [{ type: "Assistente Social", id: "ASSISTENTE_SOCIAL" }, { type: "Psicólogo", id: "PSICOLOGO" }]
  const typeNamesConvert = typeNames?.find((type) => type.id === assistente?.type)
  const typeNamesConvertPsico = typeNames?.find((type) => type.id === psicologo?.type)

  const name_user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))
  const CPF_user_identify = familyReferedId?.user_identify?.find((cpf) => cpf.id === parseInt(idUser))
 
 console.log(forwardMotivation)
  
  return (
    <>
      <GlobalStyle />
      <EncaminhamentoContainer>
        <HeaderContainer>
          <img src={LogoNSLourdes} alt="Logo da Prefeitura de Nossa Senhora de Lourdes"/>
          <p><b>PREFEITURA MUNICIPAL DE {unityAttendance?.edcenso_city.name}</b></p>
          <p><b>SECRETARIA MUNICIPAL DE ASSISTÊNCIA SOCIAL</b></p>
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
        <br/> 
        <Row><BodyTextBold>Nome:</BodyTextBold> <BodyTextPersonal> {name_user_identify?.name} </BodyTextPersonal></Row>
        <Row><BodyTextBold>CPF:</BodyTextBold> <BodyTextPersonal> {CPF_user_identify?.cpf} </BodyTextPersonal> </Row>
        <Row><BodyTextBold>Endereço:</BodyTextBold> <BodyTextPersonal> {familyReferedId?.address.address}, {unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym} </BodyTextPersonal></Row>

        <Row>
        <SubTitle>II- SETOR/ ÓRGÃO A SER ENCAMINHADO:</SubTitle> 
        <Column id='center'>
        <BodyTextPersonal> {forwardMotivation?.forwading.name} - {forwardMotivation?.forwading.type} </BodyTextPersonal>
        </Column>
        <br/>
        </Row>

        <Row> <BodyTextBold>Motivo:</BodyTextBold> <BodyTextPersonal> {forwardMotivation?.description} </BodyTextPersonal></Row>

        <SubTitle>III. BREVE RELATO DA SITUAÇÃO:</SubTitle> 
        <BodyText> {forwardMotivation?.report} </BodyText>
        
        <FooterContainer>
        <BodyTextDate>{unityAttendance?.edcenso_city.name}-{unityAttendance?.edcenso_city.edcenso_uf.acronym} , ____ de _____ de __________</BodyTextDate>
        <br/>
        <br/>
        <BodyTextAsign>__________________________________________________</BodyTextAsign>
        <BodyTextAsign>{psicologo?.name}</BodyTextAsign>
        <BodyTextAsign>{typeNamesConvertPsico?.type}  – 19/IS- {psicologo?.professional_register}</BodyTextAsign>
        <br/>
        <br/>
        <BodyTextAsign>__________________________________________________</BodyTextAsign>
        <BodyTextAsign>{assistente?.name}</BodyTextAsign>
        <BodyTextAsign>{typeNamesConvert?.type} – CRESS/SE- {assistente?.professional_register}</BodyTextAsign> 
        </FooterContainer>
        </EncaminhamentoContainer>
    </>
  );
};

export default Document;
