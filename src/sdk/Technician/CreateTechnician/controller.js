import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateTechnicianRequest } from "./request";

export const CreateTechnicianController = () => {
  const history = useNavigate();

  const CreateTechnicianRequestMutation = useMutation(
    (data) => CreateTechnicianRequest(data),
    {
      onError: (error) => {
        console.log(error.response.data.message)
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