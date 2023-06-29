import React from "react";
import ListFamilyReferedProvider from "./context/context";
import ListFamilyReferedScreen from "../../../Page/FamilyRefered/ListFamilyRefered";

const ListFamilyRefered = () => {
    return(
        <ListFamilyReferedProvider>
            <ListFamilyReferedScreen />
        </ListFamilyReferedProvider>
    )
}

export default ListFamilyRefered;