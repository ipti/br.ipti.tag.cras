import * as Yup from 'yup';
import { CreateUserController } from '../../../sdk/User/CreateUser/controller';

export const CreateUserState = () => {
    const initialValue = {
        nome: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

   
    const CreateUserSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
        email: Yup.string().required('Campo Obrigatório'),
        username: Yup.string().required('Campo Obrigatório'),
        password: Yup.string().required('Campo Obrigatório'),
        confirmPassword: Yup.string().label('Confirmar senha').required("Campo Obrigatório").oneOf([Yup.ref('password')], 'Senhas difirentes'),
    });

    const { CreateUserRequestMutation } = CreateUserController();

    const handleCreateUser = (body) => {
        console.log(body)
        const data = {
            name: body.name,
            email: body.email,
            username: body.username,
            password: body.password
        }
        CreateUserRequestMutation.mutate(data)
    }

    return {
        initialValue, handleCreateUser, CreateUserSchema
    }
}