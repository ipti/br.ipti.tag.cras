import { useContext, useState } from "react";
import Table from "../../../Components/Table";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import { Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { FamilyForwardingContext } from "../../../context/FamilyForwarding/FamilyForwarding/context";
import ModalBankForwarding from "./ModalBankForwarding";
import ModalCreateFamilyForwarding from "./ModalCreateFamilyForwarding";
import ModalFamilyForwarding from "./ModalFamilyForwarding";
import ModalINSStracking from "./ModalINSStracking";
import ModalInfos from "./ModalInfo";
import ModalSecondCopyForwarding from "./ModalSecondCopyForwarding";

import { TabPanel, TabView } from "primereact/tabview";
import { FowardingType, Kinship } from "../../../Controller/controllerGlobal";
import TechnicianProvider from "../../../context/Technician/Technician/context";

const FamilyForwardingPage = () => {
    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);

    const { FamilyForwarding } = useContext(FamilyForwardingContext);

    const fowardingConvert = FamilyForwarding
        ? FamilyForwarding?.usersForwarding.map((data) => ({
            ...data,
            forwadingType: FowardingType.getTitle(data.forwading.type),
            kinshipType: Kinship.getTitle(data.user_identify.kinship),
        }))
        : [];

    const columns = [
        { field: "id", header: "Código" },
        { field: "user_identify.name", header: "Nome" },
        { field: "kinshipType", header: "Parentesco" },
        { field: "forwadingType", header: "Tipo" },
        { field: "forwading.name", header: "Local" },
    ];

    const columnsFamily = [
        { field: "forwading.type", header: "Tipo" },
        { field: "forwading.name", header: "Local" },
    ];

    const filter = (filt, namefilter) => {
        return (
            filt?.forwading?.name?.toLowerCase()?.includes(namefilter) ||
            filt?.user_identify.name?.toLowerCase()?.includes(namefilter) ||
            filt?.forwading?.name?.toLowerCase()?.includes(namefilter)
        );
    };

    return (
        <Container>
            <Padding padding="16px" />
            <h1>Encaminhamentos</h1>
            <Row>
                <ButtonPrime
                    label={"Criar encaminhamento"}
                    onClick={() => setVisible(true)}
                />
            </Row>
            <Padding padding="16px" />
            <div className="card">
                <TabView>
                    <TabPanel header="Membros da familia">
                        <Table
                            columns={columns}
                            list={fowardingConvert}
                            onView={setVisibleEdit}
                            name="Encaminhamentos"
                            filter={filter}
                        />
                    </TabPanel>
                    <TabPanel header="Familia">
                        <Table
                            columns={columnsFamily}
                            list={FamilyForwarding?.familyForwadings}
                            onView={setVisibleEdit}
                            name="Encaminhamentos"
                            filter={filter}
                        />
                    </TabPanel>
                </TabView>
            </div>

            <ModalCreateFamilyForwarding visible={visible} setVisible={setVisible} />

            <TechnicianProvider>
                {visibleEdit && (() => {
                    const { forwading } = visibleEdit;

                    if (!forwading) {
                        return (
                            <ModalInfos
                                visibleEdit={visibleEdit}
                                setVisibleEdit={setVisibleEdit}
                            />
                        );
                    }

                    const { name, type } = forwading;

                    if (name === "BANESE" && type === "ENCAMINHAMENTO") {
                        return (
                            <ModalBankForwarding
                                visibleEdit={visibleEdit}
                                setVisibleEdit={setVisibleEdit}
                            />
                        );
                    }
                    if (
                        (name === "CRAS" || name === "CREAS") &&
                        type === "ENCAMINHAMENTO"
                    ) {
                        return (
                            <ModalFamilyForwarding
                                visibleEdit={visibleEdit}
                                setVisibleEdit={setVisibleEdit}
                            />
                        );
                    }
                    if (
                        name === "Cartório" &&
                        (type === "SEGUNDA_VIA_NASCIMENTO" ||
                            type === "SEGUNDA_VIA_CASAMENTO" ||
                            type === "SEGUNDA_VIA_OBITO")
                    ) {
                        return (
                            <ModalSecondCopyForwarding
                                visibleEdit={visibleEdit}
                                setVisibleEdit={setVisibleEdit}
                            />
                        );
                    }
                    if (name === "INSS" && type === "ACOMPANHAMENTO") {
                        return (
                            <ModalINSStracking
                                visibleEdit={visibleEdit}
                                setVisibleEdit={setVisibleEdit}
                            />
                        );
                    }
                    return (
                      <ModalInfos
                          visibleEdit={visibleEdit}
                          setVisibleEdit={setVisibleEdit}
                      />
                    );
                })()}
            </TechnicianProvider>
        </Container>
    );
};

export default FamilyForwardingPage;
