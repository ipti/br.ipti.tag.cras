import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { CreateFamilyMemberRequest, DeleteFamilyMember } from "../MemberFamily/request";
import { EditUserIdentifyRequest, useFetchFamilyReferedId } from "../request";

export const EditFamilyReferedController = (id, setAddMember, setIsVerify, setIsError, show) => {

  const { data: familyReferedfetch, isLoading, error } = useFetchFamilyReferedId(id);

  // const { data: membersFamilyRequest, refetch } = useFetchAllFamilyMember();
  const history = useNavigate();


  const CreateFamilyRequestRequestMutation = useMutation(
    (data) => CreateFamilyMemberRequest(data),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
        // refetch()
        setAddMember(false)
        console.log(data);
        setIsVerify(true)
      },
    }
  );

  const EditFamilyRequestRequestMutation = useMutation(
    (data) => EditUserIdentifyRequest(data, id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)
        show()
        if (error.response.status === 401 | 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
        // refetch()
        setAddMember(false)
        console.log(data);
        setIsVerify(true)
        show()
      },
    }
  );

  const DeleteMemberFamilyRequestMutation = useMutation(
    (data) => DeleteFamilyMember(data, id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)
        if (error.response.status === 401 | 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
        // refetch()
        setAddMember(false)
        console.log(data);
        setIsVerify(true)

      },
    }
  );



  return {
    familyReferedfetch, isLoading, error, CreateFamilyRequestRequestMutation, 
    // membersFamilyRequest, 
    EditFamilyRequestRequestMutation, DeleteMemberFamilyRequestMutation
  }
}