import styled from "styled-components";
import LoginBack from "../../assets/images/fadedlogo.svg"
import styles from "../../CrasUi/styles";



export const Box = styled.div`
    margin: auto;
    width: 40%;



    #titleLogin {
        text-align: center;
        font-size: 24px;
        color: ${styles.colors.colorsBaseInkNormal};
        font-family: ${styles.typography.types.inter};
        font-weight: bold
    }

    #subTitleLogin {
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        font-family: ${styles.typography.types.inter};
        color: ${styles.colors.colorsBaseInkLight},
    }

    @media screen and (max-width: 800px) {
         width: 80%;
    }
`;

export const TopBar = styled.div`
    width: 25%;
    height: 4px
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: ${`url(${LoginBack})`};
    background-repeat: no-repeat;
    background-position: right top;
    position: fixed;

   
`;