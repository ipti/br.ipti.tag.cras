import { useMutation } from "react-query";
import { DeleteTypesServicesRequest, useFetchAllTypesServices } from "./request"
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";

export const TypesServicesController = () => {
  const history = useNavigate();

    const {data: typesServicesfetch, isLoading, error, refetch } = useFetchAllTypesServices()

    // if (error?.response.status === 401 | 403) {
    //   logout();
    //   history("/login")
    // }

    const DeleteTypesServicesRequestMutation = useMutation(
        (id) => DeleteTypesServicesRequest(id),
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
            refetch()
          },
    
        }
      );

    return {
        typesServicesfetch, isLoading, error, DeleteTypesServicesRequestMutation
    }
}