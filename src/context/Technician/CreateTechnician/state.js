import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { CreateTechnicianController } from '../../../sdk/Technician/CreateTechnician/controller';



export const CreateTechnicianState = () => {
    const initialValue = {
        name: "",
        user_fk: ""
    }

    const CreateSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
        user_fk: Yup.object().required("Campo Obrigatório")
    })



    const { CreateTechnicianRequestMutation, userfetch } = CreateTechnicianController();

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (userfetch) {
            setUser(userfetch)
        }
    }, [userfetch])

    const handleCreateTechnician = (body) => {
        CreateTechnicianRequestMutation.mutate({...body, user_fk: body.user_fk.id})
    }


    return {
        handleCreateTechnician, CreateSchema, initialValue, user
    }
}