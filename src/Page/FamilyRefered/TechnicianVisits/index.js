import { useState } from "react"
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime"
import { Container, Padding, Row } from "../../../CrasUi/styles/styles"
import Table from "../../../Components/Table"
import ModalCreateTechnicianVists from "./ModalCreate"

const TechnicianVisitsPage = () => {
    const [visible, setVisible] = useState(false)

    return (
            <Container>
                <Padding padding="16px" />
                <h1>Visitas</h1>
                <Row>
                    <ButtonPrime label={"Criar encaminhamento"} onClick={() => setVisible(true)} />
                </Row>
                <Padding padding="16px" />
                <Table columns={[]} list={[]} name="Visitas"  />
                <ModalCreateTechnicianVists visible={visible} setVisible={setVisible} /> 
            </Container>
    )
}

export default TechnicianVisitsPage