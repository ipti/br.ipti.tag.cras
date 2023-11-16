import styled from "styled-components";

import styles from "../styles";

export const Container = styled.div`

   display: flex;   
   flex-direction: row;
   height: 70px;
   justify-content: space-between;
   padding: 10px
`;

export const Back = styled.div`
   display: flex;   
   flex-direction: row;
   align-items: center;
   cursor: pointer;
   font-family: ${styles.typography.types.inter};
   :hover{
      color: ${styles.colors.colorsBaseProductDarkHover}
   }
`;