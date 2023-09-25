import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateUserIdentifyRequest } from "../request";
import { logout } from "../../../services/localstorage";

export const CreateUserIdentifyController = () => {
    const history = useNavigate();

    const CreateUserIdentifyRequestMutation  = useMutation(
        (data) => CreateUserIdentifyRequest(data),
        {
          onError: (error) => {
            console.log(error)
            if (error.response.status === 401 | 403) {
              logout();
              // history("/login")
            }
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            console.log(data);
            history("/familia");
          },
        }
      );

    return{
        CreateUserIdentifyRequestMutation
    }
}