import { Dialog } from "primereact/dialog";
import { Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";

const ModalTechnicianVists = ({ visible, setVisible }) => {
    return (

        <Dialog header="Detalhes da Visita" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <Row>
                <h2>Titulo: </h2><Padding /><p>{visible.title}</p>
            </Row>
            <Padding padding="8px" />
            <h4>Descrição: </h4>
            <Padding />
            <p>{visible.description ?? "Sem descrição"}</p>
            <Padding padding="8px" />
            <Row>
                <h2>Data: </h2><Padding /><p>{formatarData(visible.created_at)}</p>
            </Row>

        </Dialog >
    )
}

export default ModalTechnicianVists