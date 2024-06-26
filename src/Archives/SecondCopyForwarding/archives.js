import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';
import { useFetchOneForwardByForwarding} from '../../sdk/FOUIForwarding/requests';
import { Row, Column } from '../../CrasUi/styles/styles';
import LogoNSLourdes from "../../assets/images/nslourdes/logo-prefeitura-nslourdes.png";
import BackgroundDoc  from "../../assets/images/nslourdes/backgroud_doc_nslourdes.jpg";
import LogoCras from "../../assets/images/logo_cras.png";
import { useQuery } from 'react-query';
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
  font-size: 12pt;
  border-bottom: 1.5pt solid #000000;
  padding: 5pt 10pt 5pt 10pt;
  margin-top: 5px;
  /* margin-left: 2.5cm; Margem de 2,5 cm no lado esquerdo */
`;
const FooterContainer = styled.div`
  margin-top: 1.0cm;
  display: flex;
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
`;

const BodyText = styled.p`
  text-indent: 2cm; /* Recuo de 2cm no primeiro parágrafo */
  font-size: 12pt;
  text-align: justify;
`;

const BodyTextNoIdent = styled.p`
  font-size: 11pt;
  text-align: justify;
  padding: 2px;
`;

const BodyTextAsign = styled.p`
  margin: 0;
  font-size: 11pt;
  text-align: center;
`;

const BodyTextDate = styled.p`
  font-size: 11pt;
  text-align: right;
`;
const DeclaracaoContainer = styled.div`
    margin-top: 1cm;
    border: 1px solid black;
    padding: 10px;
`;

const EncaminhamentoContainer = styled.div`
  width: 21cm; /* Largura da folha A4 */
  height: 29.7cm; /* Altura da folha A4 */
  padding: 0cm 2cm 0cm 2cm; /* Margem de 2cm */
  position: relative;
`;

const BackgroundContainer = styled.div`
  padding: 0;

  background-image: url(${BackgroundDoc});  
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: bottom;
`;

const Document = ({ visibleEdit }) => {
    const { id } = useParams()

    //esses dados irão vir por query
    const { idUser, idForward, registry, dateEvent, dateFirstCopy, book, sheet, numTermo} = useQuery()


    const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
    const { data: familyReferedId } = useFetchFamilyReferedId(id)
    const { data: forwardMotivation } = useFetchOneForwardByForwarding(idForward)
    // todo: use query para pegar os dados do encaminhamento
   
    const user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))

    var dateFirstCopyEdit = dateFirstCopy.split("-").reverse().join("/");

    const typeNames = [{ type: "Nascimento", id: "SEGUNDA_VIA_NASCIMENTO" }, { type: "Casamento", id: "SEGUNDA_VIA_CASAMENTO" }, { type: "Óbito", id: "SEGUNDA_VIA_OBITO" }]
    const typeNamesConvert = typeNames?.find((type) => type.id === forwardMotivation?.forwading.type)


    return (
        <>
        <GlobalStyle />
        <BackgroundContainer>
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
            <br/>
            
            <Title>ENCAMINHAMENTO</Title>

            <SubTitle>
              <Row>Ilmo(a). Sr(a).</Row>
              <Row>Oficial de Registro Civil das Pessoas Naturais</Row>
              <Row>Cartório: {registry}</Row>
            </SubTitle>

            <br/>
     
            <BodyText>
                Solicito a Vossa Senhoria a expedição de segunda via gratuita de Certidão de {typeNamesConvert?.type}
            </BodyText>
            <br />
            <BodyTextNoIdent> Em nome de {user_identify?.name} </BodyTextNoIdent>
            <BodyTextNoIdent> Data de {typeNamesConvert?.type} : {dateFirstCopyEdit} </BodyTextNoIdent>
            <BodyTextNoIdent> Data:____/____/______  Livro:{book} Folha:{sheet} Nº TERMO:{numTermo} </BodyTextNoIdent>

            <BodyTextNoIdent><b>Filiação:</b></BodyTextNoIdent>
            <BodyTextNoIdent> Filiação 1: {user_identify?.filiation_1} </BodyTextNoIdent>
            <BodyTextNoIdent> Filiação 1: {user_identify?.filiation_2} </BodyTextNoIdent>
           
            <DeclaracaoContainer>
                <Title>DECLARAÇÃO</Title>
                <BodyTextNoIdent>O abaixo-assinado e qualificado, DECLARA, sob pena de responsabilidade civil e criminal, nos termos do artigo 30, parágrafo 1º, da Lei 6.015/1973, que não possui recursos para arcar com os emolumentos relativos à expedição de certidão. </BodyTextNoIdent>
                <BodyTextDate> {unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym}, ____/____/______.</BodyTextDate>
                <br/>
                <BodyTextNoIdent>Nome:<u>{user_identify.name}</u></BodyTextNoIdent>
                <BodyTextNoIdent>Profissão: <u>{user_identify?.profission}</u>  RG:<u>{user_identify?.rg_number}</u> {user_identify?.emission_rg}/{user_identify?.uf_rg}   CPF: <u>{user_identify?.cpf}</u> </BodyTextNoIdent>
                <BodyTextNoIdent>Endereço: <u>{familyReferedId?.address.address}</u> </BodyTextNoIdent>
                <BodyTextNoIdent>Cidade: <u>{unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym}</u></BodyTextNoIdent>
                <br/>
                <BodyTextAsign>__________________________________________________________________</BodyTextAsign>
                <BodyTextAsign>Assinatura do Declarante</BodyTextAsign>

            </DeclaracaoContainer>

            <br/><br/>
           
            <FooterContainer>
                <Column><img src={LogoCras} alt="Logo Cras" style={{ width: '80px' }}/></Column>
                <Column>
                    <BodyTextNoIdent><b>End.: </b>{unityAttendance?.address.address}</BodyTextNoIdent>
                    <BodyTextNoIdent><b>Cep: </b>{unityAttendance?.edcenso_city.cep_final}</BodyTextNoIdent>
                    <BodyTextNoIdent><b>Fone: </b>{unityAttendance?.address.telephone}</BodyTextNoIdent>
                    <BodyTextNoIdent><b>E-mail: </b>{unityAttendance?.email}</BodyTextNoIdent>
                </Column>
            </FooterContainer>
            
        </EncaminhamentoContainer>
        </BackgroundContainer>
        </>
    );
};

export default Document;
