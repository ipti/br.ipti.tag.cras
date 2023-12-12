import React from "react";
import CreateServicesScreen from "../../../Page/Services/CreateServices";
import CreateServicesProvider from "../../../context/Service/CreateService/context";
import UserIdentifyProvider from "../../../context/FamilyRefered/FamilyRefered/context";

const CreateServices = () => {
    return (
        <CreateServicesProvider>
            <UserIdentifyProvider>
                <CreateServicesScreen />
            </UserIdentifyProvider>
        </CreateServicesProvider>
    )
}

export default CreateServices;