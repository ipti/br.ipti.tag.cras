import { useEffect, useState } from "react";
import { useFetchOneUserAplication } from "../../sdk/Login/request";
import { GetIdUser } from "../../services/localstorage";

const AplicationState = () => {
    const [user, setUser] = useState({})

    const handleUser = (user) => {
        setUser(user)
    }


    const { data: userRequest } = useFetchOneUserAplication(GetIdUser())


    useEffect(() => {
        if (userRequest) {
            setUser(userRequest)
        }
    }, [userRequest])


    return {
        user, handleUser
    }
}

export default AplicationState;