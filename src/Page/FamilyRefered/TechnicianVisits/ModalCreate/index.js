import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasInputArea from "../../../../CrasUi/Input/inputArea";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";
import { useContext } from "react";
import { TechnicianVisitsContext } from "../../../../context/FamilyRefered/TechnicianVisits/context";
import { useParams } from "react-router-dom";
import { GetIdAttendance } from "../../../../services/localstorage";
import * as Yup from 'yup';


const ModalCreateTechnicianVists = ({ visible, setVisible }) => {

    const { id } = useParams()

    const { CreateTechnicianVisits } = useContext(TechnicianVisitsContext)

    const date = new Date(Date.now())

    const CreateSchema = Yup.object().shape({
        description: Yup.string().required("Campo Obrigatório"),
        title: Yup.string().required("Campo Obrigatório"),
    })
    return (
        <Dialog header="Criar Visita" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <Formik validationSchema={CreateSchema} initialValues={{ description: "", title: "", family: parseInt(id), attendance_unity: parseInt(GetIdAttendance()), created_at: date }} onSubmit={(values) => { CreateTechnicianVisits(values); setVisible(false) }}>
                {({ values, errors, touched, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                            <Padding padding="0 0 0 16px">
                                <CrasInput name={"title"} label={"Titulo"} onChange={handleChange} value={values.title} />
                                <Padding />
                                {errors.title && touched.title ? (
                                    <div style={{ color: "red" }}>{errors.title}<Padding /></div>
                                ) : null}
                            </Padding>
                            <Padding />

                            <Padding padding="0 0 0 16px">
                                <CrasInputArea name={"description"} label={"Descrição"} onChange={handleChange} value={values.description} />
                                <Padding />
                                {errors.description && touched.description ? (
                                    <div style={{ color: "red" }}>{errors.description}<Padding /></div>
                                ) : null}
                            </Padding>
                            <Padding />
                            <Padding />
                            <Column>
                                <Row id="center" style={{ width: "100%" }}>
                                    <ButtonPrime label={"Cadastrar"} type={"submit"} />
                                </Row>
                            </Column>
                        </form>
                    )
                }}

            </Formik>
        </Dialog >
    )
}

export default ModalCreateTechnicianVists