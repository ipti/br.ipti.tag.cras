import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/localstorage";
import { useFetchAllBenefits } from "../../Benefits/ListBenefits/request";
import { useFetchFamilyReferedId } from "../request";
import { CreateCondicionalitiesRequest, CreateFamilyBenefitsRequest, DeleteFamilyBenefitsRequest, DeleteFamilyRequest, EditAddressRequest, EditFamilyRequest, EditUserIdentifyRequest, EditVulnerabilityRequest } from "./request";
import queryClient from "../../../services/react-query";

export const EditFamilyReferedController = (id, setAddMember, setIsVerify, setIsError, show) => {

  const { data: familyReferedfetch, isLoading, error, refetch } = useFetchFamilyReferedId(id);

  // const { data: membersFamilyRequest, refetch } = useFetchAllFamilyMember();
  const history = useNavigate();

  const { data: benefitsfetch } = useFetchAllBenefits()

  const EditFamilyRequestRequestMutation = useMutation(
    ({ data, id }) => EditUserIdentifyRequest(data, id),
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
        refetch()
        show()
      },
    }
  );

  const EditFamilyIsActiveRequestMutation = useMutation(
    ({ data, id }) => EditFamilyRequest(data, id),
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
        queryClient.refetchQueries("FamilyReferedId")
      },
    }
  );

  const EditVulnerabilityRequestMutation = useMutation(
    ({ data, id }) => EditVulnerabilityRequest(data, id),
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
        refetch()
        show()
      },
    }
  );

  const EditAddressRequestMutation = useMutation(
    ({ data, id }) => EditAddressRequest(data, id),
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
        refetch()
        show()
      },
    }
  );

  const CreateFamilyBenefitsRequestMutation = useMutation(
    (data) => CreateFamilyBenefitsRequest(data),
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
        refetch()
        show()
      },
    }
  );

  const EditFamilyCondicionalitiesRequestMutation = useMutation(
    (data) => CreateCondicionalitiesRequest(data),
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
        refetch()
        show()
      },
    }
  );


  const DeleteFamilyBenefitsMutation = useMutation(
    (id) => DeleteFamilyBenefitsRequest(id),
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

        refetch()

      },
    }
  );

  const DeleteFamilyMutation = useMutation(
    (id) => DeleteFamilyRequest(id),
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

        history("/familia")
      },
    }
  );













  return {
    familyReferedfetch, isLoading, error,
    benefitsfetch,
    EditFamilyRequestRequestMutation,
    EditAddressRequestMutation,
    CreateFamilyBenefitsRequestMutation,
    DeleteFamilyBenefitsMutation,
    EditVulnerabilityRequestMutation,
    EditFamilyIsActiveRequestMutation,
    DeleteFamilyMutation,
    EditFamilyCondicionalitiesRequestMutation
  }
}