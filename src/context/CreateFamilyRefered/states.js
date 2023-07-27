import { useState } from "react"

const CreateFamilyReferedState = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [dataValues, setDataValues] = useState({})

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


    const nextStep = (values) => {
        console.log(values)
        let data = Object.assign(dataValues, values);
        console.log(data)
        setDataValues(data);

        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
        }
    }

    const backStep = (values) => {

        let data = Object.assign(dataValues, values);

        setDataValues(data);

        if (activeStep !== 0) {
            setActiveStep(activeStep - 1);
        }
    }


    console.log(dataValues)

    const handleFamiliaRefered = () => {
        const data = {
            ...dataValues,
            certidao_nascimento: parseInt(dataValues.certidao_nascimento),
            NIS: parseInt(dataValues.NIS),
            renda: parseInt(dataValues.renda),
            bolsa_familia: parseInt(dataValues.bolsa_familia),
            loasbpc: parseInt(dataValues.loasbpc),
            previdencia: parseInt(dataValues.previdencia),
            ocupacao_irregular: parseInt(dataValues.ocupacao_irregular),
            crianca_sozinha: parseInt(dataValues.crianca_sozinha),
            idosos_dependentes: parseInt(dataValues.idosos_dependentes),
            desempregados: parseInt(dataValues.desempregados),
            deficientes: parseInt(dataValues.deficientes),
            baixa_renda: parseInt(dataValues.baixa_renda),
            outros: parseInt(dataValues.outros),
            valor_aluguel: parseInt(dataValues.valor_aluguel)
        }

        console.log(data)
    }
    return {
        activeStep, setActiveStep, nextStep, backStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues,handleFamiliaRefered
    }
}

export default CreateFamilyReferedState;