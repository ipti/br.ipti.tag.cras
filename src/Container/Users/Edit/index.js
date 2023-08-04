import React from "react";
import EditUserProvider from "../../../context/User/EditUser/context";
import EditUserScreen from "../../../Page/Users/EditUser";

const EditUser = () => {
    return(
        <EditUserProvider>
            <EditUserScreen />
        </EditUserProvider>
    )
}

export default EditUser;