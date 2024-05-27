import { useEffect, useState } from "react";
import { useFetchAllFamilyHC } from "../../../sdk/HappyChild/FamilyHC/request";

export const FamilyHCState = () => {

    const {familyHCfetch, isLoading, error } = useFetchAllFamilyHC();
    const [familyHCFamily, setFamilyHCFamily] = useState([]);

    useEffect(() => {
        if(familyHCfetch){
            setFamilyHCFamily(familyHCfetch)
        }
    }, [familyHCfetch])
    

    return{
        familyHCFamily, isLoading, error
    }
}