import { Dialog } from "primereact/dialog";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import { formatarData } from "../../../../services/functions";

const ModalFamilyForwarding = ({ visibleEdit, setVisibleEdit }) => {



    return (
        <Dialog header="Encaminhamento" visible={visibleEdit} style={{ width: '50vw' }} onHide={() => setVisibleEdit(false)}>
            {visibleEdit ? <Column>
                <Padding padding="16px">
                    <Row id="space-between">
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
                    </Row>
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

                </Padding>
            </Column> : null}
        </Dialog>
    )
}

export default ModalFamilyForwarding