import { useEffect, useState } from "react"
import { FamilyForwardingController } from "../../../sdk/FamilyForwarding/FamilyForwarding/controller"

export const FamilyForwardingState = () => {
    const {forwardingFamilyfetch, CreateForwardingRequestMutation, forwardingfetch} = FamilyForwardingController()
    const [FamilyForwarding, setFamilyForwarding] = useState()
    const [forwarding, setForwarding] = useState()


    useEffect(() => {
        if (forwardingFamilyfetch) {
            setFamilyForwarding(forwardingFamilyfetch)
        }
        if(forwardingfetch){
            setForwarding(forwardingfetch)
        }
    }, [forwardingFamilyfetch, forwardingfetch])

    const CreateForwarding = (body) => {
        CreateForwardingRequestMutation.mutate(body)
    }

    return {
        FamilyForwarding, CreateForwarding, forwarding
    }
}