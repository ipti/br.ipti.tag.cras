import * as Yup from 'yup';
import { CreateUserController } from '../../../sdk/User/CreateUser/controller';

export const CreateUserState = () => {
    const initialValue = {
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: ""
    }

    const role = [
        {id: "SECRETARY", name: "Secretário ou administrador"},
        {id: "TECHNICIAN", name: "Técnico"},
        {id: "USER", name: "Usuário"},
    ]

   
    const CreateUserSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
        email: Yup.string().required('Campo Obrigatório'),
        username: Yup.string().required('Campo Obrigatório'),
        password: Yup.string().required('Campo Obrigatório'),
        role: Yup.object().required('Campo Obrigatório'),
        confirmPassword: Yup.string().label('Confirmar senha').required("Campo Obrigatório").oneOf([Yup.ref('password')], 'Senhas difirentes'),
    });

    const { CreateUserRequestMutation } = CreateUserController();

    const handleCreateUser = (body) => {
        const data = {
            name: body.name,
            email: body.email,
            username: body.username,
            password: body.password,
            role: body.role.id
        }
        CreateUserRequestMutation.mutate(data)
    }

    return {
        initialValue, handleCreateUser, CreateUserSchema, role
    }
}