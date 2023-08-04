import { useMutation } from "react-query";
import { DeleteUserRequest, useFetchAllUser } from "./request"

export const UserController = () => {

    const {data: userfetch, isLoading, error, refetch } = useFetchAllUser()

    const DeleteTypesServicesRequestMutation = useMutation(
        (id) => DeleteUserRequest(id),
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
        userfetch, isLoading, error, DeleteTypesServicesRequestMutation
    }
}