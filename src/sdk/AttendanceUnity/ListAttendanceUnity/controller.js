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
        console.log(error.response.data.message)
        alert(error.response.data.message)
        if (error.response.status === 401) {
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

  // if (error?.response.status === 401 | 403) {
  //   logout();
  //   history("/login")
  // }
//   const DeleteTechnicianRequestMutation = useMutation(
//     (id) => DeleteTechnicianRequest(id),
//     {
//       onError: (error) => {
//         console.log(error.response.data.message)
//         if (error.response.status === 401 | 403) {
//           logout();
//           history("/login")
//         }
//       },
//       onSuccess: (data) => {
//         console.log(data);
//         refetch()
//       },

//     }
//   );

  return {
    attendancefetch, isLoading, error, DeleteAttendanceRequestMutation
  }
}