import { useEffect, useState } from "react";
import { UserIdentifyController } from "../../../sdk/FamilyRefered/UserIdentify/controller";

export const UserIdentifyState = () => {

    const {userIdentifyfetch, isLoading, error } = UserIdentifyController();
    const [userIdentifyFamily, setUserIdentifyFamily] = useState([]);

    useEffect(() => {
        if(userIdentifyfetch){
            setUserIdentifyFamily(userIdentifyfetch)
        }
    }, [userIdentifyfetch])
    

    return{
        userIdentifyFamily, isLoading, error
    }
}