import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import * as Yup from 'yup';
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInputArea from "../../../../CrasUi/Input/inputArea";
import { useContext, useState } from "react";
import { FamilyForwardingContext } from "../../../../context/FamilyForwarding/FamilyForwarding/context";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import { GetIdAttendance } from "../../../../services/localstorage";
import { Status } from "../../../../Controller/controllerGlobal";

const ModalCreateFamilyForwarding = ({ visible, setVisible }) => {
    const { CreateForwarding, forwarding, FamilyForwarding } = useContext(FamilyForwardingContext)

    const forwadingName = forwarding?.map((item) => ({ ...item, name: item?.name + " - " + item?.type.split('_').join(' ') }))

    const [isFamily, setIsFamily] = useState(false)

    const validationSchema = Yup.object().shape({
        forwading: Yup.object().required('Tipo de encaminhamento é obrigatório'),
        user_identify: Yup.object().nullable(),
    });

    const statusOptions = [
        {id: Status.PENDENTE, name: "Pendente"},
        {id: Status.DEFERIDO, name: "Deferido"},
        {id: Status.INDEFERIDO, name: "Indeferido"},
    ]

    return (
        <Dialog header="Criar Encaminhamento" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

            <Formik initialValues={{ user_identify: null, forwading: null, description: "", report: "",  status: "" }} 
                validationSchema={validationSchema}
                onSubmit={(values) => { 
                    CreateForwarding({ 
                        user_identify: values.user_identify,
                        family: isFamily ? FamilyForwarding?.familyInformation?.id : undefined, 
                        forwading: values.forwading.id, user_identify: !isFamily ? values.user_identify.id : undefined,
                        description: values.description,
                        report: values.report,
                        status: values.status?.id,
                        attendance_unity: parseInt(GetIdAttendance()),
                        date: new Date(Date.now()), 
                    }); 
                    setVisible(false) 
                }}>

                {({ values, errors, touched, handleChange, handleSubmit }) => {
                    
                    const isAcompanhamentoINSS = values.forwading?.name === 'INSS - ACOMPANHAMENTO';
                    const isEncaminhamento = values.forwading?.type === 'ENCAMINHAMENTO';
                    return (
                        <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                            <Grid checkMockup={[{}]}>
                                <CrasCheckbox 
                                    checked={isFamily} 
                                    value={isFamily} 
                                    onChange={() => setIsFamily(!isFamily)} 
                                    label={"Encaminhamento para familia"} />
                            </Grid>

                            <Padding />
                                <Grid checkMockup={[{}, {}]}>
                                    <CrasDropdown value={values.forwading} 
                                        name={"forwading"} 
                                        options={forwadingName} 
                                        optionLabel={"name"} 
                                        onChange={handleChange} 
                                        placeholder={"Selecione um encaminhamento"} 
                                        label={"Selecione um encaminhamento"} />

                                        {!isFamily ? <CrasDropdown value={values.user_identify} 
                                        name={"user_identify"} 
                                        onChange={handleChange} 
                                        options={FamilyForwarding?.familyInformation?.user_identify} 
                                        optionLabel={"name"} 
                                        placeholder={"Selecione um membro ou a familia"} 
                                        label={"Selecione um membro ou a familia"} />
                                            : null}                            
                                </Grid>
                            <Padding />

                            {errors.forwading && touched.forwading && (
                                <div style={{ color: "red", marginLeft: "16px" }}>{errors.forwading}</div>
                            )}
                            {errors.user_identify && touched.user_identify && (
                                <div style={{ color: "red", marginLeft: "16px" }}>{errors.user_identify}</div>
                            )}

                            <Padding padding="0 0 0 16px">
                                <CrasInputArea 
                                    name={"description"} 
                                    label={"Motivo"} 
                                    onChange={handleChange} 
                                    value={values.description} />
                            </Padding>
                            
                            {errors.description && touched.description ? (
                                <div style={{ color: "red" }}>{errors.description}
                                <Padding /></div>
                            ) : null}
                            <Padding />

                            {isEncaminhamento && (
                                <>
                                    <Padding padding="0 0 0 16px">
                                        <CrasInputArea 
                                            name={"report"} 
                                            label={"Breve relato da situação"} 
                                            onChange={handleChange} 
                                            value={values.report} />
                                    </Padding>
                                </>
                            )}
                           
                            {isAcompanhamentoINSS && (
                                <>
                                    <Padding />
                                    <Padding padding="0 0 0 16px">
                                        <CrasDropdown
                                            name={"status"}
                                            optionLabel={"name"} // exibe os dados na lista de opcoes
                                            value={values.status.name}
                                            placeholder={"Selecione um status"}
                                            options={statusOptions} //opcoes que serao usadas pelo option label
                                            onChange={handleChange}
                                            label={"Status"} 
                                        />
                                        <Padding />
                                        {errors.status && touched.status ? (
                                                <div style={{ color: "red" }}>{errors.status}<Padding /></div>
                                            ) : null}
                                    </Padding>
                                </>
                            )}
                            
                      
                            <Padding />

                            <Column>
                                <Row id="center" style={{ width: "100%" }}>
                                    <ButtonPrime label={"Cadastrar"} type={"submit"} />
                                </Row>
                            </Column>

                           {/* TODO: breve relato se for encaminhamento creas/cras
                           TODO: acompanhamento inss adiciona status */}
                        </form>
                    )
                }}

            </Formik>
            
        </Dialog>
    )
}

export default ModalCreateFamilyForwarding