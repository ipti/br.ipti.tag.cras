import { useContext, useState } from "react"
import Table from "../../../Components/Table"
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime"
import { Container, Padding, Row } from "../../../CrasUi/styles/styles"
import { FamilyForwardingContext } from "../../../context/FamilyForwarding/FamilyForwarding/context"
import ModalCreateFamilyForwarding from "./ModalCreateFamilyForwarding"
import ModalFamilyForwarding from "./ModalFamilyForwarding"
import { InputSwitch } from "primereact/inputswitch";

const FamilyForwardingPage = () => {

    const [visible, setVisible] = useState(false)
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [checked, setChecked] = useState(false);

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
        return !checked ? filt?.forwading?.name?.toLowerCase()?.includes(namefilter) : (filt?.user_identify.name?.toLowerCase()?.includes(namefilter) || filt?.forwading?.name?.toLowerCase()?.includes(namefilter)) 
    }

    return (
        <Container>
            <Padding padding="16px" />
            <h1>Encaminhamentos {!checked ? "da Familia" : "dos Membros da Familia"}</h1>
            <Row>
                <ButtonPrime label={"Criar encaminhamento"} onClick={() => setVisible(true)} />
            </Row>
            <Padding />
            <p>Trocar para Encaminhamentos {!checked ? " dos Membros da Familias" : "da Familia"}</p>
            <Padding />
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            <Table columns={checked ? columns : columnsFamily} list={checked ? FamilyForwarding?.usersForwarding : FamilyForwarding?.familyForwadings} onView={setVisibleEdit} name="Encaminhamentos" filter={filter} />
            <ModalCreateFamilyForwarding visible={visible} setVisible={setVisible} />
            <ModalFamilyForwarding visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} />
        </Container>
    )
}

export default FamilyForwardingPage