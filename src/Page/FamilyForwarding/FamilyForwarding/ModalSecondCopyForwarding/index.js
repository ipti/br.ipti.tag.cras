import { Dialog } from "primereact/dialog";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasCalendar from "../../../../CrasUi/Calendar";
import * as Yup from 'yup';

const ModalSecondCopyForwarding = ({ visibleEdit, setVisibleEdit }) => {

    const history = useNavigate()
    const { id } = useParams()

    const ErrorsSchema = Yup.object().shape({

        registry: Yup.string()
          .required('Campo Obrigatório'),

        book: Yup.string() 
            .required('Campo Obrigatório'),

        sheet: Yup.string()
            .required('Campo Obrigatório'),

        numTermo: Yup.string()
            .required('Campo Obrigatório'),

        dateEvent: Yup.string()
            .required('Campo Obrigatório'),
            
        dateFirstCopy: Yup.string()
            .required('Campo Obrigatório'),
    
    });


    return (
        <Dialog header="Segunda Via" visible={visibleEdit} style={{ width: '50vw' }} onHide={() => setVisibleEdit(false)}>
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
                    <Padding padding="8px" />


                    <Formik initialValues={{ registry: null, dateEvent: null, dateFirstCopy: null, book: null, sheet: null, numTermo: null }}
                    validationSchema={ErrorsSchema} 
                    onSubmit={(values) => { 
                        history("/encaminhamento/familia/"+id+"/secondCopyForwarding/"+ visibleEdit?.user_identify?.id +"/"+visibleEdit?.id+"/"+ values.registry +"/"+ values.dateEvent.toISOString().split("T")[0]+"/"+ values.dateFirstCopy.toISOString().split("T")[0]+"/"+ values.book +"/"+ values.sheet +"/"+values.numTermo )
                        }}>
                        {({ values, errors, touched, handleChange }) => {
                            return (
                                <Form>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasInput name="registry" value={values.registry} onChange={handleChange} label="Nome do cartório *" />
                                            <Padding />
                                            {errors.registry && touched.registry ? (
                                                <div style={{ color: "red" }}>{errors.registry}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasCalendar name="dateEvent" value={values.dateEvent} onChange={handleChange} label="Data do Nascimento/Casamento/Óbito *" />
                                            <Padding />
                                            {errors.dateEvent && touched.dateEvent ? (
                                                <div style={{ color: "red" }}>{errors.dateEvent}<Padding /></div>
                                            ) : null}
                                        </Column>
                                    </Grid>

                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasCalendar name="dateFirstCopy" value={values.dateFirstCopy} onChange={handleChange} label="Data do registro da primeira via *" />
                                            <Padding />
                                            {errors.dateFirstCopy && touched.dateFirstCopy ? (
                                                <div style={{ color: "red" }}>{errors.dateFirstCopy}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput name="book" value={values.book} onChange={handleChange} label="Livro *" />
                                            <Padding />
                                            {errors.book && touched.book ? (
                                                <div style={{ color: "red" }}>{errors.book}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        
                                    </Grid> 

                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasInput name="sheet" value={values.sheet} onChange={handleChange} label="Folha *" />
                                            <Padding />
                                            {errors.sheet && touched.sheet ? (
                                                <div style={{ color: "red" }}>{errors.sheet}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasInput name="numTermo" value={values.numTermo} onChange={handleChange} label="Número do termo *" />
                                            <Padding />
                                            {errors.numTermo && touched.numTermo ? (
                                                <div style={{ color: "red" }}>{errors.numTermo}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        
                                    </Grid> 

                                    <Row>
                                        <ButtonPrime label={"Imprimir"}  />
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

export default ModalSecondCopyForwarding