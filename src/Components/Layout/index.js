import React from "react";
import { Column, Row } from "../../CrasUi/styles/styles";
import CrasMenu from "../../CrasUi/Menu/Menu";

const Layout = ({children}) => {
    return(
        <Column>
            <Row>
                <CrasMenu />
                <Column>
                    <></>

                    <>{children}</>
                </Column>
            </Row>
        </Column>
    )
}

export default Layout;