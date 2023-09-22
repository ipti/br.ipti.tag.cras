import { Formik } from "formik";
import React, { useContext, useState } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasTable from "../../../../CrasUi/Table";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";

import * as Yup from 'yup';
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";
import EditMemberFamily from "./EditMemberFamily";
import CrasCalendar from "../../../../CrasUi/Calendar";

const FormFamilyComposition = () => {
    const { backStep, handleFamiliaRefered, sexo, open, setOpen, handleCreateFamilyMember, parentesco, family, member, addMember, setAddMember, deleteMember } = useContext(EditFamilyReferedContext)
    const [idMember, setIdMember] = useState("")

    const editMember = (params) => {
        setOpen(true);
        setIdMember(params.id)
    }

    if (!family) return null;

    const initialValue = {
        renda: 0,
        bolsaFamilia: 0,
        loas: 0,
        previdencia: 0,
        nome: "",
        parentesco: "",
        date_nascimento: "",
        sexo: "",
        nis: 0,
        id_identificacao_usuario: family.id
    }

    const schema = Yup.object().shape({
        renda: Yup.number().required().min(0),
        bolsaFamilia: Yup.number().required().min(0),
        loas: Yup.number().required().min(0),
        previdencia: Yup.number().required().min(0),
        nome: Yup.string().required(),
        parentesco: Yup.string().required(),
        date_nascimento: Yup.string().required("Campo obrigatório"),
        sexo: Yup.string().required().oneOf(['Masculino', 'Feminino', 'Outro']),
        nis: Yup.number().required().min(0),
    });

    const columns = [
        { field: 'id', header: 'id' },
        { field: 'nome', header: 'Name' },
        { field: 'parentesco', header: 'Parentesco' },
        { field: 'date_nascimento', header: 'Data de nascimento' },
        { field: 'sexo', header: 'Sexo' },
    ];

    return (
        <Column>
            <Padding padding="16px" />
            {!addMember && !open ? <Row id="end">
                <ButtonPrime onClick={() => setAddMember(true)} label="Adicionar Membro" />
            </Row> : null}
            <h3>Composição Familiar</h3>
            <Padding padding="8px" />
            {addMember ?
                <Column>
                    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(value) => handleCreateFamilyMember(value)}>
                        {({ values, handleChange, handleSubmit, errors, touched }) => {
                            const dateBithrday = new Date(values.date_nascimento)
                            return (
                                <form onSubmit={handleSubmit}>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasInput name="nome" onChange={handleChange} value={values.nome} label="Nome" />
                                            <Padding />
                                            {errors.nome && touched.nome ? (
                                                <div style={{ color: "red" }}>{errors.nome}<Padding /></div>
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
                                    <Grid checkMockup={[{}, {}, {}]}>
                                        <Column>
                                            <CrasDropdown label="Parentesco" options={parentesco} optionLabel={""} value={values.parentesco} name="parentesco" onChange={handleChange} />
                                            <Padding />
                                            {errors.parentesco && touched.parentesco ? (
                                                <div style={{ color: "red" }}>{errors.parentesco}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasCalendar label="Data de Nascimento" date={dateBithrday} name={"date_nascimento"} showIcon onChange={handleChange} />
                                            <Padding />
                                            {errors.date_nascimento && touched.date_nascimento ? (
                                                <div style={{ color: "red" }}>{errors.date_nascimento}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasDropdown label="Sexo" options={sexo} name="sexo" value={values.sexo} onChange={handleChange} optionLabel={""} />
                                            <Padding />
                                            {errors.sexo && touched.sexo ? (
                                                <div style={{ color: "red" }}>{errors.sexo}<Padding />
                                                </div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Grid checkMockup={[{}, {}, {}, {}]}>
                                        <Column>
                                            <CrasInput label="LOAS/BPC" value={values.loas} name={"loas"} onChange={handleChange} />
                                            <Padding />
                                            {errors.loas && touched.loas ? (
                                                <div style={{ color: "red" }}>{errors.loas}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput label="Previdência Social" value={values.previdencia} name={"previdencia"} onChange={handleChange} />
                                            <Padding />
                                            {errors.previdencia && touched.previdencia ? (
                                                <div style={{ color: "red" }}>{errors.previdencia}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput label="Bolsa Família" value={values.bolsaFamilia} onChange={handleChange} name={"bolsaFamilia"} />
                                            <Padding />
                                            {errors.bolsaFamilia && touched.bolsaFamilia ? (
                                                <div style={{ color: "red" }}>{errors.bolsaFamilia}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput label="Renda Mensal" value={values.renda} onChange={handleChange} name={"renda"} />
                                            <Padding />
                                            {errors.renda && touched.renda ? (
                                                <div style={{ color: "red" }}>{errors.renda}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Padding padding="16px" />
                                    <Row id="end">
                                        <ButtonPrime label="Canelar" onClick={() => setAddMember(false)} severity="danger" />
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
            {open ? <EditMemberFamily setOpen={setOpen} id={idMember} schema={schema} /> : null}
            {!open && !addMember ? <CrasTable delet={deleteMember} products={member} columns={columns} onEdit={editMember} /> : null}
            <Padding padding="16px" />
        </Column>
    )
};

export default FormFamilyComposition;