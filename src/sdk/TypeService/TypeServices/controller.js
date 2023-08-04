import { useMutation } from "react-query";
import { DeleteTypesServicesRequest, useFetchAllTypesServices } from "./request"

export const TypesServicesController = () => {

    const {data: typesServicesfetch, isLoading, error, refetch } = useFetchAllTypesServices()

    const DeleteTypesServicesRequestMutation = useMutation(
        (id) => DeleteTypesServicesRequest(id),
        {
          onError: (error) => {
            console.log(error.response.data.message)

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