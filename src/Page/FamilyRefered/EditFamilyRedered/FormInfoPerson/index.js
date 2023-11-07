import React, { useContext } from "react";
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

    const dateEntry = new Date(values.initial_date);
    const dateExit = new Date(values.final_date);
    const dateEmit = new Date(values.rg_date_emission);
    const dateBithrday = new Date(values.birthday)

    return (
        <Column>
            <Padding padding="16px" />
            <h3>
                Dados da Familia
            </h3>
            <Grid checkMockup={[{}, {}, {}]}>
                <Column>
                    <CrasInput label="Pasta" name={"folder"} onChange={handleChange} value={values.folder} />
                    <Padding />
                    {errors.folder && touched.folder ? (
                        <div style={{ color: "red" }}>{errors.folder} <Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Arquivo" name="archive" onChange={handleChange} value={values.archive} />
                    <Padding />
                    {errors.archive && touched.archive ? (
                        <div style={{ color: "red" }}>{errors.archive}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Nº" name="number" onChange={handleChange} value={values.number} />
                    <Padding />
                    {errors.number && touched.number ? (
                        <div style={{ color: "red" }}>{errors.number}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasCalendar name={"initial_date"} date={dateEntry} onChange={handleChange} label="Data Entrada" showIcon />
                    <Padding />
                    {errors.initial_date && touched.initial_date ? (
                        <div style={{ color: "red" }}>{errors.initial_date}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasCalendar name={"final_date"} date={values.final_date ? dateExit : values.final_date} onChange={handleChange} label="Data Desligamento" showIcon />
                    <Padding />
                    {errors.final_date && touched.final_date ? (
                        <div style={{ color: "red" }}>{errors.final_date}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Padding padding="8px" />
            <h3>Dados Pessoais</h3>
            <Grid checkMockup={[{}, {}]}>
                <Column>
                    <CrasInput label="Nome" name="name" onChange={handleChange} value={values.name} />
                    <Padding />
                    {errors.name && touched.name ? (
                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Apelido" name="surname" onChange={handleChange} value={values.surname} />
                    <Padding />
                    {errors.surname && touched.surname ? (
                        <div style={{ color: "red" }}>{errors.surname}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>
            <Grid checkMockup={[{}, {}, {}]}>
                <Column>
                    <CrasCalendar label="Data de Nascimento" date={dateBithrday} name="birthday" onChange={handleChange} showIcon />
                    <Padding />
                    {errors.birthday && touched.birthday ? (
                        <div style={{ color: "red" }}>{errors.birthday}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="Certidão de nascimento" name={"birth_certificate"} onChange={handleChange} value={values.birth_certificate} />
                    <Padding />
                    {errors.birth_certificate && touched.birth_certificate ? (
                        <div style={{ color: "red" }}>{errors.birth_certificate}<Padding /></div>
                    ) : null}
                </Column>
                <Column>
                    <CrasInput label="NIS" name="nis" onChange={handleChange} value={values.nis} />
                    <Padding />
                    {errors.nis && touched.nis ? (
                        <div style={{ color: "red" }}>{errors.nis}<Padding /></div>
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
                    <CrasCalendar label="Data de Emissão" date={dateEmit} name="rg_date_emission" onChange={handleChange} showIcon />
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
            <Grid checkMockup={[{}]}>
                <Column>
                    <CrasDropdown options={estadosCivis} optionLabel={""} value={values.marital_status} label={"Estado civil"} onChange={handleChange} name="marital_status" />
                    <Padding />
                    {errors.marital_status && touched.marital_status ? (
                        <div style={{ color: "red" }}>{errors.marital_status}<Padding /></div>
                    ) : null}
                </Column>
            </Grid>

            <Grid checkMockup={[{}]}>
                <Column>
                    <CrasDropdown options={escolaridadeNoBrasil} optionLabel={""} label="Grau de Escolaridade" name="escolarity" onChange={handleChange} value={values.escolarity} />
                    <Padding />
                    {errors.escolarity && touched.escolarity ? (
                        <div style={{ color: "red" }}>{errors.escolarity}<Padding />
                        </div>
                    ) : null}
                </Column>
            </Grid>
            <Padding padding="16px" />
        </Column >
    )
}

export default FormInfoPerson;