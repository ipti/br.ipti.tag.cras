import React from "react";
import CreateServicesProvider from "./context/context";
import CreateServicesScreen from "../../../Page/Services/CreateServices";

const CreateServices = () => {
    return(
        <CreateServicesProvider>
            <CreateServicesScreen />
        </CreateServicesProvider>
    )
}

export default CreateServices;