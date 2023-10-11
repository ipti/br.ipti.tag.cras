import React from "react";
import ListBenefitsScreen from "../../../Page/Benefits/ListBenefits";
import BenefitsProvider from "../../../context/Benefits/ListBenefits/context";

const Benefits = () => {
    return (
        <BenefitsProvider>
            <ListBenefitsScreen />
        </BenefitsProvider>
    )
}

export default Benefits;