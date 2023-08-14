import styled from "styled-components";
import styles from "../styles/index"

export const Container = styled.div`
    background-color: ${styles.colors.colorsBaseProductLighter};
    min-width: 230px;
    @media screen and (max-width: 750px) {
        display: ${props => props.active ? "" : "none" };
    }
`;

export const TopBar = styled.div`
    width: 25%;
    height: 4px
`;