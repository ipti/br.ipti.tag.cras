import { useMutation } from "react-query";
import { EditUserIdentifyRequest, useFetchFamilyReferedId } from "../request"
import { CreateFamilyMemberRequest, useFetchAllFamilyMember } from "../MemberFamily/request";

export const EditFamilyReferedController = (id, setAddMember) => {

    const {data: familyReferedfetch, isLoading, error } = useFetchFamilyReferedId(id);

    const {data: membersFamilyRequest, refetch} = useFetchAllFamilyMember()
    
    const CreateFamilyRequestRequestMutation  = useMutation(
        (data) => CreateFamilyMemberRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            refetch()
            setAddMember(false)
            console.log(data);
          },
        }
      );

      const EditFamilyRequestRequestMutation  = useMutation(
        (data) => EditUserIdentifyRequest(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            refetch()
            setAddMember(false)
            console.log(data);
          },
        }
      );

      

    return {
        familyReferedfetch, isLoading, error, CreateFamilyRequestRequestMutation, membersFamilyRequest, EditFamilyRequestRequestMutation
    }
}