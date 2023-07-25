import React from "react";
import CreateTypeServiceScreen from "../../../Page/TypeService/CreateTypeService";
import CreateTypeServiceProvider from "../../../context/TypeService/CreateTypeService/context";

const CreateTypeService = () => {
    return(
        <CreateTypeServiceProvider>
            <CreateTypeServiceScreen />
        </CreateTypeServiceProvider>
    )
}

export default CreateTypeService;