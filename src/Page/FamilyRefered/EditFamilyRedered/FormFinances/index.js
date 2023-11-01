import React, { useContext, useState } from "react";
import Table from "../../../../Components/Table";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputNumber from "../../../../CrasUi/Input/InputNumber";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";

const FormFinances = ({ values, errors, touched, handleChange, setFieldValue }) => {

    const [visibleAddBenefits, setvisibleAddBenefits] = useState();

    const [benefits_fk, setbenefits_fk] = useState()
    const [value, setvalue] = useState()

    const { benefitsfetch, handleCreateFamilyBenefits, deleteFamilyBenefits } = useContext(EditFamilyReferedContext);
    const { family } = useContext(EditFamilyReferedContext)

    const [benefits, setbenefits] = useState(values.benefitsForFamily)


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'benefits_fk.description', header: 'Beneficio' },
        { field: 'value', header: 'Valor' },
    ];

    const handleBenefits = () => {

        setbenefits([...benefits, { benefits_fk: benefits_fk, value: value, id: benefits_fk.id }])
        setbenefits_fk()
        setvalue()
        setvisibleAddBenefits(!visibleAddBenefits)
        handleCreateFamilyBenefits({
            family: family.id,
            benefits: benefits_fk.id,
            value: value
        })
    }

    const deleteBenefits = (id) => {
        setbenefits(benefits.filter(props => props.id !== id))
        deleteFamilyBenefits(id)
    }


    if (!family) return null;

    const handleCheckbox = (e, set, atributo) => {
        set(atributo, e.checked)
    }

    console.log(values)

    return (
        <Column>
            <Padding padding="16px" />
            <h3>Principais Vulnerabilidades</h3>
            <Row>
                <div className="col">
                    <CrasCheckbox checked={values.irregular_ocupation} name={"irregular_ocupation"}  onChange={(e)=> handleCheckbox(e, setFieldValue, "irregular_ocupation")} label={"Residem em área de ocupação irregular"} />
                </div>
            </Row>
            <Row>
                <div className="col">
                    <CrasCheckbox name={"dependent_elderly"} checked={values.dependent_elderly} onChange={(e)=> handleCheckbox(e, setFieldValue, "dependent_elderly")} label={"Existência de idosos dependentes na família"} />
                </div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"deficient"} checked={values.deficient} onChange={(e)=> handleCheckbox(e, setFieldValue, "deficient")} label={"Existência de deficient na família"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"alone_child"}  checked={values.alone_child} onChange={(e)=> handleCheckbox(e, setFieldValue, "alone_child")} label={"Crianças que ficam sozinhos no domicilio"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"unemployed"} checked={values.unemployed} onChange={(e)=> handleCheckbox(e, setFieldValue, "unemployed")} label={"Desemprego"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"low_income"}  checked={values.low_income} onChange={(e)=> handleCheckbox(e, setFieldValue, "low_income")} label={"Baixa income"} /></div>
            </Row>
            <Row>
                <div className="col"> <CrasCheckbox name={"others"}  checked={values.others} onChange={(e)=> handleCheckbox(e, setFieldValue, "others")} label={"Outros"} /></div>
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
                    <label>Reside com:</label>
                    <Row>
                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.nuclear_family === "Familia"} value={"Familia"} name={"nuclear_family"} label="Família" />
                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.nuclear_family === "Sozinho"} value={"Sozinho"} name={"nuclear_family"} label="Sozinho" />
                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.nuclear_family === "Outros"} value={"Outros"} name={"nuclear_family"} label="Outros" />

                    </Row>
                    {errors.nuclear_family && touched.nuclear_family ? (
                        <div style={{ color: "red" }}>{errors.nuclear_family}</div>
                    ) : null}
                </Column>
            </Grid>
            <h3>
                Benefícios da Familia
            </h3>
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
                    <ButtonPrime label={"Criar"} type="button" onClick={handleBenefits} />
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
            <Padding padding="16px" />
        </Column>
    )
}
export default FormFinances;