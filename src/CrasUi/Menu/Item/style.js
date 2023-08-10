import styled from "styled-components";
import styles from "../../styles";

export const Text = styled.h3`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    color:  ${props => props.active ? styles.colors.colorsBaseProductNormalActive : styles.colors.colorsBaseInkLight};
`;


export const Container = styled.div`
cursor: pointer;
border-radius: ${props => props.active ? "8px" : "0"};
background-color: ${props => props.active ? styles.colors.colorsBaseProductLightActive : "transparent"};
width: 100%;
    &:hover{
        border-radius: 8px;
        background-color: ${styles.colors.colorsBaseProductLightActive};
        color: ${styles.colors.gray};
    }
`;