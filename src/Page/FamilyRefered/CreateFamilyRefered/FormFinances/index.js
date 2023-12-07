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
import CrasRadioButton from "../../../../CrasUi/RadioButton";

const FormFinances = () => {

    const { backStep, nextStep, dataValues, benefitsfetch, benefits, setbenefits } = useContext(CreateFamilyReferedContext)

    const [visibleAddBenefits, setvisibleAddBenefits] = useState();


    const initialValue = {
        profission: dataValues.profission ?? "",
        income: dataValues.income ?? 0,
        irregular_ocupation: dataValues.irregular_ocupation ?? false,
        alone_child: dataValues.alone_child ?? false,
        dependent_elderly: dataValues.dependent_elderly ?? false,
        unemployed: dataValues.unemployed ?? false,
        deficient: dataValues.deficient ?? false,
        low_income: dataValues.low_income ?? false,
        others: dataValues.others ?? false,
        benefitsForFamily: dataValues.benefitsForFamily ?? [],
        signed_portfolio: dataValues.signed_portfolio ?? "",
        nuclear_family: dataValues.nuclear_family ?? ""
    }

    const validationSchema = Yup.object().shape({
        profission: Yup.string().required('Profissão é obrigatória'),
        signed_portfolio: Yup.string().required('Campo é obrigatória'),
        income: Yup.number(),
        nuclear_family: Yup.string().required('Informação sobre residir com a família é obrigatória'),
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

    const handleCheckbox = (e, set, atributo) => {
        set(atributo, e.checked)
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

                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasCheckbox checked={values.irregular_ocupation} name={"irregular_ocupation"} onChange={(e) => handleCheckbox(e, setFieldValue, "irregular_ocupation")} label={"Residem em área de ocupação irregular"} />
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasCheckbox name={"dependent_elderly"} checked={values.dependent_elderly} onChange={(e) => handleCheckbox(e, setFieldValue, "dependent_elderly")} label={"Existência de idosos dependentes na família"} />
                                </div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"deficient"} checked={values.deficient} onChange={(e) => handleCheckbox(e, setFieldValue, "deficient")} label={"Existência de deficiente na família"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"alone_child"} checked={values.alone_child} onChange={(e) => handleCheckbox(e, setFieldValue, "alone_child")} label={"Crianças que ficam sozinhos no domicilio"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"unemployed"} checked={values.unemployed} onChange={(e) => handleCheckbox(e, setFieldValue, "unemployed")} label={"Desemprego"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"low_income"} checked={values.low_income} onChange={(e) => handleCheckbox(e, setFieldValue, "low_income")} label={"Baixa renda"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"others"} checked={values.others} onChange={(e) => handleCheckbox(e, setFieldValue, "others")} label={"Outros"} /></div>
                            </Row>
                            <h3>Situação Financeira e Previdenciária</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="profission" onChange={handleChange} value={values.profission} label="Profissão *" />
                                    <Padding />
                                    {errors.profission && touched.profission ? (
                                        <div style={{ color: "red" }}>{errors.profission}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <label>Carteira Assinada</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} name="signed_portfolio" value={true} onChange={handleChange} checked={values.signed_portfolio === true} label={"Sim"} />
                                        <CrasRadioButton selectValue={2} name="signed_portfolio" label={"Não"} value={false} onChange={handleChange} checked={values.signed_portfolio === false} />
                                    </Row>
                                    {errors.signed_portfolio && touched.signed_portfolio ? (
                                        <div style={{ color: "red" }}>{errors.signed_portfolio}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInputNumber mode="currency"
                                        currency="BRL"
                                        locale="pt-BR" showButtons={true} value={values.income} name={"income"} onChange={handleChange} label="Renda Mensal do usuário" />
                                    <Padding />
                                    {errors.income && touched.income ? (
                                        <div style={{ color: "red" }}>{errors.income}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <label>Reside com: *</label>
                                    <Column id="center">
                                        <Row>
                                            <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.nuclear_family === "Familia"} value={"Familia"} name={"nuclear_family"} label="Família" />
                                            <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.nuclear_family === "Sozinho"} value={"Sozinho"} name={"nuclear_family"} label="Sozinho" />
                                            <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.nuclear_family === "Outros"} value={"Outros"} name={"nuclear_family"} label="Outros" />

                                        </Row>
                                    </Column>
                                    {errors.nuclear_family && touched.nuclear_family ? (
                                        <div style={{ color: "red" }}>{errors.nuclear_family}</div>
                                    ) : null}
                                </Column>
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
                                            locale="pt-BR" showButtons={true} value={value} onChange={(e) => setvalue(e.target.value)} label={"Valor"} />
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