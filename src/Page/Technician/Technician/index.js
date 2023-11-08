import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { TechnicianContext } from "../../../context/Technician/Technician/context";

const TechnicianPage = () => {

    const { isLoading, technician } = useContext(TechnicianContext);


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'name', header: 'Nome' },
    ];

    const filter = (filt, namefilter) => {
        return filt?.name?.toLowerCase()?.includes(namefilter)
    }
    return (
        <Container>
            {isLoading ?
                <div>carregando...</div> :
                <Table
                    columns={columns}
                    list={technician} 
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