import React from "react";
import CreateFamilyProvider from "./context/context";
import CreateFamilyReferedScreen from "../../../Page/FamilyRefered/CreateFamilyRefered";

const CreateFamilyRefered = () => {
    return(
        <CreateFamilyProvider>
            <CreateFamilyReferedScreen />
        </CreateFamilyProvider>
    )
}
export default CreateFamilyRefered;