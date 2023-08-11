import { useMutation } from "react-query";
import { EditFamilyMember, useFetchOneFamilyMember } from "../request"
import { logout } from "../../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const EditMemberController = (id, setOpen) => {
  const history = useNavigate();
  const { data: oneMemberFamily, refetch, error } = useFetchOneFamilyMember(id)

  // if (error?.response.status === 401 | 403) {
  //   logout();
  //   history("/login");
  // }


  const EditFamilyMemberRequestMutation = useMutation(
    (data) => EditFamilyMember(data, id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        if (error.response.status === 401 | 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
        refetch()
        setOpen(false)
        console.log(data);
      },
    }
  );

  return {
    oneMemberFamily, EditFamilyMemberRequestMutation, refetch
  }
}