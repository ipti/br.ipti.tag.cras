import { Formik } from "formik";
import { useContext } from "react";
import * as Yup from 'yup';
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import CrasInputMask from "../../../CrasUi/Input/InputMask";
import CrasRadioButton from "../../../CrasUi/RadioButton";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateAttendanceContext } from "../../../context/AttendanceUnity/CreateAttendanceUnity/context";


const CreateAttendanceUnityPage = () => {

    const initialValue = {
        name: "",
        address:  "",
        telephone: "",
        reference: "",
        conditions: "",
        construction_type: "",
        rooms: 0,
        rent_value: 0
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        address: Yup.string().required("Campo obrigatório"),
        telephone: Yup.string().required("Campo obrigatório"),
        reference: Yup.string().required("Campo obrigatório"),
        conditions: Yup.string().required("Campo obrigatório"),
        construction_type: Yup.string().required("Campo obrigatório"),
        
    });

    const {handleCreateAttendance} = useContext(CreateAttendanceContext)

    return(
        <Container>
            <Padding padding="16px">
            <Formik initialValues={initialValue} onSubmit={value => handleCreateAttendance(value)} validationSchema={validationSchema} >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <h3>
                                Informações
                            </h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="name" onChange={handleChange} value={values.name} label="Nome" />
                                    <Padding />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInputMask mask={"(99) 9 9999-9999"} onChange={handleChange} value={values.telephone} name="telephone" label="Telefone" />
                                    <Padding />
                                    {errors.telephone && touched.telephone ? (
                                        <div style={{ color: "red" }}>{errors.telephone}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <h3>Endereço</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="address" onChange={handleChange} value={values.address} label="Endereço" />
                                    <Padding />
                                    {errors.address && touched.address ? (
                                        <div style={{ color: "red" }}>{errors.address}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput onChange={handleChange} value={values.reference} name="reference" label="Referência" />
                                    <Padding />
                                    {errors.reference && touched.reference ? (
                                        <div style={{ color: "red" }}>{errors.reference}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Row>
                                <div className="col">
                                    <label>Condições de Moradia</label>
                                    <Padding />
                                    <Row>
                                        <CrasRadioButton
                                            selectValue={"Própria"}
                                            value={"Própria"}
                                            checked={values.conditions === "Própria"}
                                            label={"Própria"}
                                            onChange={handleChange}
                                            name="conditions" />
                                        <CrasRadioButton
                                            selectValue={"Alugada"}
                                            value={"Alugada"}
                                            checked={values.conditions === "Alugada"}
                                            label={"Alugada"}
                                            onChange={handleChange}
                                            name="conditions" />
                                        <CrasRadioButton
                                            selectValue={"Cedida"}
                                            value="Cedida"
                                            onChange={handleChange}
                                            checked={values.conditions === "Cedida"}
                                            label={"Cedida"}
                                            name="conditions" />
                                        <CrasRadioButton
                                            selectValue={"Área de Ocupação"}
                                            value={"Área de Ocupação"}
                                            onChange={handleChange}
                                            checked={values.conditions === "Área de Ocupação"}
                                            label={"Área de Ocupação"}
                                            name="conditions" />
                                    </Row>
                                    {errors.conditions && touched.conditions ? (
                                        <div style={{ color: "red" }}>{errors.conditions}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                            </Row>
                            <div className="col">
                                <label>Tipo de Construção</label>
                                <Padding />
                                <Row>
                                    <CrasRadioButton
                                        selectValue={"Alvenaria"}
                                        value={"Alvenaria"}
                                        onChange={handleChange}
                                        checked={values.construction_type === "Alvenaria"}
                                        label={"Alvenaria"}
                                        name="construction_type" />
                                    <CrasRadioButton
                                        selectValue={"Madeira"}
                                        value={"Madeira"}
                                        onChange={handleChange}
                                        checked={values.construction_type === "Madeira"}
                                        label={"Madeira"}
                                        name="construction_type" />
                                    <CrasRadioButton
                                        selectValue={"Mista"}
                                        value={"Mista"}
                                        onChange={handleChange}
                                        checked={values.construction_type === "Mista"}
                                        label={"Mista"}
                                        name="construction_type" />
                                    <CrasRadioButton
                                        selectValue={"Taipa"}
                                        value={"Taipa"}
                                        onChange={handleChange}
                                        checked={values.construction_type === "Taipa"}
                                        label={"Taipa"}
                                        name="construction_type" />
                                </Row>
                                {errors.construction_type && touched.construction_type ? (
                                    <div style={{ color: "red" }}>{errors.construction_type}</div>
                                ) : null}
                            </div>
                            <Padding padding="16px" />
                            <Row id="end">
                                <Padding />
                                <ButtonPrime label="Criar" type="submit" />
                            </Row>
                        </form>
                    )
                }}
            </Formik>
            </Padding>
        </Container>
    )
}

export default CreateAttendanceUnityPage;