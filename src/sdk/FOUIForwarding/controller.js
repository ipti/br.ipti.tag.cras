import { useMutation } from "react-query";
import { useNavigate} from "react-router-dom";
import { logout } from "../../services/localstorage";
import { EditFOUIForwardingRequest } from "./requests";
import queryClient from "../../services/react-query";

export const FamilyForwardingController = () => {

    const history = useNavigate();
    
    const EditFOUIForwardingRequestMutation = useMutation(
        ({data, id}) => EditFOUIForwardingRequest(data, id),
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
                queryClient.refetchQueries("AllForwardingFamily")
            },
        }
    );

    return {
        EditFOUIForwardingRequestMutation
    }
}