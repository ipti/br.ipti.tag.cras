import { useMutation } from "react-query";
import { LoginRequest } from "./request";
import { useNavigate } from "react-router-dom";
import { idUser, login, logout } from "../../services/localstorage";

export const LoginController = ({setError}) => {
    const history = useNavigate();

    const LoginRequestMutation  = useMutation(
        (data) => LoginRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message);
            setError(error.response.data.message)          
          },
          onSuccess: (data) => {
            console.log(data.data.data.token);
            logout()
            login(data.data.data.token);
            idUser(data.data.data.id)
            history("/");
            window.location.reload()
          },
        
        }
      );

    return{
        LoginRequestMutation
    }
}