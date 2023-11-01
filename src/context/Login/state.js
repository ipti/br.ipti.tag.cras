import { useContext, useState } from "react";
import { LoginController } from "../../sdk/Login/controller"
import * as Yup from 'yup';
import { AplicationContext } from "../Aplication/context";

export const LoginState = () => {
    const [error, setError] = useState()
    const {handleUser, user} = useContext(AplicationContext)
    console.log(handleUser)
    const initialValue = {
        username: "",
        password: ""
    }

    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .required('Campo Obrigatório'),
        username: Yup.string().required('Campo Obrigatório'),
    });

    const { LoginRequestMutation } = LoginController({ setError, handleUser });

    const handleLogin = (body) => {
        LoginRequestMutation.mutate(body)

    }

    return {
        initialValue, handleLogin, LoginSchema, error
    }
}