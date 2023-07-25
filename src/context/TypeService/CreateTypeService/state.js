import * as Yup from 'yup';
import { CreateTypesServicesController } from '../../../sdk/TypeService/CreateTypeServices/controller';

export const CreateTypeServiceState = () => {
    const initialValue = {
        name: "",
    }

    const CreateSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
    })

    const { CreateTypesServicesRequestMutation } = CreateTypesServicesController();

    const handleCreateTypeService = (body) => {
        CreateTypesServicesRequestMutation.mutate(body)
    }


    return {
        handleCreateTypeService, CreateSchema, initialValue
    }
}