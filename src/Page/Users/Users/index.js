import React, { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles";
import { UserContext } from "../../../context/User/User/context";

const UserPage = () => {



    const { isLoading, user, deleteUser } = useContext(UserContext);


    const columns = [
        {field: 'id', header: 'id' },
        { field: 'name', header: 'Nome' },
        { field: 'email', header: 'Email' },
        { field: 'role', header: 'Tipo de usuário' },
    ];

    const userConvert = user ?  user.map((data ) => ({ ...data, role: data.role  === "TECHNICIAN" ? "Técnico" : data.role  === "SECRETARY" ? "Secretário": "user" })) : [];

    return (
        <Container>
            {isLoading ?
                <div>carregando...</div> :
                <Table columns={columns} list={userConvert} path="/criar/usuarios" name="Usuários" pathEdit={"/edit/usuarios/"} delet={deleteUser}/>
            }
        </Container>
    )
}

export default UserPage;