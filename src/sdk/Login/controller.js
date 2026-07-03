import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { idAttendance, idUser, login, logout, menuItem, setUserData } from "../../services/localstorage";
import { LoginRequest } from "./request";

export const LoginController = ({setError, handleUser}) => {
    const history = useNavigate();

    const LoginRequestMutation  = useMutation(
        (data) => LoginRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message);
            setError(error.response.data.message)          
          },
          onSuccess: (data) => {
            const user = data.data.user;
            logout()
            login(data.data.access_token);
            idUser(user.id)
            if (user.attendance_unity_ids?.length > 0) {
              idAttendance(user.attendance_unity_ids[0]);
            }
            setUserData(user)
            history("/");
            menuItem(1)
            window.location.reload()
          },
        
        }
      );

    return{
        LoginRequestMutation
    }
}