import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CreateTypesServicesRequest } from "./request";
import { logout } from "../../../services/localstorage";

export const CreateTypesServicesController = () => {
  const history = useNavigate();

  const CreateTypesServicesRequestMutation = useMutation(
    (data) => CreateTypesServicesRequest(data),
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
        history("/servico");
      },

    }
  );

  return {
    CreateTypesServicesRequestMutation
  }
}