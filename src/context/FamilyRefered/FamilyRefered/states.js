import { useEffect, useState } from "react";
import { UserIdentifyController } from "../../../sdk/FamilyRefered/UserIdentify/controller";

export const UserIdentifyState = () => {

    const {userIdentifyfetch, isLoading, error } = UserIdentifyController();
    const [userIdentify, setUserIdentifify] = useState([]);

    useEffect(() => {
        if(userIdentifyfetch){
            setUserIdentifify(userIdentifyfetch.data)
        }
    }, [userIdentifyfetch])
    

    return{
        userIdentify, isLoading, error
    }
}