import React from "react";
import TypeServicePage from "../../../Page/TypeService/TypeService";
import TypeServiceProvider from "../../../context/TypeService/TypeService/context";

const TypeService = () => {
    return(
        <TypeServiceProvider>
            <TypeServicePage />
        </TypeServiceProvider>
    )
}

export default TypeService;