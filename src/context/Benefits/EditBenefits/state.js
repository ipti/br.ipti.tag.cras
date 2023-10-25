import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { EditBenefitsController } from '../../../sdk/Benefits/EditBenefits/controller';
import { useEffect, useState } from 'react';
import queryClient from '../../../services/react-query';

export const EditBenefitsState = () => {

    const types = [
        {
            id: "PERIODICO", name: "Periodico"
        },
        {
            id: "EVENTUAL", name: "Eventual"
        }
    ]

    const [loading, setLoading] = useState(false)
    const [benefits, setbenefits] = useState()

    useEffect(() => {
        queryClient.removeQueries({ queryKey: "OneBenefits" })
        setLoading(true);
    }, [])

    const CreateSchema = Yup.object().shape({
        description: Yup.string().required("Campo Obrigatório"),
        type: Yup.object().required("Campo Obrigatório"),
    })

    const { id } = useParams()

    const { EditBenefitsRequestMutation, OneBenefits } = EditBenefitsController(id);



    useEffect(() => {
        if (OneBenefits && loading) {
            setbenefits(OneBenefits)
        }
    }, [OneBenefits, loading])

    const initialValue = {
        description: benefits ? benefits?.description :  "",
        type: benefits ? types.find(props => props.id === benefits?.type) : "",
    }



    const handleEditBenefits = (body) => {
        EditBenefitsRequestMutation.mutate({ ...body, type: body.type.id })
    }


    return {
        handleEditBenefits, CreateSchema, initialValue, types, benefits
    }
}