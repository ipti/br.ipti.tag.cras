import React from "react";
import ListFamilyHCScreen from "../../../Page/HappyChild/FamilyHC/ListFamilyHC";
import FamilyHCProvider from "../../../context/HappyChild/FamilyHC/context";

const ListFamilyHC = () => {
    return(
        <FamilyHCProvider>
        <ListFamilyHCScreen />
        </FamilyHCProvider>
    )
}

export default ListFamilyHC;