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

    const [addMember, setAddMember] = useState(false)
    const [open, setOpen] = useState(false)
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


    const estadosDoBrasil = [
        { uf: 'AC', nome: 'Acre' },
        { uf: 'AL', nome: 'Alagoas' },
        { uf: 'AP', nome: 'Amapá' },
        { uf: 'AM', nome: 'Amazonas' },
        { uf: 'BA', nome: 'Bahia' },
        { uf: 'CE', nome: 'Ceará' },
        { uf: 'DF', nome: 'Distrito Federal' },
        { uf: 'ES', nome: 'Espírito Santo' },
        { uf: 'GO', nome: 'Goiás' },
        { uf: 'MA', nome: 'Maranhão' },
        { uf: 'MT', nome: 'Mato Grosso' },
        { uf: 'MS', nome: 'Mato Grosso do Sul' },
        { uf: 'MG', nome: 'Minas Gerais' },
        { uf: 'PA', nome: 'Pará' },
        { uf: 'PB', nome: 'Paraíba' },
        { uf: 'PR', nome: 'Paraná' },
        { uf: 'PE', nome: 'Pernambuco' },
        { uf: 'PI', nome: 'Piauí' },
        { uf: 'RJ', nome: 'Rio de Janeiro' },
        { uf: 'RN', nome: 'Rio Grande do Norte' },
        { uf: 'RS', nome: 'Rio Grande do Sul' },
        { uf: 'RO', nome: 'Rondônia' },
        { uf: 'RR', nome: 'Roraima' },
        { uf: 'SC', nome: 'Santa Catarina' },
        { uf: 'SP', nome: 'São Paulo' },
        { uf: 'SE', nome: 'Sergipe' },
        { uf: 'TO', nome: 'Tocantins' }
      ];
    
      const escolaridadeNoBrasil = [
        "Educação Infantil",
        "Ensino Fundamental I (1º ao 5º ano)",
        "Ensino Fundamental II (6º ao 9º ano)",
        "Ensino Médio",
        "Ensino Técnico",
        "Ensino Superior - Graduação",
        "Cursando Ensino Superior",
        "Pós-graduação (Especialização)",
        "Pós-graduação (Mestrado)",
        "Pós-graduação (Doutorado)",
        "Educação de Jovens e Adultos (EJA) - Ensino Fundamental",
        "Educação de Jovens e Adultos (EJA) - Ensino Médio",
        "Cursos Profissionalizantes",
        "Cursos de Aperfeiçoamento e Extensão"
      ];
    
      const estadosCivis = [
        'Solteiro(a)',
        'Casado(a)',
        'Divorciado(a)',
        'Viúvo(a)',
        'Separado(a)',
        'União Estável',
        'Outro',
      ];
    
      const parentesco = [
        { id: "CONJUGE", name: 'Cônjuge' },
        { id: "FILHO_A", name: 'Filho(a)' },
        { id: "ENTEADO_A", name: 'Enteado(a)' },
        { id: "NETO_A", name: 'Neto(a)' },
        { id: "PAI", name: 'Pai' },
        { id: "MAE", name: 'Mãe' },
        { id: "SOGRO_A", name: 'Sogro(a)' },
        { id: "IRMAO_A", name: 'Irmão(a)' },
        { id: "GENRO", name: 'Genro' },
        { id: "NORA", name: 'Nora' },
        { id: "OUTRO", name: 'Outro' },
        { id: "NAO_PARENTE", name: 'Não Parente' }
      ]

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
        HandleCreateUserIdentify, deleteFamilyMember, family, parentesco, escolaridadeNoBrasil, estadosCivis, estadosDoBrasil, addMember, setAddMember, open, setOpen
    }
}