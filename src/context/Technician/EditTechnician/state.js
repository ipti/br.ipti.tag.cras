import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { EditTechnicianController } from '../../../sdk/Technician/EditTechnician/controller';
import { useParams } from 'react-router-dom';
import queryClient from '../../../services/react-query';
// import { CreateTechnicianController } from '../../sdk/Technician/CreateTechnician/controller';



export const EditTechnicianState = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        queryClient.removeQueries({ queryKey: "OneTechnician" })
        setLoading(true);
    }, [])

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

    const {technicianRequest, EditTechnicianRequestMutation, userfetch} = EditTechnicianController(id, setIsError, setIsVerify, show)

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (userfetch) {
            setUser(userfetch)
        }
    }, [userfetch])

    useEffect(() => {
      if(technicianRequest && loading){
        setTechnician(technicianRequest)
      }
    }, [technicianRequest, loading])


    const initialValue = {
        name: technician ? technician.name : "",
        user: (user && technician) ? user.find(props => props.id === technician?.user_fk) : ""
    }

    const CreateSchema = Yup.object().shape({
        name: Yup.string().required("Campo Obrigatório"),
        user: Yup.object().required("Campo Obrigatório")
    })


    const handleEditTechnician = (body) => {
        EditTechnicianRequestMutation.mutate({...body, user: body.user.id})
    }


    return {
        handleEditTechnician, CreateSchema, initialValue, technician, show, toast, user
    }
}