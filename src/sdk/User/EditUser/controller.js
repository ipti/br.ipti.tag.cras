import { useMutation } from "react-query";
import { EditUserRequest, useFetchOneUser } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const EditUserController = (id, setIsError, setIsVerify, show) => {
  const history = useNavigate();

    const {data: UserRequest, refetch} = useFetchOneUser(id);

    // if (error?.response.status === 401 | 403) {
    //   logout();
    //   history("/login")
    // }

    const EditUserRequestMutation = useMutation(
        (data) => EditUserRequest(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
            setIsError(error.response.data.message)
            show()
            if (error.response.status === 401 | 403) {
              logout();
              history("/login")
            }
            alert(error?.response?.data.message)

          },
          onSuccess: (data) => {
            console.log(data);
            refetch()
            setIsVerify(true)
            show()
          },
    
        }
      );

    return{
        UserRequest, EditUserRequestMutation
    }
}