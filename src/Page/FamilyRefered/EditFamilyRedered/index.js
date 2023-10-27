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


    const findOwner = family ? family?.user_identify.find(props => props.id === family.family_representative_fk) : {}

    const valueUf = () => {
        const value = family ? estadosDoBrasil.find(fil => fil.uf === findOwner.uf_rg) : ""
        return value
    }

    const familyValue = (values) => {
        const test = []
        values.forEach(element => {
            console.log(element)
            test.push({
                benefits_fk: element.benefits, value: element.value, id: element.id
            })
        });
        return test
    }

    const initialValue = {
        name: family ? findOwner?.name : "",
        surname: findOwner?.surname ?? null,
        birthday: family ? findOwner?.birthday : "",
        birth_certificate: findOwner.birth_certificate ?? "",
        folder: family ? findOwner?.folder : "",
        archive: findOwner?.archive ?? "",
        number: family ? findOwner?.number : "",
        nis: family ? findOwner?.nis : "",
        rg_number: family ? findOwner?.rg_number : "",
        rg_date_emission: family ? findOwner?.rg_date_emission : "",
        uf_rg: valueUf() ?? "",
        emission_rg: family ? findOwner?.emission_rg : "",
        cpf: family ? findOwner.cpf : "",
        is_deficiency: family ? findOwner?.is_deficiency : "",
        // deficiencia: family?.deficiencia ?? "",
        filiation_1: family ? findOwner?.filiation_1 : "",
        filiation_2: family ? findOwner.filiation_2 : "",
        marital_status: family ? findOwner?.marital_status : "",
        escolarity: family ? findOwner?.escolarity : "",
        initial_date: family ? findOwner?.initial_date : "",
        final_date: family ? findOwner?.final_date : "",
        profission: family ? findOwner.profission : "",
        income: family ? findOwner.income : 0,
        nuclear_family: findOwner?.nuclear_family ?? "",
        signed_portfolio: findOwner?.signed_portfolio ?? false,
        irregular_ocupation: family?.vulnerability.irregular_ocupation ? [1] : [0],
        alone_child: family?.vulnerability.alone_child ? [1] : [0],
        dependent_elderly: family?.vulnerability.dependent_elderly ? [1] : [0],
        unemployed: family?.vulnerability.unemployed ? [1] : [0],
        deficient: family?.vulnerability.deficient ? [1] : [0],
        low_income: family?.vulnerability.low_income ? [1] : [0],
        others: family?.vulnerability.others ? [1] : [0],
        address: family?.address.address ?? "",
        telephone: family?.address.telephone ?? "",
        reference: family?.address.reference ?? "",
        conditions: family?.address.conditions ?? "",
        construction_type: family?.address.construction_type ?? "",
        rooms: family?.address.rooms ?? "",
        rent_value: family?.address.rent_value ?? 0,
        benefitsForFamily: familyValue(family?.benefits) ?? []
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        surname: Yup.string(),
        birthday: Yup.string().required("Campo obrigatório"),
        birth_certificate: Yup.number(),
        folder: Yup.string(),
        archives: Yup.string(),
        number: Yup.string(),
        rg_number: Yup.string().required("Campo obrigatório"),
        rg_date_emission: Yup.string().required("Campo obrigatório"),
        uf_rg: Yup.object().required("Campo obrigatório"),
        emission_rg: Yup.string().required("Campo obrigatório"),
        cpf: Yup.string().required("Campo obrigatório"),
        is_deficiency: Yup.string().required("Campo obrigatório"),
        // beb: Yup.string(),
        filiation_1: Yup.string().required("Campo obrigatório"),
        filiation_2: Yup.string(),
        marital_status: Yup.string(),
        escolarity: Yup.string().required("Campo obrigatório"),
        initial_date: Yup.string(),
        profission: Yup.string().required('Profissão é obrigatória'),
        signed_portfolio: Yup.string(),
        income: Yup.number(),
        nuclear_family: Yup.string().required('Informação sobre residir com a família é obrigatória'),
        address: Yup.string().required("Campo obrigatotório"),
        telephone: Yup.string().required("Campo obrigatotório"),
        reference: Yup.string(),
        conditions: Yup.string().required("Campo obrigatotório"),
        construction_type: Yup.string().required("Campo obrigatotório"),
        rooms: Yup.string().required("Campo obrigatotório"),
        rent_value: Yup.number(),
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
                    handleFamiliaRefered(values)
                }}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {

                    var erroList = [];

                    for (const chave in errors) {
                        if (errors.hasOwnProperty(chave) && touched.hasOwnProperty(chave)) {
                            erroList.push(`${chave}: ${errors[chave]}`)
                        }
                    }

                    return (
                        <form onSubmit={handleSubmit}>
                            {erroList.map((item) => {
                                return (
                                    <div style={{ color: "red" }}>{item}<Padding /></div>
                                )
                            })}
                            <Row style={{ width: "30%" }} id="start">
                                <ButtonPrime label="Salvar" type="submit" />
                            </Row>
                            {activeStep === 0 ?
                                <FormInfoPerson values={values} errors={errors} setFieldValue={setFieldValue} touched={touched} handleChange={handleChange} /> : activeStep === 1 ?
                                    <FormAddress values={values} errors={errors} setFieldValue={setFieldValue} touched={touched} handleChange={handleChange} /> : activeStep === 2 ?
                                        <FormFinances values={values} errors={errors} setFieldValue={setFieldValue} touched={touched} handleChange={handleChange} /> : null}
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