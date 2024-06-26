import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { CreateTechnicianController } from '../../../sdk/Technician/CreateTechnician/controller';
import { GetIdAttendance } from '../../../services/localstorage';



export const CreateTechnicianState = () => {
    const initialValue = {
        name: "",
        user: "",
    }

    const CreateSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
        user: Yup.object().required("Campo Obrigatório"),
        type: Yup.object().required("Campo Obrigatório"),
    })



    const { CreateTechnicianRequestMutation, userfetch } = CreateTechnicianController();

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (userfetch) {
            setUser(userfetch)
        }
    }, [userfetch])

    const handleCreateTechnician = (body) => {
        CreateTechnicianRequestMutation.mutate({...body, user: body.user.id, attendance_unity: parseInt(GetIdAttendance()),})
    }


    return {
        handleCreateTechnician, CreateSchema, initialValue, user
    }
}