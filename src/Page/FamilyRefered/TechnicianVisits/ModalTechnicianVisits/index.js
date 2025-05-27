import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { useContext } from "react";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasInputArea from "../../../../CrasUi/Input/inputArea";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { TechnicianVisitsContext } from "../../../../context/FamilyRefered/TechnicianVisits/context";

const ModalTechnicianVists = ({ visible, setVisible }) => {


    const { EditTechnicianVisits } = useContext(TechnicianVisitsContext)

    return (

        <Dialog header="Detalhes da Visita" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <Row>
                <h2>Data: </h2><Padding /><p>{visible.created_at}</p>
            </Row>
            <Padding padding="8px" />
            <Formik initialValues={{ title: visible?.title, description: visible?.description }} onSubmit={(values) => {EditTechnicianVisits(visible?.id, values); setVisible(false)}}>
                {({ values, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <CrasInput label={"Titulo"} value={values.title} name={"title"} onChange={handleChange} />
                            <Padding padding="8px" />
                            <CrasInputArea name={"description"} label={"Descrição"} onChange={handleChange} value={values.description} />
                            <Padding padding="8px" />
                            <Column>
                                <Row id="center">
                                    <ButtonPrime type={"submit"} label={"Salvar"} />
                                </Row>
                            </Column>
                        </form>
                    )
                }}
            </Formik>

            <Padding padding="8px" />

        </Dialog >
    )
}

export default ModalTechnicianVists