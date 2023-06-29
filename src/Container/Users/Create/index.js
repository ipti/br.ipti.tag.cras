import React from "react";
import CreateUserProvider from "./context/context";
import CreateUserScreen from "../../../Page/Users/CreateUser";

const CreateUser = () => {
    return(
        <CreateUserProvider>
            <CreateUserScreen />
        </CreateUserProvider>
    )
}

export default CreateUser;