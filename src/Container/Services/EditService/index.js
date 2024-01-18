import React from "react";
import EditServiceProvider from "../../../context/Service/EditService/context";
import EditServicePage from "../../../Page/Services/EditService";
import UserIdentifyProvider from "../../../context/FamilyRefered/FamilyRefered/context";

const EditService = () => {
    return (
        <EditServiceProvider>
            <UserIdentifyProvider>
                <EditServicePage />
            </UserIdentifyProvider>
        </EditServiceProvider>
    )
}

export default EditService;