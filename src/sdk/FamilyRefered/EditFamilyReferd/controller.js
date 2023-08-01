import { useMutation } from "react-query";
import { useFetchFamilyReferedId } from "../request"
import { CreateFamilyMemberRequest, useFetchAllFamilyMember } from "../MemberFamily/request";

export const EditFamilyReferedController = (id) => {

    const {data: familyReferedfetch, isLoading, error } = useFetchFamilyReferedId(id);

    const {data: membersFamilyRequest} = useFetchAllFamilyMember()
    
    const CreateFamilyRequestRequestMutation  = useMutation(
        (data) => CreateFamilyMemberRequest(data),
        {
          onError: (error) => {
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            console.log(data);
          },
        }
      );

    return {
        familyReferedfetch, isLoading, error, CreateFamilyRequestRequestMutation, membersFamilyRequest
    }
}