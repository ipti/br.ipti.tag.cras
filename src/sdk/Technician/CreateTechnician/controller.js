import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateTechnicianRequest } from "./request";
import { logout } from "../../../services/localstorage";

export const CreateTechnicianController = () => {
  const history = useNavigate();

  const CreateTechnicianRequestMutation = useMutation(
    (data) => CreateTechnicianRequest(data),
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
        history("/tecnico");
      },

    }
  );

  return {
    CreateTechnicianRequestMutation
  }
}