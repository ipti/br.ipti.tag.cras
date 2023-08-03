import * as Yup from 'yup';
import { CreateTechnicianController } from '../../../sdk/Technician/CreateTechnician/controller';



export const CreateTechnicianState = () => {
    const initialValue = {
        nome: "",
    }

    const CreateSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório"),
    })

    const { CreateTechnicianRequestMutation } = CreateTechnicianController();

    const handleCreateTechnician = (body) => {
        CreateTechnicianRequestMutation.mutate(body)
    }


    return {
        handleCreateTechnician, CreateSchema, initialValue
    }
}