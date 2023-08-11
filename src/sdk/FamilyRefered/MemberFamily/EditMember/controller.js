import { useMutation } from "react-query";
import { EditFamilyMember, useFetchOneFamilyMember } from "../request"

export const EditMemberController = (id, setOpen) => {
    const {data: oneMemberFamily, refetch} = useFetchOneFamilyMember(id)


    const EditFamilyMemberRequestMutation  = useMutation(
        (data) => EditFamilyMember(data, id),
        {
          onError: (error) => {
            console.log(error.response.data.message)
          },
          onSuccess: (data) => {
            refetch()
            setOpen(false)
            console.log(data);
          },
        }
      );

    return{
        oneMemberFamily, EditFamilyMemberRequestMutation, refetch
    }
}