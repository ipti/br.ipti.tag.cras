import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasInputArea from "../../../../CrasUi/Input/inputArea";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";

const ModalCreateTechnicianVists = ({visible, setVisible}) => {
    return (
        <Dialog header="Criar Visita" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <Formik initialValues={{ description: "", title: ""}} onSubmit={(values) => {}}>
                {({ values, errors, touched, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                            <Padding padding="0 0 0 16px">
                                <CrasInput name={"title"} label={"Titulo"} onChange={handleChange} value={values.title} />
                            </Padding>
                            <Padding />

                            <Padding padding="0 0 0 16px">
                                <CrasInputArea name={"description"} label={"Descrição"} onChange={handleChange} value={values.description} />
                            </Padding>
                            <Padding />
                            {errors.description && touched.description ? (
                                <div style={{ color: "red" }}>{errors.description}<Padding /></div>
                            ) : null}
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
        </Dialog>
    )
}

export default ModalCreateTechnicianVists