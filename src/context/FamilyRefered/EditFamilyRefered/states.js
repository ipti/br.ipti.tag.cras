import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { EditFamilyReferedController } from "../../../sdk/FamilyRefered/EditFamilyReferd/controller";
import queryClient from "../../../services/react-query";



const EditFamilyReferedState = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    queryClient.removeQueries({ queryKey: "FamilyReferedId" })
    setLoading(true);
  }, [])

  const [activeStep, setActiveStep] = useState(0);
  const [addMember, setAddMember] = useState(false)
  const [open, setOpen] = useState(false)
  const [dataValues, setDataValues] = useState({});
  const [family, setFamily] = useState();
  const [member, setMember] = useState()
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
    // membersFamilyRequest,
    DeleteMemberFamilyRequestMutation,
    EditFamilyRequestRequestMutation
  } = EditFamilyReferedController(id, setAddMember, setIsVerify, setIsError, setOpen, show);


  useEffect(() => {
    if (familyReferedfetch && loading) {
      setFamily(familyReferedfetch)
    }

    // if (membersFamilyRequest) {
    //   const filter = membersFamilyRequest.data.filter(member => `${member.id_identificacao_usuario}` === id);
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
    "Pai",
    "Mãe",
    "Filho",
    "Filha",
    "Avô",
    "Avó",
    "Tio",
    "Tia",
    "Primo",
    "Prima",
    "Sobrinho",
    "Sobrinha",
    "Cônjuge",
    "Companheiro(a)",
    "Amigo(a)",
    "Outro"
  ]



  const nextStep = (values) => {
    let data = Object.assign(dataValues, values);
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


    console.log(values.comodos.toString())
    const data = {
      ...values,
      certidao_nascimento: values.certidao_nascimento ? parseInt(values.certidao_nascimento) : "",
      NIS: parseInt(values.NIS),
      renda: parseInt(values.renda),
      bolsa_familia: parseInt(values.bolsa_familia),
      loasbpc: parseInt(values.loasbpc),
      previdencia: parseInt(values.previdencia),
      comodos: values.comodos.toString(),
      valor_aluguel: values.valor_aluguel ? parseInt(values.valor_aluguel) : 0,
      uf_rg: values.uf_rg.uf,
      ocupacao_irregular: values.ocupacao_irregular.length === 0 || values.ocupacao_irregular[0] === 0 ? 0 : 1,
      crianca_sozinha: values.crianca_sozinha.length === 0 || values.crianca_sozinha[0] === 0 ? 0 : 1,
      idosos_dependentes: values.crianca_sozinha.length === 0 || values.crianca_sozinha[0] === 0 ? 0 : 1,
      desempregados: values.desempregados.length === 0 || values.desempregados[0] === 0 ? 0 : 1,
      deficientes: values.deficientes.length === 0 || values.deficientes[0] === 0 ? 0 : 1,
      baixa_renda: values.baixa_renda.length === 0 || values.baixa_renda[0] === 0 ? 0 : 1,
      outros: values.outros.length === 0 || values.outros[0] === 0 ? 0 : 1
    }

    show()
    EditFamilyRequestRequestMutation.mutate(data);

  }


  const handleCreateFamilyMember = (body) => {
    CreateFamilyRequestRequestMutation.mutate(body)
  }

 
  return {
    activeStep, setActiveStep, addMember, setAddMember, sexo, nextStep, backStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, family, handleCreateFamilyMember, parentesco, member, deleteMember, toast, show, open, setOpen
  }
}

export default EditFamilyReferedState;