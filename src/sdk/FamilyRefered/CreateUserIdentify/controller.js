import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateUserIdentifyRequest } from "../request";

export const CreateUserIdentifyController = () => {
    const history = useNavigate();

    const CreateUserIdentifyRequestMutation  = useMutation(
        (data) => CreateUserIdentifyRequest(data),
        {
          onError: (error) => {
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