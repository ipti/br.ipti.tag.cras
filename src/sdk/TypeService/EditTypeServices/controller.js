import { useMutation } from "react-query";
import { EdittypesServicesRequest, useFetchOneTypesServices } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const EditTypesServicesController = (id, setIsError, setIsVerify) => {
  const history = useNavigate();

  const { data: TypeServiceRequest, refetch } = useFetchOneTypesServices(id);

  const EditTypesServicesRequestMutation = useMutation(
    (data) => EdittypesServicesRequest(data, id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)

        if (error.response.status === 401 | 403) {
          logout();
          history("/login")
        }

      },
      onSuccess: (data) => {
        console.log(data);
        refetch()
        setIsVerify(true)
      },

    }
  );

  return {
    TypeServiceRequest, EditTypesServicesRequestMutation
  }
}