import { useContext, useState } from "react"
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime"
import { Container, Padding, Row } from "../../../CrasUi/styles/styles"
import Table from "../../../Components/Table"
import ModalCreateTechnicianVists from "./ModalCreate"
import { TechnicianVisitsContext } from "../../../context/FamilyRefered/TechnicianVisits/context"
import { formatarData } from "../../../services/functions"
import ModalTechnicianVists from "./ModalTechnicianVisits"

const TechnicianVisitsPage = () => {

    const { technicianVisits } = useContext(TechnicianVisitsContext)
    const [visible, setVisible] = useState(false)
    const [visibleView, setVisibleView] = useState(false)


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'title', header: 'Visita' },
        { field: 'created_at', header: "Data" },
    ]

    const technicianVisitsFilter = technicianVisits ? technicianVisits.map((data) => ({ ...data, created_at: formatarData(data.created_at), description: data?.description?.substring(0,500) })) : [];


    return (
            <Container>
                <Padding padding="16px" />
                <h1>Visitas</h1>
                <Row>
                    <ButtonPrime label={"Criar encaminhamento"} onClick={() => setVisible(true)} />
                </Row>
                <Padding padding="16px" />
                <Table columns={columns} list={technicianVisitsFilter} name="Visitas" onView={setVisibleView} />
                <ModalTechnicianVists visible={visibleView} setVisible={setVisibleView} />
                <ModalCreateTechnicianVists visible={visible} setVisible={setVisible}  /> 
            </Container>
    )
}

export default TechnicianVisitsPage