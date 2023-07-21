import { useMutation } from "react-query";
import { LoginRequest } from "./request";
import { useNavigate } from "react-router-dom";

export const LoginController = () => {
    const history = useNavigate();

    const LoginRequestMutation  = useMutation(
        (data) => LoginRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            console.log(data);
            history("/");
          },
        
        }
      );

    return{
        LoginRequestMutation
    }
}