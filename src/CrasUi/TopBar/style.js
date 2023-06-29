import styled from "styled-components";

import styles from "../styles";

export const Container = styled.div`

   display: flex;   
   flex-direction: row;
   height: 60px;
   justify-content: space-between;
   padding: 10px
`;

export const Back = styled.div`
   display: flex;   
   flex-direction: row;
   cursor: pointer;
   font-family: ${styles.typography.types.inter};
   :hover{
      color: ${styles.colors.colorsBaseProductDarkHover}
   }
`;