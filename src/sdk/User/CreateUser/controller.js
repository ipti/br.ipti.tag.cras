import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateUserRequest } from "./request";
import { logout } from "../../../services/localstorage";

export const CreateUserController = () => {
    const history = useNavigate();

    const CreateUserRequestMutation  = useMutation(
        (data) => CreateUserRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message)
            if (error.response.status === 401 | 403) {
              logout();
              history("/login")
            }
          },
          onSuccess: (data) => {
            console.log(data);
            history("/usuarios");
          },
        
        }
      );

    return{
        CreateUserRequestMutation
    }
}