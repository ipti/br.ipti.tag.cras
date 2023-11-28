import { Dialog } from "primereact/dialog"
import { useState } from "react"
import Table from "../../../Components/Table"
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime"
import CrasDropdown from "../../../CrasUi/Dropdown"
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles"

const FamilyForwardingPage = () => {

    const [visible, setVisible] = useState(false)
    return (
        <Container>
            <Padding padding="16px" />
            <h1>Familia</h1>
            <Row>
                <ButtonPrime label={"Criar encaminhamento"} onClick={() => setVisible(true)} />
            </Row>
            <Container>
                <Table columns={[{}]} list={[]} name="Encaminhamentos" filter={[]} />
            </Container>
            <Dialog header="Criar Encaminhamento" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <Grid checkMockup={[{}, {}]}>
                    <CrasDropdown />
                    <CrasDropdown />
                </Grid>
                <Padding />

                <Column>
                    <Row id="center" style={{ width: "100%" }}>
                        <ButtonPrime label={"Cadastrar"} />
                    </Row>
                </Column>
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