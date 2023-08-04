import React from "react";
import CreateUserScreen from "../../../Page/Users/CreateUser";
import CreateUserProvider from "../../../context/User/CreateUser/context";

const CreateUser = () => {
    return(
        <CreateUserProvider>
            <CreateUserScreen />
        </CreateUserProvider>
    )
}

export default CreateUser;