import { useEffect, useState } from "react"
import { MemberFamilyController } from "../../../sdk/FamilyRefered/MemberFamily/controller"
import { GetIdAttendance } from "../../../services/localstorage"
import queryClient from "../../../services/react-query"
import { useParams } from "react-router-dom"
import { useFetchFamilyReferedId } from "../../../sdk/FamilyRefered/request"

export const CompositionFamily = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        queryClient.removeQueries({ queryKey: "FamilyReferedId" })
        setLoading(true);
    }, [])


    const [family, setFamily] = useState();


    const { id } = useParams()

    const { data: familyReferedfetch } = useFetchFamilyReferedId(id);

    useEffect(() => {
        if (familyReferedfetch && loading) {
            setFamily(familyReferedfetch)
        }

        // if (membersRquest) {
        //   const filter = membersRquest.data.filter(member => `${member.id_identificacao_usuario}` === id);
        //   setMember(filter)
        // }

    }, [familyReferedfetch, id, loading])



    const { CreateUserIdentifyWithFamilyRequestMutation, DeleteMemberFamilyRequestMutation } = MemberFamilyController()

    const deleteFamilyMember = (id) => {
        DeleteMemberFamilyRequestMutation.mutate(id)
    }

    const HandleCreateUserIdentify = (data) => {

        CreateUserIdentifyWithFamilyRequestMutation.mutate({
            ...data, nis: parseInt(data.nis),
            cpf: data.cpf.replace(/\D/g, ''),
            rg_number: data.rg_number.replace(/\D/g, ''),
            uf_rg: data.uf_rg.uf,
            attendance_unity: parseInt(GetIdAttendance()),
            initial_date: new Date(Date.now()),
            family: family.id,
            kinship: data.kinship.id,
            birth_certificate: data.birth_certificate === "" ? null : data.birth_certificate,
        })
    }

    return {
        HandleCreateUserIdentify, deleteFamilyMember
    }
}