import * as Yup from 'yup';
import { CreateTypesServicesController } from '../../../sdk/TypeService/CreateTypeServices/controller';

export const CreateTypeServiceState = () => {
    const initialValue = {
        nome: "",
    }

    const CreateSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório"),
    })

    const { CreateTypesServicesRequestMutation } = CreateTypesServicesController();

    const handleCreateTypeService = (body) => {
        CreateTypesServicesRequestMutation.mutate(body)
    }


    return {
        handleCreateTypeService, CreateSchema, initialValue
    }
}