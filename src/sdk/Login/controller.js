import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { idUser, login, logout, menuItem } from "../../services/localstorage";
import { LoginRequest } from "./request";

export const LoginController = ({setError, handleUser}) => {
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
            menuItem(1)
            window.location.reload()
          },
        
        }
      );

    return{
        LoginRequestMutation
    }
}