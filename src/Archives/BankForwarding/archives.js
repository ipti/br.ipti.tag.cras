import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';
import { useFetchOneTechnician} from '../../sdk/Technician/EditTechnician/request';
import { Row } from '../../CrasUi/styles/styles';
import LogoNSLourdes from "../../assets/images/nslourdes/logo-prefeitura-nslourdes.png";
import BackgroundDoc  from "../../assets/images/nslourdes/backgroud_doc_nslourdes.jpg";


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
  margin-top: 1cm;
  
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
  
`;

const BodyTextAsign = styled.p`
  margin: 0;
  font-size: 11pt;
  text-align: center;
`;

const BodyTextDate = styled.p`
  font-size: 11pt;
  text-align: right;
`
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

const StyledQuotationParagraph = styled.p`
  font-size: 11pt;
  margin-left: 5cm;
`;

// Componente React
const Document = ({ visibleEdit }) => {
    const { id, idUser, idassis, agency} = useParams()

    const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
    const { data: familyReferedId } = useFetchFamilyReferedId(id)
    const { data: assistente} = useFetchOneTechnician(idassis)
    // const { data: dataEncaminhamento } = formatarData(visibleEdit?.date)

    const typeNames = [{ type: "Assistente Social", id: "ASSISTENTE_SOCIAL" }, { type: "Psicólogo", id: "PSICOLOGO" }]
    const typeNamesConvert = typeNames?.find((type) => type.id === assistente?.type)

    const name_user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))
    const CPF_user_identify = familyReferedId?.user_identify?.find((cpf) => cpf.id === parseInt(idUser))
    const RG_user_identify = familyReferedId?.user_identify?.find((rg) => rg.id === parseInt(idUser))
    const emission_RG_user_identify = familyReferedId?.user_identify?.find((emission) => emission.id === parseInt(idUser))
    const uf_RG_user_identify = familyReferedId?.user_identify?.find((uf_rg) => uf_rg.id === parseInt(idUser))
    const date_RG_user_identify = familyReferedId?.user_identify?.find((rg_date_emission) => rg_date_emission.id === parseInt(idUser))

    var emission_date = date_RG_user_identify?.rg_date_emission.split("T")[0].split("-").reverse().join("/");
    // console.log(forwardMotivation)
    
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
              <Row>À GERENCIA</Row>
              <Row>DO BANCO DO ESTADO DE SERGIPE</Row>
              <Row>AGÊNCIA Nº {agency}</Row>
            </SubTitle>

            <BodyText>
            <br /> <br />
            </BodyText>
            <BodyText>
            Prezado Sr. (a) Gerente,
            </BodyText>
            <br />
            <BodyText>Considerando o dispoto no art. 2°, inciso II da Resolução n° 3.919, de 25 de novembro de 2010 do Banco Central do Brasil que diz:
            </BodyText>

            <StyledQuotationParagraph >
            <br />Art. 2° É vedada às instituições mencionadas no art. 1° a cobrança de tarifas pela prestação de serviços bancários essenciais a pessoas naturais,
            assim considerados aqueles relativos a:
            <br /><br />[...]
            <br />II - conta de depósitos de poupança:
            <br />[...]
            </StyledQuotationParagraph >
            
            <br /> 
            <BodyText>
            Encaminhamos o (a) Sr. (a) <u>{name_user_identify?.name}</u>, portador (a) do RG <u>{RG_user_identify?.rg_number}</u> {emission_RG_user_identify?.emission_rg}/{uf_RG_user_identify?.uf_rg}, expedido em <u>{emission_date}</u>, e CPF: <u>{CPF_user_identify?.cpf}</u>, residente e domiciliado  em <u>{familyReferedId?.address.address}</u>, no município de <u>{unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym}</u> com o objetivo de proceder a abertura de conta poupança, de forma gratuita.
            </BodyText>

            <br/>
            <BodyText>
            Vale ressaltar que o(a) beneficiário(a) acima identificado(a), nos termos do art., inciso I e II, da Lei Federal n° 14. 284, de 29 de dezembro de 2021 é considerado pobre ou extremamente pobre e necessita obter uma conta poupança ligada a referida instituição bancária para o recebimento de benefício eventual.
            </BodyText>

            <FooterContainer>
            <BodyTextDate> {unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym}, ___/___/_____.</BodyTextDate>
            <br/><br/>
            
            <BodyTextAsign><b>{assistente?.name.toUpperCase()}</b></BodyTextAsign>
            <BodyTextAsign>{typeNamesConvert?.type}</BodyTextAsign>
            {assistente?.type === 'PSICOLOGO' ? (
                <BodyTextAsign>CRP nº – {assistente?.professional_register} </BodyTextAsign>
            ) : (
                <BodyTextAsign>CRESS/SE nº – {assistente?.professional_register}</BodyTextAsign>
            )}
            </FooterContainer>

            <br/><br/>
            <BodyTextNoIdent><b>FUNDO MUNICIPAL DE ASSISTÊNCIA SOCIAL - FMAS</b></BodyTextNoIdent>
            <BodyTextNoIdent><b>E-mail: </b>{unityAttendance?.email}</BodyTextNoIdent>
            <BodyTextNoIdent><b>End.: </b>{unityAttendance?.address.address}, CEP:{unityAttendance?.edcenso_city.cep_final}</BodyTextNoIdent>

            
        </EncaminhamentoContainer>
        </BackgroundContainer>
        </>
    );
};

export default Document;
