import { useState } from "react"
import { CreateUserIdentifyController } from "../../../sdk/FamilyRefered/CreateUserIdentify/controller";

const CreateFamilyReferedState = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [dataValues, setDataValues] = useState({});
    const [benefits, setbenefits] = useState([])


    const { CreateUserIdentifyRequestMutation, benefitsfetch, isLoading, error } = CreateUserIdentifyController();


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


    const handleFamiliaRefered = () => {

        console.log(dataValues)

        const data = {
            ...dataValues,
            nis: parseInt(dataValues.nis),
            cpf: dataValues.cpf.replace(/\D/g, ''),
            rg_number: dataValues.rg_number.replace(/\D/g, ''),
            telephone: dataValues.telephone.replace(/\D/g, ''),
            uf_rg: dataValues.uf_rg.uf,
            attendance_unity: 2,
            kinship: "RESPONSAVEL",
            birth_certificate: dataValues.birth_certificate === "" ? null : dataValues.birth_certificate,
            irregular_ocupation: dataValues.irregular_ocupation ?? false,
            alone_child: dataValues.alone_child ?? false,
            dependent_elderly: dataValues.dependent_elderly ?? false,
            unemployed: dataValues.unemployed ?? false,
            deficient: dataValues.deficient ?? false,
            low_income: dataValues.low_income ?? false,
            others: dataValues.others ?? false
        }

        CreateUserIdentifyRequestMutation.mutate(data);
    }
    return {
        activeStep, setActiveStep, nextStep, backStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, handleFamiliaRefered, estadosCivis, benefitsfetch, isLoading, error, benefits, setbenefits
    }
}

export default CreateFamilyReferedState;