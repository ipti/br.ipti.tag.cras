import { createContext } from "react";
import { LoginState } from "./state";

export const LoginContext = createContext({});

const LoginProvider = ({children}) => {

    const { handleLogin, initialValue, LoginSchema } = LoginState();
    return (
        <LoginContext.Provider value={{ handleLogin, initialValue, LoginSchema }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;