import { useFetchTechnicianVisits } from "./request"

export const ListTechnicianController = () => {

    const { data: technicianVisitsRequests} = useFetchTechnicianVisits()


    return{
        technicianVisitsRequests
    }
}