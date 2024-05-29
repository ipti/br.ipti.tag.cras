import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useFetchAllFamilyHC } from "../../../sdk/HappyChild/FamilyHC/request";

export const FamilyHCState = () => {

    const {familyHCfetch, isLoading, error } = useFetchAllFamilyHC();
    const [familyHCFamily, setFamilyHCFamily] = useState([]);

    useEffect(() => {
        if(familyHCfetch){
            setFamilyHCFamily(familyHCfetch)
=======
import { FamilyHCController } from "../../../sdk/HappyChild/FamilyHC/controller";

export const FamilyHCState = () => {

    const {familyHCfetch, isLoading, error } = FamilyHCController();
    const [familyHCFamily, setFamilyHCFamily] = useState([]);

    useEffect(() => {
        if(FamilyHCfetch){
            setFamilyHCFamily(FamilyHCfetch)
>>>>>>> 934d3c805e1f7b73812cc389d1c8b50ea2f74c74
        }
    }, [familyHCfetch])
    

    return{
        familyHCFamily, isLoading, error
    }
}