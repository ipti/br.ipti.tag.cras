import { useEffect, useState } from "react";
import { UserController } from "../../sdk/User/Users/controller"

export const UserState = () => {

    const {userfetch, isLoading, error } = UserController();
    const [user, setUser] = useState([]);

    useEffect(() => {
        if(userfetch){
            setUser(userfetch.data.data)
        }
    }, [userfetch])
    

    return{
        user, isLoading, error
    }
}