import React from "react";
import EditTypeServiceProvider from "../../../context/TypeService/EditTypeService/contex";
import EditTypeServiceScreen from "../../../Page/TypeService/EditTypeService";

const EditTypeService = () => {
    return (
        <EditTypeServiceProvider>
            <EditTypeServiceScreen />
        </EditTypeServiceProvider>
    )
}

export default EditTypeService;