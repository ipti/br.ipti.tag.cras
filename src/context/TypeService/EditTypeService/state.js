import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { EditTypesServicesController } from '../../../sdk/TypeService/EditTypeServices/controller';

export const EditTypeServiceState = () => {

    const { id } = useParams()
    const [isVerify, setIsVerify] = useState(true);
    const [isError, setIsError] = useState("");

    const toast = useRef(null);

    const show = () => {
        if(isVerify){
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
        }else{
            toast.current.show({ severity: 'error', summary: 'Error', detail: isError });
        }
    }

    const [typeService, setTypeService] = useState();

    const {EditTypesServicesRequestMutation, TypeServiceRequest} = EditTypesServicesController(id, setIsError, setIsVerify);

    useEffect(() => {
      if(TypeServiceRequest){
        setTypeService(TypeServiceRequest.data.data)
      }
    }, [TypeServiceRequest])
    
    const initialValue = {
        nome: typeService ? typeService.nome : "",
    }

    console.log(initialValue)

    const CreateSchema = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório"),
    })


    const handleEditTypeService = (body) => {
        EditTypesServicesRequestMutation.mutate(body)
    }


    return {
        handleEditTypeService, CreateSchema, initialValue, typeService, show,toast
    }
}