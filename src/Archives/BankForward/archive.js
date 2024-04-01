import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useFetchOneAttendanceUnity } from '../../sdk/AttendanceUnity/EditAttendanceUnity/request';
import { GetIdAttendance } from '../../services/localstorage';
import { useFetchFamilyReferedId } from '../../sdk/FamilyRefered/request';
import { useFetchOneTechnician, useFetchOneTechnicianPsico } from '../../sdk/Technician/EditTechnician/request';
import { useFetchOneFowardByForwarding} from '../../sdk/FOUIForwarding/requests';
import { Column, Row } from '../../CrasUi/styles/styles';


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

  /* margin-left: 2.5cm; Margem de 2,5 cm no lado esquerdo */
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

const StyledQuotationParagraph = styled.p`
  margin-left: 4cm;
`;


// Componente React
const Document = ({ visibleEdit }) => {
    const { id, idUser, idassis, idpsico, idFoward } = useParams()

    const { data: unityAttendance } = useFetchOneAttendanceUnity(GetIdAttendance())
    const { data: familyReferedId } = useFetchFamilyReferedId(id)
    const { data: assistente} = useFetchOneTechnician(idassis)
    const { data: forwardMotivation } = useFetchOneFowardByForwarding(idFoward)
    // const { data: dataEncaminhamento } = formatarData(visibleEdit?.date)

    const typeNames = [{ type: "Assistente Social", id: "ASSISTENTE_SOCIAL" }, { type: "Psicólogo", id: "PSICOLOGO" }]
    const typeNamesConvert = typeNames?.find((type) => type.id === assistente?.type)

    const name_user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))
    const CPF_user_identify = familyReferedId?.user_identify?.find((cpf) => cpf.id === parseInt(idUser))
    const RG_user_identify = familyReferedId?.user_identify?.find((rg) => rg.id === parseInt(idUser))
    const emission_RG_user_identify = familyReferedId?.user_identify?.find((emission) => emission.id === parseInt(idUser))
    const uf_RG_user_identify = familyReferedId?.user_identify?.find((uf_rg) => uf_rg.id === parseInt(idUser))
    const date_RG_user_identify = familyReferedId?.user_identify?.find((rg_date_emission) => rg_date_emission.id === parseInt(idUser))


    console.log(forwardMotivation)
    
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

            <SubTitle>À GERENCIA</SubTitle>
            <SubTitle>DO BANCO DO ESTADO DE SERGIPE</SubTitle>
            <SubTitle>AGÊNCIA Nº _______________________ </SubTitle>

            <BodyText>
            <br /> <br /> <br />
            </BodyText>
            <BodyText>
            Prezado Sr. (a) Gerente,
            <br /> <br /> <br />Considerando o dispoto no art. 2°, inciso II da Resolução n° 3.919, de 25 de novembro de 2010 do Banco Central do Brasil que diz:
            </BodyText>

            <StyledQuotationParagraph >
            <br />Art. 2° É vedada às instituições mencionadas no art. 1° a cobrança de tarifas pela prestação de serviços bancários essenciais a pessoas naturais,
            assim considerados aqueles relativos a:
            <br /> <br />II - conta de depósitos de poupança:
            <br />[...]
            </StyledQuotationParagraph >

            <BodyText>
            <br /> <br />
            Encaminhamos o (a) Sr. (a) <b>{name_user_identify?.name}</b>, portador (a) do RG {RG_user_identify?.rg_number} {emission_RG_user_identify?.emission_rg}/{uf_RG_user_identify?.uf_rg}, expedido em {date_RG_user_identify?.rg_date_emission}, e CPF: {CPF_user_identify?.cpf}, residente e domiciliado  em {familyReferedId?.address.address}, no município de {unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym}, com o objetivo de proceder a abertura de conta poupança, de forma gratuita.
            </BodyText>
            <br/>
            <BodyText>
            Vale ressaltar que o (a) beneficiário (a) acima identificado (a), nos termos do art., inciso I e II, da Lei Federal n° 14. 284, de 29 de dezembro de 2021 é considerado pobre ou extremamente pobre e necessita obter uma conta poupança ligada a referida instituição bancária para o recebimento de benefício eventual.
            </BodyText>

            <FooterContainer>
            <BodyTextDate> {unityAttendance?.edcenso_city.name}/{unityAttendance?.edcenso_city.edcenso_uf.acronym}, ___/___/_____.</BodyTextDate>
            <br/>
            <br/>
        
            <BodyTextAsign>__________________________________________________</BodyTextAsign>
            <BodyTextAsign>{assistente?.name}</BodyTextAsign>
            <BodyTextAsign>{typeNamesConvert?.type}</BodyTextAsign> 
            <BodyTextAsign>CRP nº 3270 19ª Região</BodyTextAsign>   
            </FooterContainer>
            </EncaminhamentoContainer>
        </>
    );
};

export default Document;
