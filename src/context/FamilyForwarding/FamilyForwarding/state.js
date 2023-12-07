import { useEffect, useState } from "react"
import { FamilyForwardingController } from "../../../sdk/FamilyForwarding/FamilyForwarding/controller"
import { useFetchFamilyReferedId } from "../../../sdk/FamilyRefered/request"
import { useParams } from "react-router-dom"

export const FamilyForwardingState = () => {
    const {forwardingFamilyfetch, CreateForwardingRequestMutation, forwardingfetch} = FamilyForwardingController()
    // const {} = Family
    const [FamilyForwarding, setFamilyForwarding] = useState()
    const [forwarding, setForwarding] = useState()
    const [familyOne, setFamilyOne] = useState()
    const {id} = useParams()
    const { data: familyReferedfetch} = useFetchFamilyReferedId(id);

    useEffect(() => {
        if(familyReferedfetch){
            setFamilyOne(familyReferedfetch)
        }
        if (forwardingFamilyfetch) {
            setFamilyForwarding(forwardingFamilyfetch)
        }
        if(forwardingfetch){
            setForwarding(forwardingfetch)
        }
    }, [forwardingFamilyfetch, forwardingfetch, familyReferedfetch])

    const CreateForwarding = (body) => {
        CreateForwardingRequestMutation.mutate(body)
    }

    return {
        FamilyForwarding, CreateForwarding, forwarding, familyOne
    }
}