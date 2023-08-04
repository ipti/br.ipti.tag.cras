import { useMutation } from "react-query";
import { DeleteTechnicianRequest, useFetchAllTechnician } from "./request";

export const TechnicianController = () => {

    const {data: technicianfetch, isLoading, error, refetch } = useFetchAllTechnician()

    const DeleteTechnicianRequestMutation = useMutation(
        (id) => DeleteTechnicianRequest(id),
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
        technicianfetch, isLoading, error, DeleteTechnicianRequestMutation
    }
}