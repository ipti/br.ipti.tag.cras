import { useMutation } from "react-query";
import { CreateFamilyMemberRequest, DeleteFamilyMember, useFetchAllFamilyMember } from "../MemberFamily/request";
import { EditUserIdentifyRequest, useFetchFamilyReferedId } from "../request";

export const EditFamilyReferedController = (id, setAddMember, setIsVerify, setIsError) => {

    const {data: familyReferedfetch, isLoading, error } = useFetchFamilyReferedId(id);

    const {data: membersFamilyRequest, refetch} = useFetchAllFamilyMember();

    
    const CreateFamilyRequestRequestMutation  = useMutation(
        (data) => CreateFamilyMemberRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message)
            setIsError(error.response.data.message)
          },
          onSuccess: (data) => {
            refetch()
            setAddMember(false)
            console.log(data);
            setIsVerify(true)
          },
        }
      );

      const EditFamilyRequestRequestMutation  = useMutation(
        (data) => EditUserIdentifyRequest(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
            setIsError(error.response.data.message)

          },
          onSuccess: (data) => {
            refetch()
            setAddMember(false)
            console.log(data);
            setIsVerify(true)
          },
        }
      );

      const DeleteMemberFamilyRequestMutation  = useMutation(
        (data) => DeleteFamilyMember(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
            setIsError(error.response.data.message)

          },
          onSuccess: (data) => {
            refetch()
            setAddMember(false)
            console.log(data);
            setIsVerify(true)

          },
        }
      );

      

    return {
        familyReferedfetch, isLoading, error, CreateFamilyRequestRequestMutation, membersFamilyRequest, EditFamilyRequestRequestMutation,DeleteMemberFamilyRequestMutation
    }
}