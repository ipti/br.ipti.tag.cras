import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateUserRequest } from "./request";

export const CreateUserController = () => {
    const history = useNavigate();

    const CreateUserRequestMutation  = useMutation(
        (data) => CreateUserRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message)
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