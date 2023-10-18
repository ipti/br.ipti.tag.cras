import * as Yup from 'yup';
import { EditBenefitsController } from '../../../sdk/Benefits/EditBenefits/controller';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const EditBenefitsState = () => {

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

    const { id } = useParams()
    
    const { EditBenefitsRequestMutation, OneBenefits } = EditBenefitsController(id);
    
    const [initialValue, setInitialValue] = useState({
        description: "",
        type: "",
    })
    useEffect(() => {
        if (OneBenefits) {
            const init = { description: OneBenefits.description, type: OneBenefits.type }
            console.log(init)
            setInitialValue(init)
        }
    }, [OneBenefits])


    const handleEditBenefits = (body) => {
        EditBenefitsRequestMutation.mutate({ ...body, type: body.type.id })
    }


    return {
        handleEditBenefits, CreateSchema, initialValue, types,
    }
}