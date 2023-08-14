import { createContext } from "react";
import { LoginState } from "./state";

export const LoginContext = createContext({});

const LoginProvider = ({children}) => {

    const { handleLogin, initialValue, LoginSchema, error } = LoginState();
    return (
        <LoginContext.Provider value={{ handleLogin, initialValue, LoginSchema, error }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;