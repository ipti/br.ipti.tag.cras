import { logout } from "../../../../services/localstorage";
import queryClient from "../../../../services/react-query";
import { EditTechnicianVisitsRequest, useFetchTechnicianVisits } from "./request"
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";



export const ListTechnicianController = () => {
    const history = useNavigate();

    const { data: technicianVisitsRequests} = useFetchTechnicianVisits()

    
  const EditTechnicianVisitsRequestMutation = useMutation(
    ({data, id}) => EditTechnicianVisitsRequest(id, data),
    {
      onError: (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
        alert(error?.response?.data.message)
      },
      onSuccess: (data) => {
        queryClient.refetchQueries("TechnicianVisits")
      },

    }
  );

    return{
        technicianVisitsRequests, EditTechnicianVisitsRequestMutation
    }
}