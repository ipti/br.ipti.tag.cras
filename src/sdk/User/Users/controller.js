import { useMutation } from "react-query";
import { DeleteUserRequest, useFetchAllUser } from "./request"
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const UserController = () => {
  const history = useNavigate();

  const { data: userfetch, isLoading, error, refetch } = useFetchAllUser()

  // if (error?.response.status === 401 | 403) {
  //   logout();
  //   history("/login")
  // }

  const DeleteTypesServicesRequestMutation = useMutation(
    (id) => DeleteUserRequest(id),
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
    userfetch, isLoading, error, DeleteTypesServicesRequestMutation
  }
}