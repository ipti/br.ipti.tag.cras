import { Status } from "../../../Controller/controllerGlobal";

export const EditTrackingState = () => {
    const status = [
        {id: Status.PENDENTE, name: "Pendente"},
        {id: Status.DEFERIDO, name: "Deferido"},
        {id: Status.INDEFERIDO, name: "Indeferido"},
    ]

    const handleEditTracking = (body) => {
        EditTrackingRequestMutation.mutate({ ...body, status: body.status.id })
    }

    return {
        handleEditTracking, status
    }
}