import * as Yup from 'yup';
import { CreateBenefitsController } from '../../../sdk/Benefits/CreateBenefits/controller';

export const CreateBenefitsState = () => {
    const initialValue = {
        description: "",
        type: ""
    }

    const types = [
        {
            id: "PERIODICO", name: "Periodico"
        },
        {
            id: "EVENTUAL", name: "Eventual"
        }
    ]

    const CreateSchema = Yup.object().shape({
        description: Yup.string().required("Campo Obrigatório"),
        type: Yup.object().required("Campo Obrigatório"),
    })

    const { CreateBenefitsRequestMutation } = CreateBenefitsController();

    const handleCreateBenefits = (body) => {
        CreateBenefitsRequestMutation.mutate({ ...body, type: body.type.id })
    }


    return {
        handleCreateBenefits, CreateSchema, initialValue, types
    }
}