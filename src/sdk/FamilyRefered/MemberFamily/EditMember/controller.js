import { useMutation } from "react-query";
import { EditFamilyMember, useFetchOneFamilyMember } from "../request"
import { logout } from "../../../../services/localstorage";
import { useNavigate } from "react-router-dom";

export const EditMemberController = (id, setOpen, toast) => {
  const history = useNavigate();
  const { data: oneMemberFamily, refetch } = useFetchOneFamilyMember(id)

  // if (error?.response.status === 401 | 403) {
  //   logout();
  //   history("/login");
  // }


  const EditFamilyMemberRequestMutation = useMutation(
    (data) => EditFamilyMember(data, id),
    {
      onError: (error) => {
        console.log(error.response.data.message)
        if (error.response.status === 401 || error.response.status === 403) {
          logout();
          history("/login")
        }
      },
      onSuccess: (data) => {
        refetch()
        setOpen(false)
        console.log(data);
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
      },
    }
  );

  return {
    oneMemberFamily, EditFamilyMemberRequestMutation, refetch
  }
}