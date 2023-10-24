import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { CreateFamilyMemberRequest, DeleteFamilyMember } from "../MemberFamily/request";
import { useFetchAllBenefits } from "../../Benefits/ListBenefits/request";
import { useFetchFamilyReferedId } from "../request";
import { CreateFamilyBenefitsRequest, DeleteFamilyBenefitsRequest, EditAddressRequest, EditUserIdentifyRequest } from "./request";
import queryClient from "../../../services/react-query";

export const EditFamilyReferedController = (id, setAddMember, setIsVerify, setIsError, show) => {

  const { data: familyReferedfetch, isLoading, error } = useFetchFamilyReferedId(id);

  // const { data: membersFamilyRequest, refetch } = useFetchAllFamilyMember();
  const history = useNavigate();

  const { data: benefitsfetch } = useFetchAllBenefits()



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
        queryClient.refetchQueries("FamilyReferedId")
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
        queryClient.refetchQueries("FamilyReferedId")
        show()
      },
    }
  );

  const EditAddressRequestMutation = useMutation(
    ({data, id}) =>  EditAddressRequest(data, id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)
        show()
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
        queryClient.refetchQueries("FamilyReferedId")
        show()
      },
    }
  );

  const CreateFamilyBenefitsRequestMutation = useMutation(
    (data) =>  CreateFamilyBenefitsRequest(data),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)
        show()
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
        queryClient.refetchQueries("FamilyReferedId")
        show()
      },
    }
  );

  const DeleteFamilyBenefitsMutation = useMutation(
    (id) =>  DeleteFamilyBenefitsRequest(id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        setIsError(error.response.data.message)
        show()
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
      
        queryClient.refetchQueries("FamilyReferedId")
  
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
        queryClient.refetchQueries("FamilyReferedId")

      },
    }
  );



  return {
    familyReferedfetch, isLoading, error, CreateFamilyRequestRequestMutation, 
    // membersFamilyRequest, 
    benefitsfetch,
    EditFamilyRequestRequestMutation, 
    DeleteMemberFamilyRequestMutation, 
    EditAddressRequestMutation, 
    CreateFamilyBenefitsRequestMutation,
    DeleteFamilyBenefitsMutation
  }
}