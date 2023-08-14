import { useState } from "react";
import { LoginController } from "../../sdk/Login/controller"
import * as Yup from 'yup';

export const LoginState = () => {
    const [error, setError] = useState()
    const initialValue = {
        email: "",
        password: ""
    }

    const LoginSchema = Yup.object().shape({
        password: Yup.string()
          .required('Campo Obrigatório'),
        email: Yup.string().email('email inválido').required('Campo Obrigatório'),
      });

    const {LoginRequestMutation} = LoginController({setError});

    const handleLogin = (body) => {
        LoginRequestMutation.mutate(body)
    }
    
    return{
        initialValue, handleLogin, LoginSchema, error
    }
}