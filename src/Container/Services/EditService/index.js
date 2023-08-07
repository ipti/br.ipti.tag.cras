import React from "react";
import EditServiceProvider from "../../../context/Service/EditService/context";
import EditServicePage from "../../../Page/Services/EditService";

const EditService = () => {
    return(
        <EditServiceProvider>
            <EditServicePage />
        </EditServiceProvider>
    )
}

export default EditService;