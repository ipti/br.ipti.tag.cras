import { useState } from "react"
import { CreateUserIdentifyController } from "../../../sdk/FamilyRefered/CreateUserIdentify/controller";

const CreateFamilyReferedState = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [dataValues, setDataValues] = useState({});

    const {CreateUserIdentifyRequestMutation} = CreateUserIdentifyController();

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

        const data = {
            ...dataValues,
            certidao_nascimento: dataValues.certidao_nascimento ? parseInt(dataValues.certidao_nascimento) : 0,
            apelido: dataValues.apelido === "" ? "." : dataValues.apelido,
            NIS: parseInt(dataValues.NIS),
            renda: parseInt(dataValues.renda),
            bolsa_familia: parseInt(dataValues.bolsa_familia),
            loasbpc: parseInt(dataValues.loasbpc),
            previdencia: parseInt(dataValues.previdencia),
            valor_aluguel: parseInt(dataValues.valor_aluguel),
            uf_rg: dataValues.uf_rg.uf,
            cpf: dataValues.cpf.replace(/\D/g, ''),
            data_final: dataValues.data_final ?? null,
            comodos: dataValues.comodos.toString(),
            numero_rg: dataValues.numero_rg.replace(/\D/g, ''),
            ocupacao_irregular: dataValues.ocupacao_irregular.length === 0 || dataValues.ocupacao_irregular === "" ? 0 : 1,
            crianca_sozinha: dataValues.crianca_sozinha.length === 0 || dataValues.crianca_sozinha === "" ? 0 : 1,
            idosos_dependentes: dataValues.crianca_sozinha.length === 0 || dataValues.crianca_sozinha === "" ? 0 : 1,
            desempregados: dataValues.desempregados.length === 0 || dataValues.desempregados === "" ? 0 : 1,
            deficientes: dataValues.deficientes.length === 0 || dataValues.deficientes === "" ? 0 : 1,
            baixa_renda: dataValues.baixa_renda.length === 0 || dataValues.baixa_renda === "" ? 0 : 1,
            outros: dataValues.outros.length === 0 || dataValues.outros === "" ? 0 : 1
        }
        CreateUserIdentifyRequestMutation.mutate(data);
    }
    return {
        activeStep, setActiveStep, nextStep, backStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues,handleFamiliaRefered, estadosCivis
    }
}

export default CreateFamilyReferedState;