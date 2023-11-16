import * as Yup from 'yup';
import { CreateAttendanceController } from '../../../sdk/AttendanceUnity/CreateAttendanceUnity/controller';

export const CreateAttendanceState = () => {
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

    const { CreateAttendanceRequestMutation } = CreateAttendanceController();

    const handleCreateAttendance = (body) => {
        CreateAttendanceRequestMutation.mutate(body)
    }


    return {
        handleCreateAttendance, CreateSchema, initialValue, types
    }
}