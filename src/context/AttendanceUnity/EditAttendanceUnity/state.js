import { useEffect, useState } from "react"
import { EditAttendanceUnity } from "../../../sdk/AttendanceUnity/EditAttendanceUnity/controller"
import queryClient from "../../../services/react-query"

export const EditAttendanceUnityState = () => {

    const { oneAttendanceUnitRequest, EditAttendanceRequestMutation, EditAddressRequestMutation } = EditAttendanceUnity()
    const [oneAttendance, setoneAttendance] = useState();

    const HandleEditAttendance = (body) => {

        const bodyAttendance = {
            name: body.name,
            unity_number: body.unity_number.toString(),
            email: body.email,
        }

        const bodyAddress = {
            address: body.address,
            telephone: body.telephone.replace(/\D/g, ''),
            reference: body.reference,
            conditions: body.conditions,
            construction_type: body.construction_type,
            rooms: body.rooms,
            rent_value: body.rent_value
        }

        EditAddressRequestMutation.mutate({ data: bodyAddress, id: oneAttendance?.address_fk })

        EditAttendanceRequestMutation.mutate(bodyAttendance)
    }

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        queryClient.removeQueries({ queryKey: "OneAttendanceUnity" })
        setLoading(true);
    }, [])

    useEffect(() => {
        if (oneAttendanceUnitRequest && loading) {
            setoneAttendance(oneAttendanceUnitRequest)
        }
    }, [oneAttendanceUnitRequest, loading])

    return {
        oneAttendance, HandleEditAttendance
    }
}