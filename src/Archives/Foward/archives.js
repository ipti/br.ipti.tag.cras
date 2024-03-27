import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
//import { formatarData } from '../../services/functions';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';
import { useFetchOneTechnician, useFetchOneTechnicianPsico } from '../../sdk/Technician/EditTechnician/request';
import { useFetchOneFowardByForwarding} from '../../sdk/FOUIForwarding/requests';

// import { getFOUIForwardingByUserIdentification } from '../../sdk/FOUIFowarding/request';

// Estilos globais
const GlobalStyle = createGlobalStyle`
@page {
  size: A4;
  margin: 0;
}

body {
  font-family: 'Times New Roman';
  font-size: 24pt;
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

  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;

const Title = styled.p`
  margin-top: 6.9pt;
  margin-right: 90.75pt;
  margin-left: 88.9pt;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;

  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;

const SubTitle = styled.h1`
  margin-left: 18pt;
  font-size: 28pt;
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;

const BodyText = styled.p`
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
  font-size: 24pt;
`;

const BodyTextBold = styled.p`
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
  font-size: 24pt;
  font-weight: bold;
`;

const BodyTextPersonal = styled.p`
  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
  font-size: 24pt;
`;

const BodyTextAsign = styled.p`
  margin: 0;
  font-size: 22pt;
  text-align: center;

  margin-left: 2.5cm; /* Margem de 2,5 cm no lado esquerdo */
`;

const FooterContainer = styled.div`
  
  bottom: 3cm; /* Distância de 3cm a partir do rodapé da página */
  left: 2.5cm; /* Margem de 2,5cm no lado esquerdo */
  right: 2.5cm; /* Margem de 2,5cm no lado direito */
`;

const EncaminhamentoContainer = styled.div`
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

  const typeNames = [{ type: "Assistente Social", id: "ASSISTENTE_SOCIAL" }, { type: "Psicólogo", id: "PSICOLOGO" }]
  const typeNamesConvert = typeNames?.find((type) => type.id === assistente?.type)
  const typeNamesConvertPsico = typeNames?.find((type) => type.id === psicologo?.type)

  const name_user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))
  const CPF_user_identify = familyReferedId?.user_identify?.find((cpf) => cpf.id === parseInt(idUser))
  
  return (
    <>
      <GlobalStyle />
      <EncaminhamentoContainer>
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
        <BodyTextBold>Nome:</BodyTextBold> <BodyTextPersonal> {name_user_identify?.name} </BodyTextPersonal>
        <BodyTextBold>CPF:</BodyTextBold> <BodyTextPersonal> {CPF_user_identify?.cpf} </BodyTextPersonal> 
        <BodyTextBold>Endereço:</BodyTextBold> <BodyTextPersonal> {familyReferedId?.address.address} </BodyTextPersonal>

        <SubTitle>II- SETOR/ ÓRGÃO A SER ENCAMINHADO:</SubTitle> <p>  </p>
        <BodyTextBold>Motivo:</BodyTextBold>
        <BodyTextPersonal> {fowardMotivation?.description} </BodyTextPersonal>

        <FooterContainer>
        <SubTitle>III. BREVE RELATO DA SITUAÇÃO:</SubTitle>
        <BodyText>{unityAttendance?.edcenso_city.name}-{unityAttendance?.edcenso_city.edcenso_uf.acronym} , ____ de _____ de __________</BodyText>
        
        <BodyTextAsign>__________________________________________________</BodyTextAsign>
        <BodyTextAsign>{psicologo?.name}</BodyTextAsign>
        <BodyTextAsign>{typeNamesConvert?.type}  – 19/IS- {psicologo?.professional_register}</BodyTextAsign>

        <BodyTextAsign>__________________________________________________</BodyTextAsign>
        <BodyTextAsign>{assistente?.name}</BodyTextAsign>
        <BodyTextAsign>{typeNamesConvertPsico?.type} – CRESS/SE- {assistente?.professional_register}</BodyTextAsign> 
        </FooterContainer>
        </EncaminhamentoContainer>
    </>
  );
};

export default Document;
