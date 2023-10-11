import React from "react";
import CreateBenefitsScreen from "../../../Page/Benefits/CreateBenefits";
import CreateBenefitsProvider from "../../../context/Benefits/CreateBenefits/context";

const CreateBenefits = () => {
    return(
        <CreateBenefitsProvider>
            <CreateBenefitsScreen />
        </CreateBenefitsProvider>
    )
}

export default CreateBenefits;