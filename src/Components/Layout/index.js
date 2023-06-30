import React from "react";
import { Column, Row } from "../../CrasUi/styles/styles";
import CrasMenu from "../../CrasUi/Menu/Menu";
import TopBar from "../../CrasUi/TopBar/TopBar";

const Layout = ({children}) => {
    return(
        
        <Column>
            <Row>
                <CrasMenu/>
                <Column style={{width: "100%"}}>
                    <TopBar />
                    <>{children}</>
                </Column>
            </Row>
        </Column>
    )
}

export default Layout;