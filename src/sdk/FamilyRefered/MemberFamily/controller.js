import { useMutation } from "react-query";
import { CreateUserIdentifyWithFamilyRequest, DeleteFamilyMember } from "./request";
import { logout } from "../../../services/localstorage";
import { useNavigate } from "react-router-dom";
import queryClient from "../../../services/react-query";
import { EditUserIdentifyRequest } from "../request";

export const MemberFamilyController = () => {

    const history = useNavigate();


    const DeleteMemberFamilyRequestMutation = useMutation(
        (id) => DeleteFamilyMember(id),
        {
            onError: (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    logout();
                    history("/login")
                }
                alert(error?.response?.data.message)

            },
            onSuccess: (data) => {
                queryClient.refetchQueries("FamilyReferedId")
            },
        }
    );

    const CreateUserIdentifyWithFamilyRequestMutation = useMutation(
        (data) => CreateUserIdentifyWithFamilyRequest(data),
        {
            onError: (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    logout();
                    history("/login")
                }
                alert(error?.response?.data.message)

            },
            onSuccess: (data) => {
                queryClient.refetchQueries("FamilyReferedId")
            },
        }
    );

    const EditFamilyRequestRequestMutation = useMutation(
        ({ data, id }) => EditUserIdentifyRequest(data, id),
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
            // refetch()
           queryClient.refetchQueries("FamilyReferedId")
          },
        }
      );

    return {
        DeleteMemberFamilyRequestMutation, CreateUserIdentifyWithFamilyRequestMutation, EditFamilyRequestRequestMutation
    }
}