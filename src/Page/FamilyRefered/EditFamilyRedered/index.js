import React, { useContext } from "react";
import Steps from "../../../CrasUi/Steps";
import { Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../context/FamilyRefered/EditFamilyRefered/context";
import FormAddress from "./FormAddress";
import FormFamilyComposition from "./FormFamilyComposition";
import FormFinances from "./FormFinances";
import FormInfoPerson from "./FormInfoPerson";
import { Toast } from "primereact/toast";
import { Formik } from "formik";
import * as Yup from 'yup';
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";


const EditFamilyReferedScreen = () => {

    const { setActiveStep, activeStep, toast, family, estadosDoBrasil, handleFamiliaRefered } = useContext(EditFamilyReferedContext);


    const items = [
        {
            label: 'Informações Pessoais',
            command: (event) => {
                setActiveStep(0)
            }
        },
        {
            label: 'Endereço',
            command: (event) => {
                setActiveStep(1)
            }
        },
        {
            label: 'Situação Financeira e Previdenciária',
            command: (event) => {
                setActiveStep(2)
            }
        },
        {
            label: 'Composição Familiar',
            command: (event) => {
                setActiveStep(3)
            }
        }
    ];

    const itemsSteps = [
        {
            label: '',
            command: (event) => {
                setActiveStep(0)
            }
        },
        {
            label: '',
            command: (event) => {
                setActiveStep(1)
            }
        },
        {
            label: '',
            command: (event) => {
                setActiveStep(2)
            }
        },
        {
            label: '',
            command: (event) => {
                setActiveStep(3)
            }
        }
    ];


    const larguraTela = window.innerWidth;

    if (!family) return null

    const valueUf = () => {
        const value = family ? estadosDoBrasil.find(fil => fil.id === family.id_identificacao_usuario) : ""
        return value
    }

    const initialValue = {
        nome: family ? family?.nome : "",
        apelido: family?.apelido ?? "",
        data_nascimento: family?.data_nascimento ?? "",
        certidao_nascimento: family?.certidao_nascimento ?? "",
        pasta: family?.pasta ?? "",
        arquivo: family?.arquivo ?? "",
        nº: family?.nº ?? "",
        NIS: family?.NIS ?? "",
        numero_rg: family?.numero_rg ?? "",
        data_emissao_rg: family?.data_emissao_rg ?? "",
        uf_rg: valueUf() ?? "",
        emissao_rg: family?.emissao_rg ?? "",
        cpf: family?.cpf ?? "",
        deficiente: family?.deficiente ?? "",
        deficiencia: family?.deficiencia ?? "",
        mae: family?.mae ?? "",
        pai: family?.pai ?? "",
        estado_civil: family?.estado_civil ?? "",
        escolaridade: family?.escolaridade ?? "",
        data_inicial: family?.data_inicial,
        data_final: family?.data_final,
        profissao: family?.id_situacao_financeira_situacao_financeira.profissao ?? "",
        renda: family?.id_situacao_financeira_situacao_financeira.renda ?? 0,
        reside_familia: family?.id_situacao_financeira_situacao_financeira.reside_familia ?? "",
        bolsa_familia: family?.id_situacao_financeira_situacao_financeira.bolsa_familia ?? 0,
        loasbpc: family?.id_situacao_financeira_situacao_financeira.loasbpc ?? 0,
        previdencia: family?.id_situacao_financeira_situacao_financeira.previdencia ?? 0,
        carteira_assinada: family?.id_situacao_financeira_situacao_financeira.carteira_assinada ?? "",
        ocupacao_irregular: family?.id_vulnerabilidade_vulnerabilidade.ocupacao_irregular === 1 ? [family?.id_vulnerabilidade_vulnerabilidade.ocupacao_irregular] : [],
        crianca_sozinha: family?.id_vulnerabilidade_vulnerabilidade.crianca_sozinha === 1 ? [family?.id_vulnerabilidade_vulnerabilidade.crianca_sozinha] : [],
        idosos_dependentes: family?.id_vulnerabilidade_vulnerabilidade.idosos_dependentes === 1 ? [family?.id_vulnerabilidade_vulnerabilidade.idosos_dependentes] : [],
        desempregados: family?.id_vulnerabilidade_vulnerabilidade.desempregados === 1 ? [family?.id_vulnerabilidade_vulnerabilidade.desempregados] : [],
        deficientes: family?.id_vulnerabilidade_vulnerabilidade.deficientes === 1 ? [family?.id_vulnerabilidade_vulnerabilidade.deficientes] : [],
        baixa_renda: family?.id_vulnerabilidade_vulnerabilidade.baixa_renda ? [family?.id_vulnerabilidade_vulnerabilidade.baixa_renda] : [],
        outros: family?.id_vulnerabilidade_vulnerabilidade.outros === 1 ? [family?.id_vulnerabilidade_vulnerabilidade.outros] : [],
        endereco: family?.id_endereco_endereco.endereco ?? "",
        telefone: family?.id_endereco_endereco.telefone ?? "",
        ponto_referencia: family?.id_endereco_endereco.ponto_referencia ?? "",
        condicoes_moradia: family?.id_endereco_endereco.condicoes_moradia ?? "",
        tipo_construcao: family?.id_endereco_endereco.tipo_construcao ?? "",
        comodos: family?.id_endereco_endereco.comodos ?? "",
        valor_aluguel: family?.id_endereco_endereco.valor_aluguel ?? 0
    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        apelido: Yup.string().required("Campo obrigatório"),
        data_nascimento: Yup.string().required("Campo obrigatório"),
        certidao_nascimento: Yup.number(),
        pasta: Yup.string(),
        arquivo: Yup.string(),
        nº: Yup.string(),
        NIS: Yup.number(),
        numero_rg: Yup.string().required("Campo obrigatório"),
        data_emissao_rg: Yup.string().required("Campo obrigatório"),
        uf_rg: Yup.object().required("Campo obrigatório"),
        emissao_rg: Yup.string().required("Campo obrigatório"),
        cpf: Yup.string().required("Campo obrigatório"),
        deficiente: Yup.string().required("Campo obrigatório"),
        deficiencia: Yup.string(),
        mae: Yup.string().required("Campo obrigatório"),
        pai: Yup.string().required("Campo obrigatório"),
        estado_civil: Yup.string(),
        escolaridade: Yup.string().required("Campo obrigatório"),
        data_inicial: Yup.string(),
        data_final: Yup.string(),
        profissao: Yup.string().required('Profissão é obrigatória'),
        carteira_assinada: Yup.string(),
        renda: Yup.number(),
        reside_familia: Yup.string().required('Informação sobre residir com a família é obrigatória'),
        bolsa_familia: Yup.number(),
        loasbpc: Yup.number(),
        previdencia: Yup.number(),
        endereco: Yup.string().required("Campo obrigatotório"),
        telefone: Yup.string().required("Campo obrigatotório"),
        ponto_referencia: Yup.string(),
        condicoes_moradia: Yup.string().required("Campo obrigatotório"),
        tipo_construcao: Yup.string().required("Campo obrigatotório"),
        comodos: Yup.string().required("Campo obrigatotório"),
        valor_aluguel: Yup.number(),
    });

    return (
        <Container>
            <h1>
                Editar Familia Referenciada
            </h1>
            {larguraTela > 700 ?
                <>
                    <Padding padding="32px" />
                    <Steps activeIndex={activeStep} items={items} setActiveIndex={setActiveStep} />
                    <Padding padding="32px" />
                </>
                : <Steps activeIndex={activeStep} items={itemsSteps} setActiveIndex={setActiveStep} />
            }

            <Padding padding="8px" />

            <Formik initialValues={initialValue} onSubmit={
                values => {
                    console.log(values)
                    handleFamiliaRefered(values)
                }}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => {
                    console.log(values)
                    return (
                        <form onSubmit={handleSubmit}>
                            {errors.nome}
                             <Row style={{width: "30%"}} id="start">
                                <ButtonPrime label="Salvar" type="submit" />
                            </Row>
                            {activeStep === 0 ?
                                <FormInfoPerson values={values} errors={errors} touched={touched} handleChange={handleChange} /> : activeStep === 1 ?
                                    <FormAddress values={values} errors={errors} touched={touched} handleChange={handleChange} /> : activeStep === 2 ?
                                        <FormFinances values={values} errors={errors} touched={touched} handleChange={handleChange} /> : null}
                        </form>

                    )
                }
                }
            </Formik>
            {activeStep === 3 ?
                <FormFamilyComposition /> : null}
            <Padding padding="16px" />
            <Toast ref={toast} />

        </Container>
    )
}

export default EditFamilyReferedScreen;