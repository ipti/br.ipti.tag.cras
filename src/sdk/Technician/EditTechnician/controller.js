import { useMutation } from "react-query";
import { EditTechnicianRequest, useFetchOneTechnician } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const EditTechnicianController = (id, setIsError, setIsVerify, show) => {

  const { data: technicianRequest, refetch } = useFetchOneTechnician(id);

  const history = useNavigate();


  const EditTechnicianRequestMutation = useMutation(
    (data) => EditTechnicianRequest(data, id),
    {
      onError: (error) => {
        setIsError(error.response.data.message)
        show()
        if (error.response.status === 401 | 403) {
          logout();
          history("/login")
        }

      },
      onSuccess: (data) => {
        console.log(data);
        refetch()
        setIsVerify(true)
        show()
      },

    }
  );

  return {
    technicianRequest, EditTechnicianRequestMutation, refetch
  }
}