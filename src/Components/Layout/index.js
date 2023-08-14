import React from "react";
import { Column, Row } from "../../CrasUi/styles/styles";
import CrasMenu from "../../CrasUi/Menu/Menu";
import TopBar from "../../CrasUi/TopBar/TopBar";
import { useState } from "react";

const Layout = ({children}) => {

    const [viewdMenu, setViewd] = useState(false);

    return(
        
        <Column style={{height: "100%"}}>
            <Row style={{height: "100%"}}>
                <CrasMenu viewdMenu={viewdMenu}/>
                <Column style={{width: "100%"}}>
                    <TopBar setViewd={setViewd} viewdMenu={viewdMenu} />
                    <>{children}</>
                </Column>
            </Row>
        </Column>
    )
}

export default Layout;