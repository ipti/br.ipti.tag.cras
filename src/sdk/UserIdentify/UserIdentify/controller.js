import { useFetchAllUserIdentify } from "../request"

export const UserIdentifyController = () => {

    const {data: userIdentifyfetch, isLoading, error } = useFetchAllUserIdentify()

    return {
        userIdentifyfetch, isLoading, error
    }
}