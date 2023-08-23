import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import ButtonPrime from "../../../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../../../CrasUi/Dropdown";
import CrasInput from "../../../../../CrasUi/Input/Input";
import { Column, Grid, Padding, Row } from "../../../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../../../context/FamilyRefered/EditFamilyRefered/context";
import { EditMemberController } from "../../../../../sdk/FamilyRefered/MemberFamily/EditMember/controller";
import CrasCalendar from "../../../../../CrasUi/Calendar";
import queryClient from "../../../../../services/react-query";

const EditMemberFamily = ({ schema, setOpen, id }) => {
    const [oneMember, setOneMember] = useState();
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        queryClient.removeQueries({ queryKey: "OneFamilyMember" })
        setLoading(true)
    }, [])

    const { sexo, parentesco } = useContext(EditFamilyReferedContext)

    const { oneMemberFamily, EditFamilyMemberRequestMutation } = EditMemberController(id, setOpen);


    const handleEditMember = (body) => {
        EditFamilyMemberRequestMutation.mutate(body)
    }

    useEffect(() => {
        if (oneMemberFamily && loading) {
            setOneMember(oneMemberFamily.data.data)
        }
    }, [oneMemberFamily, loading])


    if (!oneMember) return null;

    const initialValue = {
        renda: oneMember.renda ?? 0,
        bolsaFamilia: oneMember.bolsaFamilia ?? 0,
        loas: oneMember.loas ?? 0,
        previdencia: oneMember.previdencia ?? 0,
        nome: oneMember.nome ?? "",
        parentesco: oneMember.parentesco ?? "",
        date_nascimento: oneMember.date_nascimento ?? "",
        sexo: oneMember.sexo ?? "",
        nis: oneMember.nis ?? 0,
    }

    return (
        <Column>
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(value) => handleEditMember(value)}>
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
                                <ButtonPrime label="Canelar" onClick={() => {
                                    setOpen(false);
                                }} severity="danger" />
                                <Padding />
                                <ButtonPrime label="Salvar membro" type="submit" />
                            </Row>
                        </form>
                    )
                }}

            </Formik>
        </Column>
    )
}

export default EditMemberFamily;