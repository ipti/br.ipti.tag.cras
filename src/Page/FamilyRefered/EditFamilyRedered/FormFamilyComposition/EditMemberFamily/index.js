import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import ButtonPrime from "../../../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../../../CrasUi/Dropdown";
import CrasInput from "../../../../../CrasUi/Input/Input";
import { Column, Padding, Row } from "../../../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../../../context/FamilyRefered/EditFamilyRefered/context";
import { EditMemberController } from "../../../../../sdk/FamilyRefered/MemberFamily/EditMember/controller";
import CrasCalendar from "../../../../../CrasUi/Calendar";

const EditMemberFamily = ({ schema, setOpen, id }) => {
    const [oneMember, setOneMember] = useState()

    const { sexo, parentesco } = useContext(EditFamilyReferedContext)

    const { oneMemberFamily, EditFamilyMemberRequestMutation } = EditMemberController(id, setOpen);
    

    const handleEditMember = (body) => {
        EditFamilyMemberRequestMutation.mutate(body)
    }



    useEffect(() => {
        if (oneMemberFamily) {
            setOneMember(oneMemberFamily.data.data)
        }
    }, [oneMemberFamily])


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
                    const dateBithrday = new Date(values.date_nascimento )
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput name="nome" onChange={handleChange} value={values.nome} label="Nome" />
                                    {errors.nome && touched.nome ? (
                                        <div style={{ color: "red" }}>{errors.nome}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="NIS" value={values.nis} name={"nis"} onChange={handleChange} />
                                    {errors.nis && touched.nis ? (
                                        <div style={{ color: "red" }}>{errors.nis}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasDropdown label="Parentesco" options={parentesco} optionLabel={""} value={values.parentesco} name="parentesco" onChange={handleChange} />
                                    {errors.parentesco && touched.parentesco ? (
                                        <div style={{ color: "red" }}>{errors.parentesco}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasCalendar label="Data de Nascimento" date={dateBithrday} name={"date_nascimento"} showIcon onChange={handleChange} />
                                    {errors.date_nascimento && touched.date_nascimento ? (
                                        <div style={{ color: "red" }}>{errors.date_nascimento}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasDropdown label="Sexo" options={sexo} name="sexo" value={values.sexo} onChange={handleChange} optionLabel={""} />
                                    {errors.sexo && touched.sexo ? (
                                        <div style={{ color: "red" }}>{errors.sexo}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasInput label="LOAS/BPC" value={values.loas} name={"loas"} onChange={handleChange} />
                                    {errors.loas && touched.loas ? (
                                        <div style={{ color: "red" }}>{errors.loas}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Previdência Social" value={values.previdencia} name={"previdencia"} onChange={handleChange} />
                                    {errors.previdencia && touched.previdencia ? (
                                        <div style={{ color: "red" }}>{errors.previdencia}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Bolsa Família" value={values.bolsaFamilia} onChange={handleChange} name={"bolsaFamilia"} />
                                    {errors.bolsaFamilia && touched.bolsaFamilia ? (
                                        <div style={{ color: "red" }}>{errors.bolsaFamilia}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Renda Mensal" value={values.renda} onChange={handleChange} name={"renda"} />
                                    {errors.renda && touched.renda ? (
                                        <div style={{ color: "red" }}>{errors.renda}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime label="Canelar" onClick={() => {setOpen(false); setOneMember([])}} severity="danger" />
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