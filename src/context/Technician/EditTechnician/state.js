import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { EditTechnicianController } from '../../../sdk/Technician/EditTechnician/controller';
import { useParams } from 'react-router-dom';
// import { CreateTechnicianController } from '../../sdk/Technician/CreateTechnician/controller';



export const EditTechnicianState = () => {
    const { id } = useParams()
    const [isVerify, setIsVerify] = useState(true)
    const [isError, setIsError] = useState("")

    const toast = useRef(null);


    const show = () => {
        if(isVerify){
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
        }else{
            toast.current.show({ severity: 'error', summary: 'Error', detail: isError });
        }
    }

    const [technician, setTechnician] = useState();

    const {technicianRequest, EditTechnicianRequestMutation} = EditTechnicianController(id, setIsError, setIsVerify)

    useEffect(() => {
      if(technicianRequest){
        setTechnician(technicianRequest.data.data)
      }
    }, [technicianRequest])
    

    const initialValue = {
        nome: technician ? technician.nome : "",
    }

    const CreateSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório"),
    })


    const handleEditTechnician = (body) => {
        EditTechnicianRequestMutation.mutate(body)
    }


    return {
        handleEditTechnician, CreateSchema, initialValue, technician, show,toast
    }
}