import { useFetchAllTypesServices } from "./request"

export const TypesServicesController = () => {

    const {data: typesServicesfetch, isLoading, error } = useFetchAllTypesServices()

    return {
        typesServicesfetch, isLoading, error
    }
}