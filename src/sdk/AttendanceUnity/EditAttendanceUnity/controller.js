import { useMutation } from "react-query";
import { EditAddressRequest, EditAttendanceUnityRequest, useFetchOneAttendanceUnity } from "./request"
import { logout } from "../../../services/localstorage";
import { useNavigate, useParams } from "react-router-dom";

export const EditAttendanceUnity = () => {
    const {id} = useParams()

    const { data: oneAttendanceUnitRequest } = useFetchOneAttendanceUnity(id)

    const history = useNavigate();


    const EditAttendanceRequestMutation = useMutation(

        (data) => EditAttendanceUnityRequest(data, id),
        {
            onError: (error) => {
                console.log(error.response.data.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    logout();
                    history("/login")
                }
                alert(error?.response?.data.message)
            },
            onSuccess: (data) => {
                history("/unidades")

            },
        }
    );

    const EditAddressRequestMutation = useMutation(
        ({ data, id }) => EditAddressRequest(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
        
            if (error.response.status === 401 || error.response.status === 403) {
              logout();
              history("/login")
            }
            alert(error?.response?.data.message)

          },
          onSuccess: (data) => {
            
          },
        }
      );
    return {
        oneAttendanceUnitRequest, EditAttendanceRequestMutation, EditAddressRequestMutation
    }
}