import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateTypesServicesRequest } from "./request";

export const CreateTypesServicesController = () => {
  const history = useNavigate();

  const CreateTypesServicesRequestMutation = useMutation(
    (data) => CreateTypesServicesRequest(data),
    {
      onError: (error) => {
        console.log(error.response.data.message)
      },
      onSuccess: (data) => {
        console.log(data);
        history("/servico");
      },

    }
  );

  return {
    CreateTypesServicesRequestMutation
  }
}