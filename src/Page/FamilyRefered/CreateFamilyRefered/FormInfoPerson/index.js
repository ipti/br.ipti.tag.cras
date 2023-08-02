import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasCalendar from "../../../../CrasUi/Calendar";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/FamilyRefered/CreateFamilyRefered/context";
import * as Yup from 'yup';
import CrasInputMask from "../../../../CrasUi/Input/InputMask";


const FormInfoPerson = () => {

    const { nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues, estadosCivis } = useContext(CreateFamilyReferedContext);


    const initialValue = {
        nome: dataValues.nome ?? "",
        apelido: dataValues.apelido ?? "",
        data_nascimento: dataValues.data_nascimento ?? "",
        certidao_nascimento: dataValues.certidao_nascimento ?? "",
        pasta: dataValues.pasta ?? "",
        arquivo: dataValues.arquivo ?? "",
        nº: dataValues.nº ?? "",
        NIS: dataValues.NIS ?? "",
        numero_rg: dataValues.numero_rg ?? "",
        data_emissao_rg: dataValues.data_emissao_rg ?? "",
        uf_rg: dataValues.uf_rg ?? "",
        emissao_rg: dataValues.emissao_rg ?? "",
        cpf: dataValues.cpf ?? "",
        deficiente: dataValues.deficiente ?? "",
        deficiencia: dataValues.deficiencia ?? "",
        mae: dataValues.mae ?? "",
        pai: dataValues.pai ?? "",
        estado_civil: dataValues.estado_civil ?? "",
        escolaridade: dataValues.escolaridade ?? "",
        data_inicial: dataValues.data_inicial,
        data_final: dataValues.data_final
    }


    const validationSchema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        apelido: Yup.string().required("Campo obrigatório"),
        data_nascimento: Yup.string().required("Campo obrigatório"),
        certidao_nascimento: Yup.number(),
        pasta: Yup.string(),
        arquivo: Yup.string(),
        nº: Yup.string(),
        NIS: Yup.number(),
        numero_rg: Yup.string().required("Campo obrigatório"),
        data_emissao_rg: Yup.string().required("Campo obrigatório"),
        uf_rg: Yup.object().required("Campo obrigatório"),
        emissao_rg: Yup.string().required("Campo obrigatório"),
        cpf: Yup.string().required("Campo obrigatório"),
        deficiente: Yup.string().required("Campo obrigatório"),
        deficiencia: Yup.string(),
        mae: Yup.string().required("Campo obrigatório"),
        pai: Yup.string().required("Campo obrigatório"),
        estado_civil: Yup.string(),
        escolaridade: Yup.string().required("Campo obrigatório"),
        data_inicial: Yup.string(),
        data_final: Yup.string(),
    });

    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                Dados da Familia
            </h3>
            <Formik initialValues={initialValue} onSubmit={values => { nextStep(values) }} validationSchema={validationSchema}>
                {({ values, handleChange, handleSubmit, errors, touched }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput label="Pasta" name={"pasta"} onChange={handleChange} value={values.pasta} />
                                    {errors.pasta && touched.pasta ? (
                                        <div style={{ color: "red" }}>{errors.pasta}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Arquivo" name="arquivo" onChange={handleChange} value={values.arquivo} />
                                    {errors.arquivo && touched.arquivo ? (
                                        <div style={{ color: "red" }}>{errors.arquivo}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Nº" name="nº" onChange={handleChange} value={values.nº} />
                                    {errors.nº && touched.nº ? (
                                        <div style={{ color: "red" }}>{errors.nº}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasCalendar name={"data_inicial"} onChange={handleChange} label="Data Entrada" showIcon />
                                    {errors.data_inicial && touched.data_inicial ? (
                                        <div style={{ color: "red" }}>{errors.data_inicial}</div>
                                    ) : null}
                                </div>
                                <div className="col">

                                    <CrasCalendar name={"data_final"} onChange={handleChange} label="Data Desligamento" showIcon />
                                    {errors.data_final && touched.data_final ? (
                                        <div style={{ color: "red" }}>{errors.data_final}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Padding padding="8px" />
                            <h3>Dados Pessoais</h3>
                            <Row>
                                <div className="col">
                                    <CrasInput label="Nome" name="nome" onChange={handleChange} value={values.nome} />
                                    {errors.nome && touched.nome ? (
                                        <div style={{ color: "red" }}>{errors.nome}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Apelido" name="apelido" onChange={handleChange} value={values.apelido} />
                                    {errors.apelido && touched.apelido ? (
                                        <div style={{ color: "red" }}>{errors.apelido}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasCalendar label="Data de Nascimento" name="data_nascimento" onChange={handleChange} showIcon />
                                    {errors.data_nascimento && touched.data_nascimento ? (
                                        <div style={{ color: "red" }}>{errors.data_nascimento}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Nº Cadastro" name={"certidao_nascimento"} onChange={handleChange} value={values.certidao_nascimento} />
                                    {errors.certidao_nascimento && touched.certidao_nascimento ? (
                                        <div style={{ color: "red" }}>{errors.certidao_nascimento}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="NIS" name="NIS" onChange={handleChange} value={values.NIS} />
                                    {errors.NIS && touched.NIS ? (
                                        <div style={{ color: "red" }}>{errors.NIS}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasInputMask mask={"99.999-9999"} label="RG" name="numero_rg" onChange={handleChange} value={values.numero_rg} />
                                    {errors.numero_rg && touched.numero_rg ? (
                                        <div style={{ color: "red" }}>{errors.numero_rg}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasCalendar label="Data de Emissão" name="data_emissao_rg" onChange={handleChange} showIcon />
                                    {errors.data_emissao_rg && touched.data_emissao_rg ? (
                                        <div style={{ color: "red" }}>{errors.data_emissao_rg}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasDropdown options={estadosDoBrasil} value={values.uf_rg} optionLabel={"uf"} label="UF" name="uf_rg" onChange={handleChange} />
                                    {errors.uf_rg && touched.uf_rg ? (
                                        <div style={{ color: "red" }}>{errors.uf_rg}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Órgão Emissor" name="emissao_rg" onChange={handleChange} value={values.emissao_rg} />
                                    {errors.emissao_rg && touched.emissao_rg ? (
                                        <div style={{ color: "red" }}>{errors.emissao_rg}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasInputMask mask={"999.999.999-99"} label="CPF" name="cpf" onChange={handleChange} value={values.cpf} />
                                    {errors.cpf && touched.cpf ? (
                                        <div style={{ color: "red" }}>{errors.cpf}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label>Deficiente Físico ou Mental ?</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.deficiente === "Sim"} value={"Sim"} name="deficiente" label={"Sim"} />
                                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.deficiente === "Não"} value={"Não"} name="deficiente" label="Não" />
                                    </Row>
                                    {errors.deficiente && touched.deficiente ? (
                                        <div style={{ color: "red" }}>{errors.deficiente}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasInput label="Mãe" name="mae" onChange={handleChange} value={values.mae} />
                                    {errors.mae && touched.mae ? (
                                        <div style={{ color: "red" }}>{errors.mae}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <CrasInput label="Pai" name={"pai"} onChange={handleChange} value={values.pai} />
                                    {errors.pai && touched.pai ? (
                                        <div style={{ color: "red" }}>{errors.pai}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <CrasDropdown options={estadosCivis} optionLabel={""} value={values.estado_civil} label={"Estado civil"} onChange={handleChange} name="estado_civil" />
                                    {errors.estado_civil && touched.estado_civil ? (
                                        <div style={{ color: "red" }}>{errors.estado_civil}</div>
                                    ) : null}
                                </div>
                            </Row>

                            <Row>
                                <div className="col">
                                    <CrasDropdown options={escolaridadeNoBrasil} optionLabel={""} label="Grau de Escolaridade" name="escolaridade" onChange={handleChange} value={values.escolaridade} />
                                    {errors.escolaridade && touched.escolaridade ? (
                                        <div style={{ color: "red" }}>{errors.escolaridade}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Próximo" />
                            </Row>
                        </form>
                    )
                }
                }
            </Formik>

        </Column >
    )
}

export default FormInfoPerson;