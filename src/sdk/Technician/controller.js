import { useFetchAllTechnician } from "./request"

export const TechnicianController = () => {

    const {data: technicianfetch, isLoading, error } = useFetchAllTechnician()

    return {
        technicianfetch, isLoading, error
    }
}