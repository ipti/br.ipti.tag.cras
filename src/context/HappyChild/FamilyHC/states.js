import { useEffect, useState } from "react";
import { FamilyHCController } from "../../../sdk/HappyChild/FamilyHC/controller";

export const FamilyHCState = () => {

    const {familyHCfetch, isLoading, error } = FamilyHCController();
    const [familyHCFamily, setFamilyHCFamily] = useState([]);

    useEffect(() => {
        if(FamilyHCfetch){
            setFamilyHCFamily(FamilyHCfetch)
        }
    }, [familyHCfetch])
    

    return{
        familyHCFamily, isLoading, error
    }
}