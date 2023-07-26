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

    const { nextStep } = useContext(CreateFamilyReferedContext);


    const initialValue = {
        nome: "",
        apelido: "",
        data_nascimento: "",
        certidao_nascimento: "",
        pasta: "",
        arquivo: "",
        nº: "",
        NIS: "",
        numero_rg: "",
        data_emissao_rg: "",
        uf_rg: "",
        emissao_rg: "",
        cpf: "",
        deficiente: "",
        deficiencia: "",
        mae: "",
        pai: "",
        estado_civil: "",
        escolaridade: "",
    }


    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                Dados da Familia
            </h3>
            <Formik initialValues={initialValue} onSubmit={values => { console.log(values); nextStep(values) }} >
                {({ values, handleChange, handleSubmit }) => {
                    console.log(values);
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput label="Pasta" name={"pasta"} onChange={handleChange} value={values.pasta} />
                                </div>
                                <div className="col"><CrasInput label="Arquivo" name="arquivo" onChange={handleChange} value={values.arquivo} /></div>
                                <div className="col"><CrasInput label="Nº" name="nº" onChange={values.nº} value={values.nº} /></div>
                            </Row>
                            <Row>
                                <div className="col"><CrasCalendar label="Data Entrada" showIcon /></div>
                                <div className="col"><CrasCalendar label="Data Desligamento" showIcon /></div>
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
                                <div className="col"><CrasDropdown label="UF" name="uf_rg" onChange={handleChange} /></div>
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
                                        <CrasRadioButton selectValue={1} name="Sim" />
                                        <CrasRadioButton selectValue={2} name="Não" />
                                    </Row>
                                </div>
                            </Row>

                            <Row>
                                <div className="col"><CrasDropdown label="Grau de Escolaridade" name="escolaridade" onChange={handleChange} value={values.escolaridade} /></div>
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