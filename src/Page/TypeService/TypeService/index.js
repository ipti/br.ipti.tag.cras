import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { TypeServiceContext } from "../../../context/TypeService/TypeService/context";

const TypeServicePage = () => {



    const { isLoading, typesServices, DeleteTypeServices } = useContext(TypeServiceContext);


    const columns = [
        { field: 'id', header: 'id' },
        { field: 'name', header: 'Nome' },
    ];


    return (
        <Container>
            {isLoading ?
                <div>carregando...</div> :
                <Table
                    columns={columns}
                    list={typesServices}
                    path="/criar/servico"
                    name="Serviço"
                    pathEdit={"/edit/servico/"}
                    delet={DeleteTypeServices}
                />
            }
        </Container>
    )
}

export default TypeServicePage;