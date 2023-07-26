import React from "react";
import CreateFamilyReferedScreen from "../../../Page/FamilyRefered/CreateFamilyRefered";
import CreateFamilyProvider from "../../../context/CreateFamilyRefered/context";

const CreateFamilyRefered = () => {
    return(
        <CreateFamilyProvider>
            <CreateFamilyReferedScreen />
        </CreateFamilyProvider>
    )
}
export default CreateFamilyRefered;