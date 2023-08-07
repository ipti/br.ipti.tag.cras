import React, { useContext } from "react";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";
import { Formik } from "formik";
import * as Yup from 'yup';
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";

const FormFinances = () => {

    const { backStep, nextStep, family } = useContext(EditFamilyReferedContext)

    if(!family) return null;

    const initialValue = {
        profissao: family.id_situacao_financeira_situacao_financeira.profissao ?? "",
        renda: family.id_situacao_financeira_situacao_financeira.renda ?? 0,
        reside_familia: family.id_situacao_financeira_situacao_financeira.reside_familia ?? "",
        bolsa_familia: family.id_situacao_financeira_situacao_financeira.bolsa_familia ?? 0,
        loasbpc: family.id_situacao_financeira_situacao_financeira.loasbpc ?? 0,
        previdencia: family.id_situacao_financeira_situacao_financeira.previdencia ?? 0,
        carteira_assinada: family.id_situacao_financeira_situacao_financeira.carteira_assinada ?? "",
        ocupacao_irregular: family.id_situacao_financeira_situacao_financeira.ocupacao_irregular ?? "",
        crianca_sozinha: family.id_situacao_financeira_situacao_financeira.crianca_sozinha ?? "",
        idosos_dependentes: family.id_situacao_financeira_situacao_financeira.idosos_dependentes ?? "",
        desempregados: family.id_situacao_financeira_situacao_financeira.desempregados ?? "",
        deficientes: family.id_situacao_financeira_situacao_financeira.deficientes ?? "",
        baixa_renda: family.id_situacao_financeira_situacao_financeira.baixa_renda ?? "",
        outros: family.id_situacao_financeira_situacao_financeira.outros ?? ""
    }

    const validationSchema = Yup.object().shape({
        profissao: Yup.string().required('Profissão é obrigatória'),
        carteira_assinada: Yup.string(),
        renda: Yup.number(),
        reside_familia: Yup.string().required('Informação sobre residir com a família é obrigatória'),
        bolsa_familia: Yup.number(),
        loasbpc: Yup.number(),
        previdencia: Yup.number(),
    });


    return (
        <Column>
            <Padding padding="16px" />
            <h3>Principais Vulnerabilidades</h3>
            <Formik initialValues={initialValue} onSubmit={(values => nextStep(values))} validationSchema={validationSchema}>
                {({ values, handleChange, handleSubmit, errors, touched }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasCheckbox checked={values.ocupacao_irregular[0] === 1} name={"ocupacao_irregular"} value={1} onChange={handleChange} label={"Residem em área de ocupação irregular"} />
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasCheckbox name={"idosos_dependentes"} value={1} checked={values.idosos_dependentes[0] === 1} onChange={handleChange} label={"Existência de idosos dependentes na família"} />
                                </div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"deficientes"} value={1} checked={values.deficientes[0] === 1} onChange={handleChange} label={"Existência de deficientes na família"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"crianca_sozinha"} value={1} checked={values.crianca_sozinha[0] === 1} onChange={handleChange} label={"Crianças que ficam sozinhos no domicilio"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"desempregados"} value={1} checked={values.desempregados[0] === 1} onChange={handleChange} label={"Desemprego"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"baixa_renda"} value={1} checked={values.baixa_renda[0] === 1} onChange={handleChange} label={"Baixa renda"} /></div>
                            </Row>
                            <Row>
                                <div className="col"> <CrasCheckbox name={"outros"} value={1} checked={values.outros[0] === 1} onChange={handleChange} label={"Outros"} /></div>
                            </Row>
                            <h3>Situação Financeira e Previdenciária</h3>
                            <Row>
                                <div className="col">
                                    <CrasInput name="profissao" onChange={handleChange} value={values.profissao} label="Profissão" />
                                    <Padding />
                                    {errors.profissao && touched.profissao ? (
                                        <div style={{ color: "red" }}>{errors.profissao}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label>Carteira Assinada</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} name="carteira_assinada" value={"Sim"} onChange={handleChange} checked={values.carteira_assinada === "Sim"} label={"Sim"} />
                                        <CrasRadioButton selectValue={2} name="carteira_assinada" label={"Não"} value={"Não"} onChange={handleChange} checked={values.carteira_assinada === "Não"} />
                                    </Row>
                                    {errors.carteira_assinada && touched.carteira_assinada ? (
                                        <div style={{ color: "red" }}>{errors.carteira_assinada}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasInput value={values.renda} name={"renda"} onChange={handleChange} label="Renda Mensal do usuário" />
                                    {errors.renda && touched.renda ? (
                                        <div style={{ color: "red" }}>{errors.renda}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label>Reside com:</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.reside_familia === "Familia"} value={"Familia"} name={"reside_familia"} label="Família" />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.reside_familia === "Sozinho"} value={"Sozinho"} name={"reside_familia"} label="Sozinho" />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.reside_familia === "Outros"} value={"Outros"} name={"reside_familia"} label="Outros" />

                                    </Row>
                                    {errors.reside_familia && touched.reside_familia ? (
                                        <div style={{ color: "red" }}>{errors.reside_familia}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <h3>
                                Benefício (Benefício do usuário cadastrado)
                            </h3>
                            <Row>
                                <div className="col">
                                    <CrasInput value={values.loasbpc} name={"loasbpc"} onChange={handleChange} label="LOAS/BPC" />
                                    {errors.loasbpc && touched.loasbpc ? (
                                        <div style={{ color: "red" }}>{errors.loasbpc}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput value={values.previdencia} name={"previdencia"} onChange={handleChange} label="Previdência Social" />
                                    {errors.previdencia && touched.previdencia ? (
                                        <div style={{ color: "red" }}>{errors.previdencia}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput value={values.bolsa_familia} name={"bolsa_familia"} onChange={handleChange} label="Bolsa Família" />
                                    {errors.bolsa_familia && touched.bolsa_familia ? (
                                        <div style={{ color: "red" }}>{errors.bolsa_familia}</div>
                                    ) : null}
                                </div>
                            </Row>
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