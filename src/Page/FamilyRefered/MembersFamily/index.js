import { Formik } from "formik";
import React, { useContext, useState } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../CrasUi/Dropdown";
import CrasInput from "../../../CrasUi/Input/Input";
import CrasTable from "../../../CrasUi/Table";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";

import * as Yup from 'yup';
import CrasCalendar from "../../../CrasUi/Calendar";
import CrasInputMask from "../../../CrasUi/Input/InputMask";
import CrasInputNumber from "../../../CrasUi/Input/InputNumber";
import CrasRadioButton from "../../../CrasUi/RadioButton";
import { formatarData } from "../../../services/functions";
import { CompositionFamilyContext } from "../../../context/FamilyRefered/CompositionFamily/context";
import EditMemberFamily from "./EditMemberFamily";

const FormFamilyComposition = () => {
    const { open, setOpen, HandleCreateUserIdentify, parentesco, family, addMember, setAddMember, deleteFamilyMember, estadosCivis, escolaridadeNoBrasil, estadosDoBrasil } = useContext(CompositionFamilyContext)
    const [idMember, setIdMember] = useState("")

    const editMember = (params) => {
        setOpen(true);
        setIdMember(params.id)
    }

    if (!family) return null;

    const initialValue = {
        name: "",
        surname: "",
        kinship: "",
        birthday: new Date(Date.now()),
        nis: "",
        rg_number: "",
        rg_date_emission: new Date(Date.now()),
        uf_rg: "",
        emission_rg: "",
        cpf: "",
        is_deficiency: "",
        deficiency: "",
        filiation_1: "",
        filiation_2: "",
        marital_status: "",
        escolarity: "",
        profission: "",
        income: 0,
        nuclear_family: "",
        signed_portfolio: false,
        // benefitsForFamily: []
    }

    const schema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        kinship: Yup.object().required("Campo obrigatório"),
        surname: Yup.string(),
        birthday: Yup.string().required("Campo obrigatório"),
        nis: Yup.number(),
        rg_number: Yup.string(),
        rg_date_emission: Yup.string(),
        uf_rg: Yup.object(),
        emission_rg: Yup.string(),
        cpf: Yup.string().required("Campo obrigatório"),
        is_deficiency: Yup.string().required("Campo obrigatório"),
        deficiency: Yup.string(),
        filiation_1: Yup.string().required("Campo obrigatório"),
        filiation_2: Yup.string(),
        marital_status: Yup.string().required("Campo obrigatório"),
        escolarity: Yup.string().required("Campo obrigatório"),
        profission: Yup.string().required('Profissão é obrigatória'),
        signed_portfolio: Yup.string(),
        income: Yup.number(),
        nuclear_family: Yup.string().required('Informação sobre residir com a família é obrigatória'),
    });

    const columns = [
        { field: 'id', header: 'id' },
        { field: 'name', header: 'Name' },
        { field: 'kinship', header: 'Parentesco' },
        { field: 'birthday', header: 'Data de nascimento' },
        { field: "initial_date", header: "Data de Entrada" },
    ];

    const memberFamily = family.user_identify.filter(props => props.id !== family.family_representative_fk)

    const memberFamilyFilter = memberFamily ? memberFamily.map((data) => ({ ...data, kinship: parentesco.find(props => props.id === data.kinship).name, birthday: formatarData(data.birthday), initial_date: formatarData(data.initial_date) })) : [];


    return (
        <Container>
            <Padding padding="16px" />
            {!addMember && !open ? <Row id="end">
                <ButtonPrime onClick={() => setAddMember(true)} label="Adicionar Membro" />
            </Row> : null}
            <h3>Composição Familiar</h3>
            <Padding padding="8px" />
            {addMember ?
                <Column>
                    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(value) => { HandleCreateUserIdentify(value); setAddMember(false) }}>
                        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {
                            const dateEmit = new Date(values.rg_date_emission);
                            const dateBithrday = new Date(values.birthday)
                            return (
                                <form onSubmit={handleSubmit}>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasInput name="name" onChange={handleChange} value={values.name} label="Nome" />
                                            <Padding />
                                            {errors.name && touched.name ? (
                                                <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput label="NIS" value={values.nis} name={"nis"} onChange={handleChange} />
                                            <Padding />
                                            {errors.nis && touched.nis ? (
                                                <div style={{ color: "red" }}>{errors.nis}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasDropdown label="Parentesco" options={parentesco} optionLabel={"name"} value={values.kinship} name="kinship" onChange={handleChange} />
                                            <Padding />
                                            {errors.kinship && touched.kinship ? (
                                                <div style={{ color: "red" }}>{errors.kinship}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasCalendar label="Data de Nascimento" date={dateBithrday} name={"birthday"} showIcon onChange={handleChange} />
                                            <Padding />
                                            {errors.birthday && touched.birthday ? (
                                                <div style={{ color: "red" }}>{errors.birthday}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Grid checkMockup={[{}, {}, {}, {}]}>
                                        <Column>
                                            <CrasInputMask mask={"99.999-9999"} label="RG" name="rg_number" onChange={handleChange} value={values.rg_number} />
                                            <Padding />
                                            {errors.rg_number && touched.rg_number ? (
                                                <div style={{ color: "red" }}>{errors.rg_number}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasCalendar date={dateEmit} label="Data de Emissão" name="rg_date_emission" onChange={handleChange} showIcon />
                                            <Padding />
                                            {errors.rg_date_emission && touched.rg_date_emission ? (
                                                <div style={{ color: "red" }}>{errors.rg_date_emission}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasDropdown options={estadosDoBrasil} value={values.uf_rg} optionLabel={"uf"} label="UF" name="uf_rg" onChange={handleChange} />
                                            <Padding />
                                            {errors.uf_rg && touched.uf_rg ? (
                                                <div style={{ color: "red" }}>{errors.uf_rg}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput label="Órgão Emissor" name="emission_rg" onChange={handleChange} value={values.emission_rg} />
                                            <Padding />
                                            {errors.emission_rg && touched.emission_rg ? (
                                                <div style={{ color: "red" }}>{errors.emission_rg}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasInputMask mask={"999.999.999-99"} label="CPF" name="cpf" onChange={handleChange} value={values.cpf} />
                                            <Padding />
                                            {errors.cpf && touched.cpf ? (
                                                <div style={{ color: "red" }}>{errors.cpf}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <label>Deficiente Físico ou Mental ?</label>
                                            <Row>
                                                <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.is_deficiency === true} value={true} name="is_deficiency" label={"Sim"} />
                                                <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.is_deficiency === false} value={false} name="is_deficiency" label="Não" />
                                            </Row>
                                            <Padding />
                                            {errors.is_deficiency && touched.is_deficiency ? (
                                                <div style={{ color: "red" }}>{errors.is_deficiency}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasInput label="Filiação 1" name="filiation_1" onChange={handleChange} value={values.filiation_1} />
                                            <Padding />
                                            {errors.filiation_1 && touched.filiation_1 ? (
                                                <div style={{ color: "red" }}>{errors.filiation_1}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput label="Filiação 2" name={"filiation_2"} onChange={handleChange} value={values.filiation_2} />
                                            <Padding />
                                            {errors.filiation_2 && touched.filiation_2 ? (
                                                <div style={{ color: "red" }}>{errors.filiation_2}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasDropdown options={estadosCivis} optionLabel={""} value={values.marital_status} label={"Estado civil"} onChange={handleChange} name="marital_status" />
                                            <Padding />
                                            {errors.marital_status && touched.marital_status ? (
                                                <div style={{ color: "red" }}>{errors.marital_status}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasDropdown options={escolaridadeNoBrasil} optionLabel={""} label="Grau de Escolaridade" name="escolarity" onChange={handleChange} value={values.escolarity} />
                                            <Padding />
                                            {errors.escolarity && touched.escolarity ? (
                                                <div style={{ color: "red" }}>{errors.escolarity}<Padding />
                                                </div>
                                            ) : null}
                                        </Column>
                                    </Grid>
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
                                    {/* <h3>
                                        Benefícios
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
                                            <ButtonPrime label={"Criar"} type="button" onClick={() => handleBenefits(setFieldValue)} />
                                            <Padding />
                                            <ButtonPrime type="button" onClick={() => setvisibleAddBenefits(!visibleAddBenefits)} severity={"danger"} label={"Cancelar"} />
                                        </Row>
                                    </>
                                        : null}
                                    {!visibleAddBenefits ? <Row id="start">
                                        <ButtonPrime label={"Adicionar Beneficio"} type="button" icon="pi pi-plus" iconPos={"left"} onClick={() => setvisibleAddBenefits(!visibleAddBenefits)} />
                                    </Row> : null}
                                    <Padding padding="8px">
                                        <Table
                                            columns={columnsBenefits}
                                            list={benefits}
                                            name="Beneficios"
                                        // pathEdit={"/edit/tecnico/"}
                                        // delet={deleteBenefits}
                                        />
                                    </Padding> */}
                                    <Padding padding="16px" />
                                    <Row id="end">
                                        <ButtonPrime label="Cancelar" onClick={() => setAddMember(false)} severity="danger" />
                                        <Padding />
                                        <ButtonPrime label="Adicionar membro" type="submit" />
                                    </Row>
                                </form>
                            )
                        }}
                    </Formik>
                </Column>
                : null
            }
            {open ? <EditMemberFamily setOpen={setOpen} id={idMember} /> : null}
            {!open && !addMember ? <CrasTable delet={deleteFamilyMember} products={memberFamilyFilter} columns={columns} onEdit={editMember} /> : null}
            <Padding padding="16px" />
        </Container>
    )
};

export default FormFamilyComposition;