import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { EditFamilyReferedController } from "../../../sdk/FamilyRefered/EditFamilyReferd/controller";
import queryClient from "../../../services/react-query";
import { MemberFamilyController } from "../../../sdk/FamilyRefered/MemberFamily/controller";



const EditRferedState = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    queryClient.removeQueries({ queryKey: "FamilyReferedId" })
    setLoading(true);
  }, [])

  const [activeStep, setActiveStep] = useState(0);
  const [addMember, setAddMember] = useState(false)
  const [open, setOpen] = useState(false)
  const [values, setDataValues] = useState({});
  const [family, setFamily] = useState();


  const { id } = useParams()

  const [isVerify, setIsVerify] = useState(true)
  const [isError, setIsError] = useState("")

  const toast = useRef(null);


  const show = () => {
    if (isVerify) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
    } else {
      toast.current.show({ severity: 'error', summary: 'Error', detail: isError });
    }
  }

  const {
    familyReferedfetch,
    CreateFamilyRequestRequestMutation,
    // membersRquest,
    DeleteFamilyBenefitsMutation,
    EditFamilyRequestRequestMutation,
    EditAddressRequestMutation,
    benefitsfetch,
    CreateFamilyBenefitsRequestMutation,
    EditVulnerabilityRequestMutation
  } = EditFamilyReferedController(id, setAddMember, setIsVerify, setIsError, setOpen, show);

  const { CreateUserIdentifyWithFamilyRequestMutation, DeleteMemberFamilyRequestMutation } = MemberFamilyController()


  useEffect(() => {
    if (familyReferedfetch && loading) {
      setFamily(familyReferedfetch)
    }

    // if (membersRquest) {
    //   const filter = membersRquest.data.filter(member => `${member.id_identificacao_usuario}` === id);
    //   setMember(filter)
    // }

  }, [familyReferedfetch, id, loading])

  const sexo = [
    "Masculino",
    "Feminino",
    "Outro"
  ]



  const deleteMember = (id) => {
    DeleteMemberFamilyRequestMutation.mutate(id)
  }
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
    { id: "RESPONSAVEL", name: 'Responsável' },
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




  const nextStep = (values) => {
    let data = Object.assign(values, values);
    setDataValues(data);

    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  }

  const backStep = () => {

    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  }


  const handleFamiliaRefered = (values) => {

    const bodyUserIdentify = {
      name: values?.name,
      surname: values?.surname === "" ? undefined : values?.surname,
      birthday: values?.birthday,
      nis: values?.nis === "" ? undefined : parseInt(values?.nis),
      folder: values.folder,
      archive: values.archive,
      number: values.number,
      rg_number: values?.rg_number.replace(/\D/g, ''),
      rg_date_emission: values?.rg_date_emission,
      uf_rg: values?.uf_rg.uf,
      emission_rg: values?.emission_rg,
      cpf: values.cpf.replace(/\D/g, ''),
      is_deficiency: values?.is_deficiency,
      filiation_1: values?.filiation_1,
      filiation_2: values.filiation_2,
      marital_status: values?.marital_status,
      escolarity: values?.escolarity,
      initial_date: values?.initial_date,
      final_date: values?.final_date,
      profission: values.profission,
      income: values.income,
      nuclear_family: values?.nuclear_family,
      signed_portfolio: values?.signed_portfolio,

    }

    const bodyVulnerability = {
      irregular_ocupation: values?.irregular_ocupation,
      alone_child: values?.alone_child,
      dependent_elderly: values?.dependent_elderly,
      unemployed: values?.unemployed,
      deficient: values?.deficient,
      low_income: values?.low_income,
      others: values?.others
    }


    const bodyAddress = {
      address: values.address,
      telephone: values.telephone.replace(/\D/g, ''),
      reference: values.reference,
      conditions: values.conditions,
      construction_type: values.construction_type,
      rooms: values.rooms,
      rent_value: values.rent_value
    }

    EditFamilyRequestRequestMutation.mutate({ data: bodyUserIdentify, id: family.family_representative_fk });
    EditVulnerabilityRequestMutation.mutate({ data: bodyVulnerability, id: family.vulnerability_fk })
    EditAddressRequestMutation.mutate({ data: bodyAddress, id: family?.address_fk });
    show()

  }

  const handleEditFamilyMember = (values, id) => {


    const bodyUserIdentify = {
      name: values?.name,
      surname: values?.surname === "" ? undefined : values?.surname,
      birthday: values?.birthday,
      kinship: values?.kinship.id,
      nis: values?.nis === "" ? undefined : parseInt(values?.nis),
      rg_number: values?.rg_number.replace(/\D/g, ''),
      rg_date_emission: values?.rg_date_emission,
      uf_rg: values?.uf_rg.uf,
      emission_rg: values?.emission_rg,
      cpf: values.cpf.replace(/\D/g, ''),
      is_deficiency: values?.is_deficiency,
      // deficiencia: ?deficiencia ?? "",
      filiation_1: values?.filiation_1,
      filiation_2: values.filiation_2,
      marital_status: values?.marital_status,
      escolarity: values?.escolarity,
      initial_date: values?.initial_date,
      final_date: values?.final_date,
      profission: values?.profission,
      income: values?.income,
      nuclear_family: values?.nuclear_family,
      signed_portfolio: values?.signed_portfolio
    }

    EditFamilyRequestRequestMutation.mutate({ data: bodyUserIdentify, id: id });

  }


  const handleCreateMmber = (body) => {
    CreateFamilyRequestRequestMutation.mutate(body)
  }

  const handleCreateFamilyBenefits = (body) => {
    CreateFamilyBenefitsRequestMutation.mutate(body)
  }

  const deleteFamilyBenefits = (id) => {
    DeleteFamilyBenefitsMutation.mutate(id)
  }

  const deleteFamilyMember = (id) => {
    DeleteMemberFamilyRequestMutation.mutate(id)
  }

  const HandleCreateUserIdentify = (data) => {

    CreateUserIdentifyWithFamilyRequestMutation.mutate({
      ...data, nis: parseInt(data.nis),
      cpf: data.cpf.replace(/\D/g, ''),
      rg_number: data.rg_number.replace(/\D/g, ''),
      uf_rg: data.uf_rg.uf,
      attendance_unity: 1,
      initial_date: new Date(Date.now()),
      family: family.id,
      kinship: data.kinship.id,
      birth_certificate: data.birth_certificate === "" ? null : data.birth_certificate,
    })
  }


  return {
    handleEditFamilyMember, activeStep, setActiveStep, addMember, setAddMember, sexo, nextStep, backStep, HandleCreateUserIdentify, estadosDoBrasil, escolaridadeNoBrasil, values, handleFamiliaRefered, estadosCivis, family, handleCreateMmber, parentesco, deleteMember, toast, show, open, setOpen, benefitsfetch, handleCreateFamilyBenefits, deleteFamilyBenefits, deleteFamilyMember
  }
}

export default EditRferedState;