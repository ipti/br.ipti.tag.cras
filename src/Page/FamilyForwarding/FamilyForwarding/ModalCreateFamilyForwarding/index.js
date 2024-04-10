import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { Column, Grid, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInputArea from "../../../../CrasUi/Input/inputArea";
import { useContext, useState } from "react";
import { FamilyForwardingContext } from "../../../../context/FamilyForwarding/FamilyForwarding/context";
import CrasCheckbox from "../../../../CrasUi/Checkbox";
import { GetIdAttendance } from "../../../../services/localstorage";

const ModalCreateFamilyForwarding = ({ visible, setVisible }) => {
    const { CreateForwarding, forwarding, FamilyForwarding } = useContext(FamilyForwardingContext)

    const forwadingName = forwarding?.map((item) => ({ ...item, name: item?.name + " - " + item?.type }))

    const [isFamily, setIsFamily] = useState(false)

    return (
        <Dialog header="Criar Encaminhamento" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <Formik initialValues={{ user_identify: null, forwading: null, description: "", report: ""}} onSubmit={(values) => { CreateForwarding({ ...values, attendance_unity: parseInt(GetIdAttendance()),date: new Date(Date.now()), family: isFamily ? FamilyForwarding?.familyInformation?.id : undefined, forwading: values.forwading.id, user_identify: !isFamily ? values.user_identify.id : undefined }); setVisible(false) }}>
                {({ values, errors, touched, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                            <Grid checkMockup={[{}]}>
                                <CrasCheckbox checked={isFamily} value={isFamily} onChange={() => setIsFamily(!isFamily)} label={"Encaminhamento para familia"} />
                            </Grid>

                            <Padding />
                                <Grid checkMockup={[{}, {}]}>
                                    <CrasDropdown value={values.forwading} name={"forwading"} options={forwadingName} optionLabel={"name"} onChange={handleChange} placeholder={"Selecione um encaminhamento"} label={"Selecione um encaminhamento"} />
                                    {!isFamily ? <CrasDropdown value={values.user_identify} name={"user_identify"} onChange={handleChange} options={FamilyForwarding?.familyInformation?.user_identify} optionLabel={"name"} placeholder={"Selecione um membro ou a familia"} label={"Selecione um membro ou a familia"} />
                                        : null}                            
                                </Grid>
                            <Padding />

                            <Padding padding="0 0 0 16px">
                                <CrasInputArea name={"description"} label={"Motivo"} onChange={handleChange} value={values.description} />
                            </Padding>
                            
                            {errors.description && touched.description ? (
                                <div style={{ color: "red" }}>{errors.description}
                                <Padding /></div>
                            ) : null}
                            <Padding />
                            <Padding padding="0 0 0 16px">
                                <CrasInputArea name={"report"} label={"Breve relato da situação"} onChange={handleChange} value={values.report} />
                            </Padding>

                            <Padding />
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
            {/* <Row>
            <div className="col">
                <CrasCheckbox checked={true} name={"irregular_ocupation"} onChange={(e) => { }} label={"Residem em área de ocupação irregular"} />
            </div>
        </Row>
        <Row>
            <div className="col">
                <CrasCheckbox name={"dependent_elderly"} checked={true} onChange={(e) => { }} label={"Existência de idosos dependentes na família"} />
            </div>
        </Row>
        <Row>
            <div className="col"> <CrasCheckbox name={"deficient"} checked={true} onChange={(e) => { }} label={"Existência de deficiente na família"} /></div>
        </Row>
        <Row>
            <div className="col"> <CrasCheckbox name={"alone_child"} checked={true} onChange={(e) => { }} label={"Crianças que ficam sozinhos no domicilio"} /></div>
        </Row>
        <Row>
            <div className="col"> <CrasCheckbox name={"unemployed"} checked={true} onChange={(e) => { }} label={"Desemprego"} /></div>
        </Row> */}
        </Dialog>
    )
}

export default ModalCreateFamilyForwarding