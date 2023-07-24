import { useFetchAllService } from "./request"


export const ServiceController = () => {

    const {data: servicefetch, isLoading, error } = useFetchAllService()

    return {
        servicefetch, isLoading, error
    }
}