import { useMutation } from "react-query";
import { CreateForwardingRequest, useFetchAllForwarding, useFetchAllForwardingFamily } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate, useParams } from "react-router-dom";

export const FamilyForwardingController = () => {
    const history = useNavigate();
    const {id} = useParams()
    const { data: forwardingFamilyfetch, refetch } = useFetchAllForwardingFamily(id)
    const {data: forwardingfetch} =useFetchAllForwarding()
    
    const CreateForwardingRequestMutation = useMutation(
        (data) => CreateForwardingRequest(data),
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
                refetch()
            },
        }
    );




    // if (error?.response.status === 401 | 403) {
    //     logout();
    //     history("/login")
    // }



    return {
        forwardingFamilyfetch, CreateForwardingRequestMutation, forwardingfetch
    }
}