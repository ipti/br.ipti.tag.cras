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
            logout()
            console.log(data.data.access_token)
            login(data.data.access_token);
            idUser(data.data.user.id)
            history("/");
            window.location.reload()
          },
        
        }
      );

    return{
        LoginRequestMutation
    }
}