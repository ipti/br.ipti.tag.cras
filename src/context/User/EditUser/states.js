import * as Yup from 'yup';
import { EditUserController } from '../../../sdk/User/EditUser/controller';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryClient from '../../../services/react-query';
import { useRef } from 'react';

export const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState()
    const [isVerify, setIsVerify] = useState(true);
    const [isError, setIsError] = useState("");
    const [loading, setLoading] = useState(false)

    const EditUserSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
        email: Yup.string().required('Campo Obrigatório'),
        username: Yup.string().required('Campo Obrigatório'),
        role: Yup.object().required('Campo Obrigatório'),
        password: Yup.string(),
        confirmPassword: Yup.string().label('Confirmar senha').oneOf([Yup.ref('password')], 'Senhas difirentes'),
    });


    const role = [
        {id: "SECRETARY", name: "Secretário ou administrador"},
        {id: "TECHNICIAN", name: "Técnico"},
    ]



    const toast = useRef(null);

    const show = () => {
        if (isVerify) {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: isError });
        }
    }


    const { EditUserRequestMutation, UserRequest } = EditUserController(id, setIsError, setIsVerify, show);


    useEffect(() => {
        queryClient.removeQueries({ queryKey: "OneUser" })
        setLoading(true);
      }, [])

    useEffect(() => {
      if(UserRequest && loading){
        setUser(UserRequest)
      }
    }, [UserRequest, loading])

   
    

    const initialValue = {
        name: user ? user.name : "",
        email: user ? user.email :  "",
        username: user ? user.username : "",
        role: user ? role.find(props => props.id === user.role) : "",
        password: "",
        confirmPassword: ""
    }


    const handleEditUser = (body) => {

        const datanotpassword = {
            name: body.name,
            email: body.email,
            username: body.username,
            role: body.role.id
        }

        const data = {
            name: body.name,
            email: body.email,
            username: body.username,
            password: body.password,
            role: body.role.id
        }

        EditUserRequestMutation.mutate(body.password !== "" ? data : datanotpassword);
    }
    
    
    return{
         handleEditUser, EditUserSchema, initialValue, user, isVerify, isError, toast, role
    }
}