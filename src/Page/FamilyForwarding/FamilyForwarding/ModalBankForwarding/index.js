import { Dialog } from "primereact/dialog";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import { useNavigate, useParams } from "react-router-dom";
import { useContext} from "react";
import { Form, Formik } from "formik";
import { TechnicianContext } from "../../../../context/Technician/Technician/context";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import CrasInput from "../../../../CrasUi/Input/Input";


const ModalBankForwarding = ({ visibleEdit, setVisibleEdit }) => {
    const history = useNavigate()
    const { id } = useParams()
  
    const { technician } = useContext(TechnicianContext);

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

                    <Formik initialValues={{ name: null, agencia: null }} onSubmit={(values) => { history("/encaminhamento/familia/"+id+"/bankfoward/"+ visibleEdit?.user_identify?.id +"/"+visibleEdit?.id+"/"+values.name.id +"/"+ values.agencia )}}>
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
                                            <CrasInput name="agency" value={values.agencia} onChange={handleChange} label="Número da Agência *" />
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

export default ModalBankForwarding