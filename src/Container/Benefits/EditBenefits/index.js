import React from "react";
import EditBenefitsScreen from "../../../Page/Benefits/EditBenefits";
import EditBenefitsProvider from "../../../context/Benefits/EditBenefits/context";

const EditBenefits = () => {
    return (
        <EditBenefitsProvider>
            <EditBenefitsScreen />
        </EditBenefitsProvider>
    )
}

export default EditBenefits;