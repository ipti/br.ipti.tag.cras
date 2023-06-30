import styled from "styled-components";
import style from "../../CrasUi/styles/index"


export const Column = styled.div`
    display: flex;
    flex-direction: column;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

export const Padding = styled.div`
    padding: ${props => props.padding || "5px"};
`;

export const Container = styled.div`
height: 100%;
width: 100%;
padding: 4%;
font-size: ${style.typography.font.medium};
font-family: ${style.typography.types.inter};
`;