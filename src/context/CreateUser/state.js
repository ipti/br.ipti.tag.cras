import * as Yup from 'yup';
import { CreateUserController } from '../../sdk/User/CreateUser/controller';

export const CreateUserState = () => {
    const initialValue = {
        nome: "",
        email: "",
        type_user: "",
        password: "",
        confirmPassword: ""
    }

    const CreateUserSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório"),
        email: Yup.string().required('Campo Obrigatório'),
        type_user: Yup.number("Digite um Número").required('Campo Obrigatório'),
        password: Yup.string().required('Campo Obrigatório'),
        confirmPassword: Yup.string().label('Confirmar senha').required("Campo Obrigatório").oneOf([Yup.ref('password')], 'Senhas difirentes'),
    });

    const { CreateUserRequestMutation } = CreateUserController();

    const handleCreateUser = (body) => {
        const data = {
            nome: body.nome,
            email: body.email,
            type_user: body.type_user,
            password: body.password
        }
        CreateUserRequestMutation.mutate(data)
    }

    return {
        initialValue, handleCreateUser, CreateUserSchema
    }
}