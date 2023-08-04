import { useMutation } from "react-query";
import { EditTechnicianRequest, useFetchOneTechnician } from "./request";

export const EditTechnicianController = (id, setIsError, setIsVerify) => {

    const {data: technicianRequest, refetch} = useFetchOneTechnician(id);

    

    const EditTechnicianRequestMutation = useMutation(
        (data) => EditTechnicianRequest(data, id),
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
        technicianRequest, EditTechnicianRequestMutation
    }
}