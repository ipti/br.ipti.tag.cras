import React from "react";
import UserPage from "../../../Page/Users/Users";
import UserProvider from "../../../context/User/context";

const Users = () => {


    return (
        <UserProvider>
            <UserPage />
        </UserProvider>
    )
}

export default Users;