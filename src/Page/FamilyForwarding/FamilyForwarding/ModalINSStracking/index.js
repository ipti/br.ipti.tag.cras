import { Dialog } from "primereact/dialog";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { Grid } from "../../../../CrasUi/styles/styles";
import { useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { EditForwardingContext } from "../../../../context/FamilyForwarding/EditFamilyForwarding/context";
import { Status } from "../../../../Controller/controllerGlobal";
// import { EditTrackingContext } from "../../../../context/FamilyForwarding/EditTracking/context";

const ModalINSStracking = ({ visibleEdit, setVisibleEdit }) => {

    const { handleEditForwarding } = useContext(EditForwardingContext);

    const ErrorsSchema = Yup.object().shape({
        name: Yup.object()
          .required('Campo Obrigatório'),

    });

    const status = [
        {id: Status.PENDENTE, name: "Pendente"},
        {id: Status.DEFERIDO, name: "Deferido"},
        {id: Status.INDEFERIDO, name: "Indeferido"},
    ]

    // const { handleEditTracking} = useContext(EditTrackingContext);

    return (
        <Dialog header="Acompanhamento" visible={visibleEdit} style={{ width: '50vw' }} onHide={() => setVisibleEdit(false)}>
            {visibleEdit ? <Column>
                <Padding padding="16px">
                    {visibleEdit?.user_identify?.name ? <Row id="space-between">
                        <Row>
                            <h2>Nome: </h2>
                            <Padding padding="2px" />
                            <p>{visibleEdit?.user_identify?.name}</p>
                        </Row>
                        <Padding padding="8px" />
                        <Row>
                            <h2>Parentesco: </h2>
                            <Padding padding="2px" />
                            <p>{visibleEdit?.user_identify?.kinship}</p>
                        </Row>
                    </Row> : null}
                    <Padding padding="8px" />
                    <Row id="space-between">
                        <Row><h2>Local: </h2>
                            <Padding padding="2px" />
                            <p>{visibleEdit?.forwading?.name}</p></Row>
                        <Padding padding="8px" />
                        <Row>
                            <h2>Tipo: </h2>
                            <Padding padding="2px" />
                            <p>{visibleEdit?.forwading?.type}</p>
                        </Row>
                    </Row>
                    <Padding padding="8px" />

                    <Row>
                        <h2>Data do encaminhamento: </h2>
                        <Padding padding="2px" />
                        <p>{formatarData(visibleEdit?.date)}</p>
                    </Row>
                    <Padding padding="8px" />
                    <Row>
                        <h2>Descrição: </h2>
                        <Padding padding="2px" />
                        <p>{visibleEdit?.description}</p>
                    </Row>
                    <Padding padding="8px" />
                    <Row>
                        <h2>Breve relato: </h2>
                        <Padding padding="2px" />
                        <p>{visibleEdit?.report}</p>
                    </Row>
                    <Padding padding="8px" />
                    <Row>               
                        <h2>Status do Acompanhamento: </h2>
                        <Padding padding="2px" />
                        <p>{visibleEdit?.status}</p>   
                    </Row>
                    <Padding padding="8px" />

                    <Formik initialValues={{ name: visibleEdit?.status}}
                    validationSchema={ErrorsSchema}
                    onSubmit={(status) => {
                        handleEditForwarding({ status: status.name }, visibleEdit?.id)
                        setVisibleEdit(false)
                    }}>
                        {({ values, errors, touched, handleChange }) => {
                            return (
                                <Form>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasDropdown name="name" value={values.name} options={status} onChange={handleChange} label="Status" optionLabel={"name"} />
                                            <Padding />
                                            {errors.name && touched.name ? (
                                                <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
                                    <Row>
                                        <Padding />
                                            <ButtonPrime label="Salvar" type="submit" />
                                    </Row>
                                </Form>
                            )
                        }}
                    </Formik>

                </Padding>
            </Column> : null}
        </Dialog>
    )
}

export default ModalINSStracking;