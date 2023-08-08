import { useMutation } from "react-query";
import { EditFamilyMember, useFetchOneFamilyMember } from "../request"

export const EditMemberController = (id) => {
    const {data: oneMemberFamily, refetch} = useFetchOneFamilyMember(id)


    const EditFamilyMemberRequestMutation  = useMutation(
        (data) => EditFamilyMember(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            refetch()
            // setAddMember(false)
            console.log(data);
          },
        }
      );

    return{
        oneMemberFamily, EditFamilyMemberRequestMutation, refetch
    }
}