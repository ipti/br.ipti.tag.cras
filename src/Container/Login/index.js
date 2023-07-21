import React from "react";
import LoginPage from "../../Page/Login";
import LoginProvider from "../../context/Login/context";

const Login = () => {
    return (
        <LoginProvider>
            <LoginPage />
        </LoginProvider>
    )
}

export default Login;