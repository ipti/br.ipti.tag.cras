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
            if (error.response.status === 401 || error.response.status === 403) {
              logout();
              history("/login")
            }
            alert(error?.response?.data.message)
          },
          onSuccess: (data) => {
            history("/usuarios");
          },
        
        }
      );

    return{
        CreateUserRequestMutation
    }
}