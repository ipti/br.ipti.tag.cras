import { useEffect, useState } from "react";
import { UserController } from "../../../sdk/User/Users/controller"

export const UserState = () => {

    const {userfetch, isLoading, error, DeleteTypesServicesRequestMutation } = UserController();

    const deleteUser = (id) => {
        DeleteTypesServicesRequestMutation.mutate(id);
    }
    const [user, setUser] = useState([]);

    useEffect(() => {
        if(userfetch){
            setUser(userfetch.data)
        }
    }, [userfetch])
    

    return{
        user, isLoading, error, deleteUser
    }
}