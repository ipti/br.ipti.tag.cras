import { useContext, useState } from "react"
import Table from "../../../Components/Table"
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime"
import { Container, Padding, Row } from "../../../CrasUi/styles/styles"
import { FamilyForwardingContext } from "../../../context/FamilyForwarding/FamilyForwarding/context"
import ModalCreateFamilyForwarding from "./ModalCreateFamilyForwarding"
import ModalFamilyForwarding from "./ModalFamilyForwarding"
import ModalBankForwarding from "./ModalBankForwarding"

import { TabPanel, TabView } from 'primereact/tabview'
import TechnicianProvider from "../../../context/Technician/Technician/context"


const FamilyForwardingPage = () => {

    const [visible, setVisible] = useState(false)
    const [visibleEdit, setVisibleEdit] = useState(false)

    const { FamilyForwarding } = useContext(FamilyForwardingContext)

    const columns = [
        { field: 'id', header: 'id' },
        { field: 'user_identify.name', header: 'Nome' },
        { field: 'user_identify.kinship', header: 'Parentesco' },
        { field: 'forwading.type', header: "Tipo" },
        { field: 'forwading.name', header: "Local" }
    ];

    const columnsFamily = [
        { field: 'forwading.type', header: "Tipo" },
        { field: 'forwading.name', header: "Local" }
    ];


    const filter = (filt, namefilter) => {
        return filt?.forwading?.name?.toLowerCase()?.includes(namefilter) || (filt?.user_identify.name?.toLowerCase()?.includes(namefilter) || filt?.forwading?.name?.toLowerCase()?.includes(namefilter))
    }

    return (
        <Container>
            <Padding padding="16px" />
            <h1>Encaminhamentos</h1>
            <Row>
                <ButtonPrime label={"Criar encaminhamento"} onClick={() => setVisible(true)} />
            </Row>
            <Padding padding="16px" />
            <div className="card">
                <TabView>
                    <TabPanel header="Membros da familia">
                        <Table columns={columns} list={FamilyForwarding?.usersForwarding} onView={setVisibleEdit} name="Encaminhamentos" filter={filter} />
                    </TabPanel>
                    <TabPanel header="Familia">
                        <Table columns={columnsFamily} list={FamilyForwarding?.familyForwadings} onView={setVisibleEdit} name="Encaminhamentos" filter={filter} />
                    </TabPanel>
                </TabView>
            </div>
            
            <ModalCreateFamilyForwarding visible={visible} setVisible={setVisible} />

            <TechnicianProvider>
                <ModalBankForwarding visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} />
                {/* <ModalFamilyForwarding visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} /> */}
            </TechnicianProvider>

        </Container>
    )
}

export default FamilyForwardingPage