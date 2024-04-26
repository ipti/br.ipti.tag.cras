import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { TechnicianContext } from "../../../context/Technician/Technician/context";

const TechnicianPage = () => {

    const { isLoading, technician } = useContext(TechnicianContext);

    const columns = [
        { field: 'id', header: 'Identificação' },
        { field: 'name', header: 'Nome' },
        { field: 'type', header: 'Função' },
        { field: 'professional_register', header: 'Nº de registro profissional' },  
    ];

    const technicianConvert = technician ?  technician.map((data ) => ({ ...data, type: data.type  === "ASSISTENTE_SOCIAL" ? "Técnico" : data.role  === "PSICOLOGO" ? "Técnico": "Psicólogo" })) : [];

    const filter = (filt, namefilter) => {
        return filt?.name?.toLowerCase()?.includes(namefilter)
    }
    return (
        <Container>
            {isLoading ?
                <div>carregando...</div> :
                <Table
                    columns={columns}
                    list={technicianConvert} 
                    path="/criar/tecnico"
                    filter={filter}
                    name="Técnico"
                    pathEdit={"/edit/tecnico/"}
                    // delet={DeleteTechnician}
                />
            }
        </Container>
    )
}

export default TechnicianPage;