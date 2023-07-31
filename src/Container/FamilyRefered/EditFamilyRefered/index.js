import React from "react";
import EditFamilyReferedScreen from "../../../Page/FamilyRefered/EditFamilyRedered";
import EditFamilyProvider from "../../../context/FamilyRefered/EditFamilyRefered/context";

const EditFamilyRefered = () => {

    return (
        <EditFamilyProvider>
            <EditFamilyReferedScreen />
        </EditFamilyProvider>
    )
}

export default EditFamilyRefered;