import React from "react";
import CreateServicesScreen from "../../../Page/Services/CreateServices";
import CreateServicesProvider from "../../../context/Service/CreateService/context";

const CreateServices = () => {
    return(
        <CreateServicesProvider>
            <CreateServicesScreen />
        </CreateServicesProvider>
    )
}

export default CreateServices;