import { Status } from "../../../Controller/controllerGlobal";
import { FamilyForwardingController } from "../../../sdk/FOUIForwarding/controller";

export const EditForwardingState = () => {
    const status = [
        {id: Status.PENDENTE, name: "Pendente"},
        {id: Status.DEFERIDO, name: "Deferido"},
        {id: Status.INDEFERIDO, name: "Indeferido"},
    ]

    const{EditFOUIForwardingRequestMutation} = FamilyForwardingController()

    const handleEditForwarding= (body, id) => {
        EditFOUIForwardingRequestMutation.mutate({ data: {...body, status: body.status.id}, id: id })
    }

    return {
        handleEditForwarding, status
    }
}