import { Formik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputNumber from "../../../../CrasUi/Input/InputNumber";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import Table from "../../../../Components/Table";

const FormFinances = () => {

    const { backStep, nextStep, dataValues, benefitsfetch, benefits, setbenefits } = useContext(CreateFamilyReferedContext)

    const [visibleAddBenefits, setvisibleAddBenefits] = useState();


    const initialValue = {
        profission: dataValues.profission ?? "",
        income: dataValues.income ?? 0,
        irregular_ocupation: dataValues.irregular_ocupation ?? "",
        alone_child: dataValues.alone_child ?? "",
        dependent_elderly: dataValues.dependent_elderly ?? "",
        unemployed: dataValues.unemployed ?? "",
        deficient: dataValues.deficient ?? "",
        low_income: dataValues.low_income ?? "",
        others: dataValues.others ?? "",
        benefitsForFamily: dataValues.benefitsForFamily ?? []
    }

    const validationSchema = Yup.object().shape({
        profission: Yup.string().required('Profissão é obrigatória'),
        income: Yup.number().required("Campo Obrigatorio"),
    });

    const [benefits_fk, setbenefits_fk] = useState()
    const [value, setvalue] = useState()

    const columns = [
        { field: 'benefits_fk.description', header: 'Beneficio' },
        { field: 'value', header: 'Valor' },
    ];
    const handleBenefits = (set) => {
        setbenefits([...benefits, { benefits_fk: benefits_fk, value: value }])
        setbenefits_fk()
        setvalue()
        setvisibleAddBenefits(!visibleAddBenefits)
        set("benefitsForFamily", [...benefits, { benefits_fk: benefits_fk.id, value: value }])
    }



    return (
        <Column>
            <Padding padding="16px" />
            <h3>Principais Vulnerabilidades</h3>
            <Formik initialValues={initialValue} onSubmit={(values => nextStep(values))} validationSchema={validationSchema}>
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {
                    const deleteBenefits = (id) => {

                        const filterBen = benefits.filter(props => props.id !== id)
                        setbenefits(filterBen)
                        setFieldValue("benefitsForFamily", filterBen)
                    }

                    console.log(values)
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasCheckbox checked={values.irregular_ocupation[0] === 1} name={"irregular_ocupation"} value={1} onChange={handleChange} label={"Residem em área de ocupação irregular"} />
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasCheckbox name={"dependent_elderly"} value={1} checked={values.dependent_elderly[0] === 1} onChange={handleChange} label={"Existência de idosos dependentes na família"} />
                                </div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"deficient"} value={1} checked={values.deficient[0] === 1} onChange={handleChange} label={"Existência de deficient na família"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"alone_child"} value={1} checked={values.alone_child[0] === 1} onChange={handleChange} label={"Crianças que ficam sozinhos no domicilio"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"unemployed"} value={1} checked={values.unemployed[0] === 1} onChange={handleChange} label={"Desemprego"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"low_income"} value={1} checked={values.low_income[0] === 1} onChange={handleChange} label={"Baixa renda"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"others"} value={1} checked={values.others[0] === 1} onChange={handleChange} label={"Outros"} /></div>
                            </Row>
                            <h3>Situação Financeira e Previdenciária</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="profission" onChange={handleChange} value={values.profission} label="Profissão" />
                                    <Padding />
                                    {errors.profission && touched.profission ? (
                                        <div style={{ color: "red" }}>{errors.profission}<Padding /></div>
                                    ) : null}
                                </Column>
                                {/* <Column>
                                    <label>Carteira Assinada</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} name="carteira_assinada" value={"Sim"} onChange={handleChange} checked={values.carteira_assinada === "Sim"} label={"Sim"} />
                                        <CrasRadioButton selectValue={2} name="carteira_assinada" label={"Não"} value={"Não"} onChange={handleChange} checked={values.carteira_assinada === "Não"} />
                                    </Row>
                                    {errors.carteira_assinada && touched.carteira_assinada ? (
                                        <div style={{ color: "red" }}>{errors.carteira_assinada}<Padding /></div>
                                    ) : null}
                                </Column> */}
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInputNumber mode="currency"
                                        currency="BRL"
                                        locale="pt-BR" showButtons={true} value={values.income} name={"income"} onChange={handleChange} label="Renda Mensal" />
                                    <Padding />
                                    {errors.income && touched.income ? (
                                        <div style={{ color: "red" }}>{errors.income}<Padding /></div>
                                    ) : null}
                                </Column>
                                {/* <Column>
                                    <label>Reside com:</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.reside_familia === "Familia"} value={"Familia"} name={"reside_familia"} label="Família" />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.reside_familia === "Sozinho"} value={"Sozinho"} name={"reside_familia"} label="Sozinho" />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.reside_familia === "Outros"} value={"Outros"} name={"reside_familia"} label="Outros" />
                                    </Row>
                                    {errors.reside_familia && touched.reside_familia ? (
                                        <div style={{ color: "red" }}>{errors.reside_familia}</div>
                                    ) : null}
                                </Column> */}
                            </Grid>
                            <h3>
                                Benefícios
                            </h3>
                            {/* <Grid checkMockup={[{}, {}, {}]}>
                                <Column>
                                    <CrasInputNumber mode="currency"
                                        currency="BRL"
                                        locale="pt-BR" showButtons={true} value={values.loasbpc} name={"loasbpc"} onChange={handleChange} label="LOAS/BPC" />
                                    <Padding />
                                    {errors.loasbpc && touched.loasbpc ? (
                                        <div style={{ color: "red" }}>{errors.loasbpc}</div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInputNumber mode="currency"
                                        currency="BRL"
                                        locale="pt-BR" showButtons={true} value={values.previdencia} name={"previdencia"} onChange={handleChange} label="Previdência Social" />
                                    <Padding />
                                    {errors.previdencia && touched.previdencia ? (
                                        <div style={{ color: "red" }}>{errors.previdencia}</div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInputNumber mode="currency"
                                        currency="BRL"
                                        locale="pt-BR" showButtons={true} value={values.bolsa_familia} name={"bolsa_familia"} onChange={handleChange} label="Bolsa Família" />
                                    <Padding />
                                    {errors.bolsa_familia && touched.bolsa_familia ? (
                                        <div style={{ color: "red" }}>{errors.bolsa_familia}</div>
                                    ) : null}
                                </Column>
                            </Grid> */}

                            {visibleAddBenefits ? <>
                                <Grid checkMockup={[{}, {}]}>
                                    <Column>
                                        <CrasDropdown label={"Beneficios"} onChange={(e) => setbenefits_fk(e.target.value)} value={benefits_fk} optionLabel={"description"} options={benefitsfetch} />
                                    </Column>
                                    <Column>
                                        <CrasInputNumber mode="currency"
                                            currency="BRL"
                                            locale="pt-BR" showButtons={true} value={value} onChange={(e) => setvalue(e.target.value)} label={"value"} />
                                    </Column>
                                </Grid>
                                <Row id="start">
                                    <Padding padding="8px" />
                                    <ButtonPrime label={"Criar"} type="button" onClick={() => handleBenefits(setFieldValue)} />
                                    <Padding />
                                    <ButtonPrime type="button" onClick={() => setvisibleAddBenefits(!visibleAddBenefits)} severity={"danger"} label={"Cancelar"} />
                                </Row>
                            </>
                                : null}
                            {!visibleAddBenefits ? <Row id="start" >
                                <ButtonPrime label={"Adicionar Beneficio"} type="button" icon="pi pi-plus" iconPos={"left"} onClick={() => setvisibleAddBenefits(!visibleAddBenefits)} />
                            </Row> : null}
                            <Padding padding="8px">

                                <Table
                                    columns={columns}
                                    list={benefits}
                                    name="Beneficios"
                                    pathEdit={"/edit/tecnico/"}
                                    delet={deleteBenefits}
                                />
                            </Padding>
                            <Padding padding="16px" />
                            <Row id="end">
                                <Padding />
                                <ButtonPrime label="Próximo" type={"submit"} />
                            </Row>
                        </form>
                    )
                }}
            </Formik>
            <Row id="start">
                <ButtonPrime label="Voltar" onClick={backStep} />
            </Row>
        </Column>
    )
}
export default FormFinances;