import { Dialog } from "primereact/dialog";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import { Grid } from "../../../../CrasUi/styles/styles";
import { useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { FamilyForwardingContext } from "../../../../context/FamilyForwarding/FamilyForwarding/context";

const ModalINSStracking = ({ visibleEdit, setVisibleEdit }) => {

    const { forwading } = useContext(FamilyForwardingContext);

    const ErrorsSchema = Yup.object().shape({
        name: Yup.object()
          .required('Campo Obrigatório'),

    });

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
                        {/* <CrasDropdown name="name" value={"A"} options={"A"} onChange={(a) => {console.log(a)}} optionLabel={"name"} label="Assistente Social Responsável *" /> */}
                        <p>{visibleEdit?.forwading?.status}</p>   
                    </Row>
                    <Padding padding="8px" />
                    <Formik initialValues={{ name: visibleEdit?.forwading?.status}}
                    validationSchema={ErrorsSchema}
                    onSubmit={(values) => {}}>
                        {({ values, errors, touched, handleChange }) => {
                            return (
                                <Form>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasDropdown name="name" value={values.name} options={forwading} onChange={handleChange} label="Status" />
                                            <Padding />
                                            {errors.name && touched.name ? (
                                                <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>
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