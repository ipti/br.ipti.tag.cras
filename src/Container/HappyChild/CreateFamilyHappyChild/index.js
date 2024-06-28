import React from "react";
import CreateFamilyHappyChildScreen from "../../../Page/HappyChild/CreateFamilyHC";
import CreateFamilyHappyChildProvider from "../../../context/HappyChild/FamilyHC/CreateFamilyHCContext";

const CreateFamilyHappyChild = () => {
    return(
        <CreateFamilyHappyChildProvider>
            <CreateFamilyHappyChildScreen />
        </CreateFamilyHappyChildProvider>
    )
}

export default CreateFamilyHappyChild;