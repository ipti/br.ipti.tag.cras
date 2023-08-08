import { Formik } from "formik";
import React, { useContext, useState } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasTable from "../../../../CrasUi/Table";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";

import * as Yup from 'yup';
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";
import EditMemberFamily from "./EditMemberFamily";

const FormFamilyComposition = () => {
    const { backStep, handleFamiliaRefered, sexo, handleCreateFamilyMember, parentesco, family, member, addMember, setAddMember, deleteMember } = useContext(EditFamilyReferedContext)
    const [idMember, setIdMember] = useState("")
    const [open, setOpen] = useState(false)

    const editMember = (params) => {
        console.log(params)
        setOpen(true);
        setIdMember(params.id)
    }

    console.log(idMember)

    if (!family) return null;

    const initialValue = {
        renda: 0,
        bolsaFamilia: 0,
        loas: 0,
        previdencia: 0,
        nome: "",
        parentesco: "",
        idade: "",
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
        idade: Yup.number().required().positive().integer(),
        sexo: Yup.string().required().oneOf(['Masculino', 'Feminino', 'Outro']),
        nis: Yup.number().required().min(0),
    });

    const columns = [
        { field: 'id', header: 'id' },
        { field: 'nome', header: 'Name' },
        { field: 'parentesco', header: 'Parentesco' },
        { field: 'idade', header: 'Idade' },
        { field: 'sexo', header: 'Sexo' },
    ];

    return (
        <Column>
            <Padding padding="16px" />
            {!addMember && !open ? <Row id="end">
                <ButtonPrime onClick={() => setAddMember(true)} label="Adicionar Membro" />
            </Row> : null}
            <h3>Composição Familiar</h3>
            <Padding padding="8px"/>
            {addMember ?
                <Column>
                    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(value) => handleCreateFamilyMember(value)}>
                        {({ values, handleChange, handleSubmit, errors, touched }) => {
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
                                            <CrasInput label="Idade" value={values.idade} name={"idade"} onChange={handleChange} />
                                            {errors.idade && touched.idade ? (
                                                <div style={{ color: "red" }}>{errors.idade}</div>
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
            <Row id="center">
                <ButtonPrime label="Voltar" onClick={backStep} />
                <Padding />
                <ButtonPrime label="Finalizar" onClick={handleFamiliaRefered} />
            </Row>
        </Column>
    )
};

export default FormFamilyComposition;