import { useFetchAllBenefits } from "./request";

export const BenefitsController = () => {
//   const history = useNavigate();

  const { data: benefitsfetch, isLoading, error, } = useFetchAllBenefits()


  // if (error?.response.status === 401 | 403) {
  //   logout();
  //   history("/login")
  // }
//   const DeleteTechnicianRequestMutation = useMutation(
//     (id) => DeleteTechnicianRequest(id),
//     {
//       onError: (error) => {
//         console.log(error.response.data.message)
//         if (error.response.status === 401 | 403) {
//           logout();
//           history("/login")
//         }
//       },
//       onSuccess: (data) => {
//         console.log(data);
//         refetch()
//       },

//     }
//   );

  return {
    benefitsfetch, isLoading, error
  }
}