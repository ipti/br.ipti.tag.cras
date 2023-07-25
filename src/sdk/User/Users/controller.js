import { useFetchAllUser } from "./request"

export const UserController = () => {

    const {data: userfetch, isLoading, error } = useFetchAllUser()

    return {
        userfetch, isLoading, error
    }
}