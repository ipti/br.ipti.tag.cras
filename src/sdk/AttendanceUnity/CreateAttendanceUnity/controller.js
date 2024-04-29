import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { CreateAttendanceUnityRequest } from "./request";

export const CreateAttendanceController = () => {
  const history = useNavigate();



  const CreateAttendanceRequestMutation = useMutation(
    (data) => CreateAttendanceUnityRequest(data),
    {
      onError: (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
        alert(error.response.message)
      },
      onSuccess: () => {
        history("/unidades");
      },

    }
  );

  return {
    CreateAttendanceRequestMutation
  }
}