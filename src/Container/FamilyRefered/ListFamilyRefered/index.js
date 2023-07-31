import React from "react";
import ListFamilyReferedScreen from "../../../Page/FamilyRefered/ListFamilyRefered";
import UserIdentifyProvider from "../../../context/FamilyRefered/FamilyRefered/context";

const ListFamilyRefered = () => {
    return(
        <UserIdentifyProvider>
            <ListFamilyReferedScreen />
        </UserIdentifyProvider>
    )
}

export default ListFamilyRefered;