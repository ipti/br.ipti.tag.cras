import React from "react";
import ListServicesScreen from "../../../Page/Services/ListServices";
import ServiceProvider from "../../../context/Service/Service/context";

const ListServices = () => {
    return(
        <ServiceProvider>
            <ListServicesScreen />
        </ServiceProvider>
    )
}

export default ListServices;