import React from "react";
import ListServicesScreen from "../../../Page/Services/ListServices";
import ListServicesProvider from "./context/context";

const ListServices = () => {
    return(
        <ListServicesProvider>
            <ListServicesScreen />
        </ListServicesProvider>
    )
}

export default ListServices;