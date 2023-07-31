import { useFetchFamilyReferedId } from "../request"

export const EditFamilyReferedController = (id) => {

    const {data: familyReferedfetch, isLoading, error } = useFetchFamilyReferedId(id)

    return {
        familyReferedfetch, isLoading, error
    }
}