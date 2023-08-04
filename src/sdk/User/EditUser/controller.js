import { useMutation } from "react-query";
import { EditUserRequest, useFetchOneUser } from "./request";

export const EditUserController = (id, setIsError, setIsVerify) => {

    const {data: UserRequest, refetch} = useFetchOneUser(id);

    const EditUserRequestMutation = useMutation(
        (data) => EditUserRequest(data, id),
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
        UserRequest, EditUserRequestMutation
    }
}