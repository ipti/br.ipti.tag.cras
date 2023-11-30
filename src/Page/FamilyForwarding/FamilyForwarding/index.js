import { Dialog } from "primereact/dialog"
import { useContext, useState } from "react"
import Table from "../../../Components/Table"
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime"
import CrasDropdown from "../../../CrasUi/Dropdown"
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles"
import { FamilyForwardingContext } from "../../../context/FamilyForwarding/FamilyForwarding/context"
import { Formik } from "formik"
import CrasInputArea from "../../../CrasUi/Input/inputArea"

const FamilyForwardingPage = () => {

    const [visible, setVisible] = useState(false)

    const { CreateForwarding, forwarding, FamilyForwarding } = useContext(FamilyForwardingContext)
    return (
        <Container>
            <Padding padding="16px" />
            <h1>Encaminhamentos</h1>
            <Row>
                <ButtonPrime label={"Criar encaminhamento"} onClick={() => setVisible(true)} />
            </Row>
            <Table columns={[{}]} list={[]} name="Encaminhamentos" filter={[]} />
            <Dialog header="Criar Encaminhamento" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <Formik initialValues={{ family: FamilyForwarding?.familyInformation?.family_representative_fk, user_identify: undefined, forwading: null, description: "" }} onSubmit={(values) => CreateForwarding({ ...values, date: new Date(Date.now()), forwading: values.forwading.id})}>
                    {({ values, errors, touched, handleChange, handleSubmit }) => {
                        console.log(values)
                        return (
                            <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                                <Grid checkMockup={[{}, {}]}>
                                    <CrasDropdown value={values.forwading} name={"forwading"} options={forwarding} optionLabel={"name"} onChange={handleChange} placeholder={"Selecione um encaminhamento"} label={"Selecione um encaminhamento"} />
                                    <CrasDropdown value={values.user_identify} name={"user_identify"} onChange={handleChange} options={FamilyForwarding?.familyInformation?.user_identify} optionLabel={"name"} placeholder={"Selecione um membro ou a familia"} label={"Selecione um membro ou a familia"} />
                                </Grid>
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
        </Container>
    )
}

export default FamilyForwardingPage