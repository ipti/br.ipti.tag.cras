import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  page-break-before: always;
  page-break-after: always;
`;

const StyledParagraph = styled.p`
  font-weight: bold;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const Document = () => {

    const user_identify = familyReferedId?.user_identify?.find((name) => name.id === parseInt(idUser))

    return (
        <html>
            <head>
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>

            <body>
                <StyledDiv>
                <div>
                    <StyledParagraph>
                    <StyledSpan>ACOMPANHAMENTO MEU INSS – BPC</StyledSpan>
                    <br />
                    Nome: {user_identify?.name} <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Responsável:</StyledSpan> Contato: <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Número do Benefício:</StyledSpan> Protocolo: <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Login:</StyledSpan> <br />
                    CPF: <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Senha:</StyledSpan> <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Agendamentos Avaliação Social:</StyledSpan> <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Perícia Médica:</StyledSpan> <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <StyledSpan>Status:</StyledSpan> ( ) Deferido ( ) Indeferido <br />
                    </StyledParagraph>
                    <StyledParagraph>
                    <br />
                    <br />
                    </StyledParagraph>
                </div>
                </StyledDiv>
            </body>
        </html>
    );
};

export default Document;
