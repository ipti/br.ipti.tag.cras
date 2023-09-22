import React, { useContext } from "react";
import * as Yup from 'yup';
import CrasCalendar from "../../../../CrasUi/Calendar";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputMask from "../../../../CrasUi/Input/InputMask";
import CrasRadioButton from "../../../../CrasUi/RadioButton";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { EditFamilyReferedContext } from "../../../../context/FamilyRefered/EditFamilyRefered/context";


const FormInfoPerson = ({ values, errors, touched, handleChange }) => {

    const { estadosDoBrasil, escolaridadeNoBrasil, family, estadosCivis } = useContext(EditFamilyReferedContext);

    if (!family) return null;

    const dateEntry = new Date(values.data_inicial);
    const dateExit = new Date(values.data_final);
    const dateEmit = new Date(values.data_emissao_rg);
    const dateBithrday = new Date(values.data_nascimento)


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
            <Grid checkMockup={[{}, {}, {}]}>
                <Column>
                    <CrasInput label="Pasta" name={"pasta"} onChange={handleChange} value={values.pasta} />
                    <Padding />
                    {errors.pasta && touched.pasta ? (
                        <div style={{ color: "red" }}>{errors.pasta} <Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Arquivo" name="arquivo" onChange={handleChange} value={values.arquivo} />
                    <Padding />
                    {errors.arquivo && touched.arquivo ? (
                        <div style={{ color: "red" }}>{errors.arquivo}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Nº" name="nº" onChange={handleChange} value={values.nº} />
                    <Padding />
                    {errors.nº && touched.nº ? (
                        <div style={{ color: "red" }}>{errors.nº}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasCalendar name={"data_inicial"} date={dateEntry} onChange={handleChange} label="Data Entrada" showIcon />
                    <Padding />
                    {errors.data_inicial && touched.data_inicial ? (
                        <div style={{ color: "red" }}>{errors.data_inicial}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasCalendar name={"data_final"} date={dateExit} onChange={handleChange} label="Data Desligamento" showIcon />
                    <Padding />
                    {errors.data_final && touched.data_final ? (
                        <div style={{ color: "red" }}>{errors.data_final}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Padding padding="8px" />
            <h3>Dados Pessoais</h3>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInput label="Nome" name="nome" onChange={handleChange} value={values.nome} />
                    <Padding />
                    {errors.nome && touched.nome ? (
                        <div style={{ color: "red" }}>{errors.nome}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Apelido" name="apelido" onChange={handleChange} value={values.apelido} />
                    <Padding />
                    {errors.apelido && touched.apelido ? (
                        <div style={{ color: "red" }}>{errors.apelido}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}, {}]}>
                <Column>
                    <CrasCalendar label="Data de Nascimento" date={dateBithrday} name="data_nascimento" onChange={handleChange} showIcon />
                    <Padding />
                    {errors.data_nascimento && touched.data_nascimento ? (
                        <div style={{ color: "red" }}>{errors.data_nascimento}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Nº Cadastro" name={"certidao_nascimento"} onChange={handleChange} value={values.certidao_nascimento} />
                    <Padding />
                    {errors.certidao_nascimento && touched.certidao_nascimento ? (
                        <div style={{ color: "red" }}>{errors.certidao_nascimento}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="NIS" name="NIS" onChange={handleChange} value={values.NIS} />
                    <Padding />
                    {errors.NIS && touched.NIS ? (
                        <div style={{ color: "red" }}>{errors.NIS}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}, {}, {}]}>
                <Column>
                    <CrasInputMask mask={"99.999-9999"} label="RG" name="numero_rg" onChange={handleChange} value={values.numero_rg} />
                    <Padding />
                    {errors.numero_rg && touched.numero_rg ? (
                        <div style={{ color: "red" }}>{errors.numero_rg}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasCalendar label="Data de Emissão" date={dateEmit} name="data_emissao_rg" onChange={handleChange} showIcon />
                    <Padding />
                    {errors.data_emissao_rg && touched.data_emissao_rg ? (
                        <div style={{ color: "red" }}>{errors.data_emissao_rg}<Padding /></div>
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
                    <CrasInput label="Órgão Emissor" name="emissao_rg" onChange={handleChange} value={values.emissao_rg} />
                    <Padding />
                    {errors.emissao_rg && touched.emissao_rg ? (
                        <div style={{ color: "red" }}>{errors.emissao_rg}<Padding /></div>
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
                        <CrasRadioButton selectValue={1} onChange={handleChange} checked={values.deficiente === "Sim"} value={"Sim"} name="deficiente" label={"Sim"} />
                        <CrasRadioButton selectValue={2} onChange={handleChange} checked={values.deficiente === "Não"} value={"Não"} name="deficiente" label="Não" />
                    </Row>
                    <Padding />
                    {errors.deficiente && touched.deficiente ? (
                        <div style={{ color: "red" }}>{errors.deficiente}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInput label="Mãe" name="mae" onChange={handleChange} value={values.mae} />
                    <Padding />
                    {errors.mae && touched.mae ? (
                        <div style={{ color: "red" }}>{errors.mae}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Pai" name={"pai"} onChange={handleChange} value={values.pai} />
                    <Padding />
                    {errors.pai && touched.pai ? (
                        <div style={{ color: "red" }}>{errors.pai}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}]}>
                <Column>
                    <CrasDropdown options={estadosCivis} optionLabel={""} value={values.estado_civil} label={"Estado civil"} onChange={handleChange} name="estado_civil" />
                    <Padding />
                    {errors.estado_civil && touched.estado_civil ? (
                        <div style={{ color: "red" }}>{errors.estado_civil}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>

            <Grid checkMockup={[{}]}>
                <Column>
                    <CrasDropdown options={escolaridadeNoBrasil} optionLabel={""} label="Grau de Escolaridade" name="escolaridade" onChange={handleChange} value={values.escolaridade} />
                    <Padding />
                    {errors.escolaridade && touched.escolaridade ? (
                        <div style={{ color: "red" }}>{errors.escolaridade}<Padding />
                        </div>
                    ) : null}
                </Column>
            </Grid>
            <Padding padding="16px" />
        </Column >
    )
}

export default FormInfoPerson;