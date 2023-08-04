import * as Yup from 'yup';
import { EditUserController } from '../../../sdk/User/EditUser/controller';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState()

    const typeUser = [
        {id: 1, nome: "Administrador"},
        {id: 2, nome: "Auxiliar administrativo"},
        {id: 3, nome: "Técnico de nível superior"},
        {id: 4, nome: "Coordenador(a)"},
        {id: 5, nome: "Operador Cadastro Único"}
    ]

    const EditUserSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório"),
        email: Yup.string().required('Campo Obrigatório'),
        type_user: Yup.object().required('Campo Obrigatório'),
        password: Yup.string(),
        confirmPassword: Yup.string().label('Confirmar senha').oneOf([Yup.ref('password')], 'Senhas difirentes'),
    });

    const { EditUserRequestMutation, UserRequest } = EditUserController(id);

    useEffect(() => {
      if(UserRequest){
        setUser(UserRequest.data.data)
      }
    }, [UserRequest])

    const valueTypeUser = () => {
        const value = user ? typeUser.find(fil => fil.id === user.type_user) : ""
        return value
    }
    

    const initialValue = {
        nome: user ? user.nome : "",
        email: user ? user.email :  "",
        type_user: user ? valueTypeUser() : "",
        password: "",
        confirmPassword: ""
    }


    const handleEditUser = (body) => {

        const datanotpassword = {
            nome: body.nome,
            email: body.email,
            type_user: body.type_user.id,
        }

        const data = {
            nome: body.nome,
            email: body.email,
            type_user: body.type_user.id,
            password: body.password
        }

        EditUserRequestMutation.mutate(body.password !== "" ? data : datanotpassword)
    }
    
    
    return{
        typeUser, handleEditUser, EditUserSchema, initialValue, user
    }
}