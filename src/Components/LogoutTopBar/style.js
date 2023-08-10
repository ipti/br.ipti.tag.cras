import styled from "styled-components";
import styles from "../../CrasUi/styles/index"

export const Container = styled.div`
    background-color: ${styles.colors.colorsBaseInkLighterActive};
    
    width: auto;
    padding: 6px 12px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background-color: ${styles.colors.colorsBaseInkLightHover};
    }
`;