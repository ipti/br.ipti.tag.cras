import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { TechnicianContext } from "../../../context/Technician/context";

const TechnicianPage = () => {



    const { error, isLoading, technician } = useContext(TechnicianContext);


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'name', header: 'Nome' },
    ];


    console.log(technician);

    return (
        <Container>
            {false ?
                <div>carregando...</div> :
                <Table
                    columns={columns}
                     list={technician} 
                    path="/criar/usuarios"
                    name="Tecnico"
                />
            }
        </Container>
    )
}

export default TechnicianPage;