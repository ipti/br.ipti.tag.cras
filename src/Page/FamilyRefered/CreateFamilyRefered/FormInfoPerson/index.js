import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasCalendar from "../../../../CrasUi/Calendar";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { CreateFamilyReferedContext } from "../../../../context/CreateFamilyRefered/context";

const FormInfoPerson = () => {

    const { nextStep, estadosDoBrasil, escolaridadeNoBrasil, dataValues } = useContext(CreateFamilyReferedContext);


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
        deficiente: dataValues.deficiencia ?? "",
        deficiencia: dataValues.deficiencia ?? "",
        mae: dataValues.mae ?? "",
        pai: dataValues.pai ?? "",
        estado_civil: dataValues.estado_civil ?? "",
        escolaridade: dataValues.escolaridade ?? "",
        data_inicial: dataValues.data_inicial,
        data_final: dataValues.data_final
    }


    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                Dados da Familia
            </h3>
            <Formik initialValues={initialValue} onSubmit={values => { nextStep(values) }} >
                {({ values, handleChange, handleSubmit }) => {
                    console.log(values);
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput label="Pasta" name={"pasta"} onChange={handleChange} value={values.pasta} />
                                </div>
                                <div className="col"><CrasInput label="Arquivo" name="arquivo" onChange={handleChange} value={values.arquivo} /></div>
                                <div className="col"><CrasInput label="Nº" name="nº" onChange={handleChange} value={values.nº} /></div>
                            </Row>
                            <Row>
                                <div className="col"><CrasCalendar name={"data_inicial"} onChange={handleChange} label="Data Entrada" showIcon /></div>
                                <div className="col"><CrasCalendar name={"data_final"} onChange={handleChange} label="Data Desligamento" showIcon /></div>
                            </Row>
                            <Padding padding="8px" />
                            <h3>Dados Pessoais</h3>
                            <Row>
                                <div className="col"><CrasInput label="Nome" name="nome" onChange={handleChange} value={values.nome} /></div>
                                <div className="col"><CrasInput label="Apelido" name="apelido" onChange={handleChange} value={values.apelido} /></div>
                            </Row>
                            <Row>
                                <div className="col"><CrasCalendar label="Data de Nascimento" name="data_nascimento" onChange={handleChange} showIcon /></div>
                                <div className="col"><CrasInput label="Nº Cadastro" name={"certidao_nascimento"} onChange={handleChange} value={values.certidao_nascimento} /></div>
                                <div className="col"><CrasInput label="NIS" name="NIS" onChange={handleChange} value={values.NIS} /></div>
                            </Row>
                            <Row>
                                <div className="col"><CrasInput label="RG" name="numero_rg" onChange={handleChange} value={values.numero_rg} /></div>
                                <div className="col"><CrasCalendar label="Data de Emissão" name="data_emissao_rg" onChange={handleChange} showIcon /></div>
                                <div className="col"><CrasDropdown options={estadosDoBrasil} value={values.uf_rg} optionLabel={"uf"} label="UF" name="uf_rg" onChange={handleChange} /></div>
                                <div className="col"><CrasInput label="Órgão Emissor" name="emissao_rg" onChange={handleChange} value={values.emissao_rg} /></div>
                            </Row>
                            <Row>
                                <div className="col"><CrasInput label="CPF" name="cpf" onChange={handleChange} value={values.cpf} /></div>
                                <div className="col">
                                    <label>Deficiente Físico ou Mental ?</label>
                                    <Row>
                                        <CrasRadioButton selectValue={1} name="Sim" />
                                        <CrasRadioButton selectValue={2} name="Não" />
                                    </Row>
                                </div>
                            </Row>

                            <Row>
                                <div className="col"><CrasInput label="Mãe" name="mae" onChange={handleChange} value={values.mae} /></div>
                                <div className="col"><CrasInput label="Pai" name={"pai"} onChange={handleChange} value={values.pai} /></div>
                            </Row>
                            <Row>
                                <div className="col">
                                    <label>Estado Civil</label>
                                    <Row>
                                        <CrasRadioButton onChange={handleChange} label={"Sim"} checked={values.estado_civil === 1} value={1}  selectValue={1} name="estado_civil" />
                                        <CrasRadioButton selectValue={2} label={"Não"} onChange={handleChange} checked={values.estado_civil === 2} value={2} name="estado_civil" />
                                    </Row>
                                </div>
                            </Row>

                            <Row>
                                <div className="col"><CrasDropdown options={escolaridadeNoBrasil} optionLabel={""} label="Grau de Escolaridade" name="escolaridade" onChange={handleChange} value={values.escolaridade} /></div>
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