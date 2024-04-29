import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { DeleteAttendanceRequest, useFetchAllAttendanceUnity } from "./request";

export const AttendanceUnityController = () => {
  const history = useNavigate();

  const { data: attendancefetch, isLoading, error,  refetch} = useFetchAllAttendanceUnity()

  const DeleteAttendanceRequestMutation = useMutation(
    (id) => DeleteAttendanceRequest(id),
    {
      onError: (error) => {
        
        alert(error.response.data.message)
        if (error.response.status === 401) {
          logout();
          history("/login")

        }
      },
      onSuccess: () => {
        refetch()
      },

    }
  );

  
  return {
    attendancefetch, isLoading, error, DeleteAttendanceRequestMutation
  }
}