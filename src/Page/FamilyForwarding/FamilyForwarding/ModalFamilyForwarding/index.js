import { Dialog } from "primereact/dialog";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { useNavigate, useParams } from "react-router-dom";
import { useContext} from "react";
import { Form, Formik } from "formik";
import { TechnicianContext } from "../../../../context/Technician/Technician/context";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import * as Yup from 'yup';


const ModalFamilyForwarding = ({ visibleEdit, setVisibleEdit }) => {
    const history = useNavigate()
    const { id } = useParams()
  
    const { technician } = useContext(TechnicianContext);

    const ErrorsSchema = Yup.object().shape({

        name: Yup.object()
          .required('Campo Obrigatório'),

        psico: Yup.object()
          .required('Campo Obrigatório'),
    });
     
      
    //console.log(technician)

    return (
        <Dialog header="Encaminhamento" visible={visibleEdit} style={{ width: '50vw' }} onHide={() => setVisibleEdit(false)}>
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
                    <Padding padding="8px" />

                    <Formik initialValues={{ name: null, psico: null }}
                    validationSchema={ErrorsSchema}
                    onSubmit={(values) => { history("/encaminhamento/familia/"+id+"/foward/"+ visibleEdit?.user_identify?.id +"/"+visibleEdit?.id+"/"+values.name.id +"/"+values.psico.id )}}>
                        {({ values, errors, touched, handleChange }) => {
                            return (
                                <Form>
                                    <Grid checkMockup={[{}, {}]}>
                                        <Column>
                                            <CrasDropdown name="name" value={values.name} options={technician?.filter(assis => assis.type === "ASSISTENTE_SOCIAL")} onChange={handleChange} optionLabel={"name"} label="Assistente Social Responsável *" />
                                            <Padding />
                                            {errors.name && touched.name ? (
                                                <div style={{ color: "red" }}>{errors.name}<Padding /></div>
                                            ) : null}
                                        </Column>
                                        <Column>
                                            <CrasDropdown name="psico" value={values.psico} options={technician.filter(psico => psico.type === "PSICOLOGO")} onChange={handleChange} optionLabel={"name"} label="Psicólogo(a) Responsável *" />
                                            <Padding />
                                            {errors.psico && touched.psico ? (
                                                <div style={{ color: "red" }}>{errors.psico}<Padding /></div>
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

export default ModalFamilyForwarding