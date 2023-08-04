import { useMutation } from "react-query";
import { EdittypesServicesRequest, useFetchOneTypesServices } from "./request";

export const EditTypesServicesController = (id, setIsError, setIsVerify) => {

    const {data: TypeServiceRequest, refetch} = useFetchOneTypesServices(id);

    const EditTypesServicesRequestMutation = useMutation(
        (data) => EdittypesServicesRequest(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
            setIsError(error.response.data.message)

          },
          onSuccess: (data) => {
            console.log(data);
            refetch()
            setIsVerify(true)
          },
    
        }
      );

    return{
        TypeServiceRequest, EditTypesServicesRequestMutation
    }
}