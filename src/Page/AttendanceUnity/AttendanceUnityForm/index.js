import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import CrasInputMask from "../../../CrasUi/Input/InputMask";
import CrasInputNumber from "../../../CrasUi/Input/InputNumber";
import CrasRadioButton from "../../../CrasUi/RadioButton";
import CrasDropdown from "../../../CrasUi/Dropdown";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { AttendanceUnityFormContext } from "../../../context/AttendanceUnity/AttendanceUnityForm/context";
import { useFetchAllState, useFetchAllCity } from "../../../sdk/State/request";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    unity_number: Yup.number().required("Campo obrigatório"),
    type: Yup.string().required("Campo obrigatório"),
    address: Yup.string().nullable(),
    telephone: Yup.string().nullable(),
    reference: Yup.string().nullable(),
    conditions: Yup.string().nullable(),
    construction_type: Yup.string().nullable(),
    email: Yup.string().nullable(),
    edcenso_city_fk: Yup.number().nullable(),
});

const AttendanceUnityFormPage = () => {
    const { isEdit, oneAttendance, handleSubmit } = useContext(AttendanceUnityFormContext);

    const [selectedUf, setSelectedUf] = useState(null);
    const { data: ufs = [] } = useFetchAllState();
    const { data: cities = [] } = useFetchAllCity(selectedUf?.id);

    useEffect(() => {
        if (isEdit && oneAttendance?.address?.edcenso_city?.edcenso_uf) {
            setSelectedUf(oneAttendance.address.edcenso_city.edcenso_uf);
        }
    }, [isEdit, oneAttendance]);

    if (isEdit && !oneAttendance) return null;

    const initialValues = {
        name: oneAttendance?.name ?? "",
        unity_number: oneAttendance?.unity_number ?? "",
        type: oneAttendance?.type ?? "",
        email: oneAttendance?.email ?? "",
        address: oneAttendance?.address?.address ?? "",
        telephone: oneAttendance?.address?.telephone ?? "",
        reference: oneAttendance?.address?.reference ?? "",
        conditions: oneAttendance?.address?.conditions ?? "",
        construction_type: oneAttendance?.address?.construction_type ?? "",
        rooms: oneAttendance?.address?.rooms ?? null,
        rent_value: oneAttendance?.address?.rent_value ?? null,
        edcenso_city_fk: oneAttendance?.address?.edcenso_city_fk ?? null,
    };

    return (
        <Container>
            <Padding padding="16px">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    {({ values, handleChange, handleSubmit: formSubmit, errors, touched, setFieldValue }) => (
                        <form onSubmit={formSubmit}>
                            <h3>Informações</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="name" onChange={handleChange} value={values.name} label="Nome *" />
                                    <Padding />
                                    {errors.name && touched.name && (
                                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                    )}
                                </Column>
                                <Column>
                                    <CrasInputMask mask={"(99) 9 9999-9999"} onChange={handleChange} value={values.telephone} name="telephone" label="Telefone" />
                                    <Padding />
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}]}>
                                <Column>
                                    <CrasInput name="email" onChange={handleChange} value={values.email} label="Email" />
                                    <Padding />
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <label>Tipo de Unidade *</label>
                                    <Row>
                                        <CrasRadioButton selectValue={"CRAS"} onChange={handleChange} checked={values.type === "CRAS"} value={"CRAS"} name="type" label={"CRAS"} />
                                        <CrasRadioButton selectValue={"CREAS"} onChange={handleChange} checked={values.type === "CREAS"} value={"CREAS"} name="type" label="CREAS" />
                                    </Row>
                                    <Padding />
                                    {errors.type && touched.type && (
                                        <div style={{ color: "red" }}>{errors.type}<Padding /></div>
                                    )}
                                </Column>
                                <Column>
                                    <CrasInputNumber onChange={handleChange} value={values.unity_number} name="unity_number" label="Nº da Unidade *" />
                                    <Padding />
                                    {errors.unity_number && touched.unity_number && (
                                        <div style={{ color: "red" }}>{errors.unity_number}<Padding /></div>
                                    )}
                                </Column>
                            </Grid>
                            <h3>Endereço</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown
                                        label="Estado (UF)"
                                        options={ufs}
                                        optionLabel="acronym"
                                        value={selectedUf}
                                        filter
                                        onChange={(e) => {
                                            setSelectedUf(e.value);
                                            setFieldValue("edcenso_city_fk", null);
                                        }}
                                        placeholder="Selecione o estado"
                                    />
                                    <Padding />
                                </Column>
                                <Column>
                                    <CrasDropdown
                                        label="Cidade"
                                        options={cities}
                                        optionLabel="name"
                                        value={cities.find(c => c.id === values.edcenso_city_fk) || null}
                                        filter
                                        onChange={(e) => setFieldValue("edcenso_city_fk", e.value?.id ?? null)}
                                        placeholder={selectedUf ? "Selecione a cidade" : "Selecione o estado primeiro"}
                                    />
                                    <Padding />
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="address" onChange={handleChange} value={values.address} label="Endereço" />
                                    <Padding />
                                </Column>
                                <Column>
                                    <CrasInput onChange={handleChange} value={values.reference} name="reference" label="Referência" />
                                    <Padding />
                                </Column>
                            </Grid>
                            <Row>
                                <div className="col">
                                    <label>Condições de Moradia</label>
                                    <Padding />
                                    <Row>
                                        <CrasRadioButton selectValue={"Própria"} value={"Própria"} checked={values.conditions === "Própria"} label={"Própria"} onChange={handleChange} name="conditions" />
                                        <CrasRadioButton selectValue={"Alugada"} value={"Alugada"} checked={values.conditions === "Alugada"} label={"Alugada"} onChange={handleChange} name="conditions" />
                                        <CrasRadioButton selectValue={"Cedida"} value={"Cedida"} checked={values.conditions === "Cedida"} label={"Cedida"} onChange={handleChange} name="conditions" />
                                        <CrasRadioButton selectValue={"Área de Ocupação"} value={"Área de Ocupação"} checked={values.conditions === "Área de Ocupação"} label={"Área de Ocupação"} onChange={handleChange} name="conditions" />
                                    </Row>
                                </div>
                            </Row>
                            <Row />
                            <div className="col">
                                <label>Tipo de Construção</label>
                                <Padding />
                                <Row>
                                    <CrasRadioButton selectValue={"Alvenaria"} value={"Alvenaria"} onChange={handleChange} checked={values.construction_type === "Alvenaria"} label={"Alvenaria"} name="construction_type" />
                                    <CrasRadioButton selectValue={"Madeira"} value={"Madeira"} onChange={handleChange} checked={values.construction_type === "Madeira"} label={"Madeira"} name="construction_type" />
                                    <CrasRadioButton selectValue={"Mista"} value={"Mista"} onChange={handleChange} checked={values.construction_type === "Mista"} label={"Mista"} name="construction_type" />
                                    <CrasRadioButton selectValue={"Taipa"} value={"Taipa"} onChange={handleChange} checked={values.construction_type === "Taipa"} label={"Taipa"} name="construction_type" />
                                </Row>
                            </div>
                            <Padding padding="16px" />
                            <Row id="end">
                                <Padding />
                                <ButtonPrime label={isEdit ? "Salvar" : "Criar"} type="submit" />
                            </Row>
                        </form>
                    )}
                </Formik>
            </Padding>
        </Container>
    );
};

export default AttendanceUnityFormPage;
