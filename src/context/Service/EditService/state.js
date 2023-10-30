import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from 'yup';
import { EditServicesController } from "../../../sdk/Services/EditService/controller";
import queryClient from "../../../services/react-query";


export const EditServicesState = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    queryClient.removeQueries({ queryKey: "OneService" })
    setLoading(true);
  }, [])

  const [service, setService] = useState();
  const [technician, setTechnician] = useState();
  const [userIdentify, setUserIdentify] = useState();
  const [serviceOne, setServiceOne] = useState();
  const [isVerify, setIsVerify] = useState(true)
  const [isError, setIsError] = useState("")

  const toast = useRef(null);

  const show = () => {
    if (isVerify) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
    } else {
      toast.current.show({ severity: 'error', summary: 'Error', detail: isError });
    }
  }
  const { EditServicesRequestMutation, allService, allTechnician, isLoadingService, isLoadingtechnician, allUserIdentify, oneService } = EditServicesController(id, setIsVerify, setIsError, show);

  const Schema = Yup.object().shape({
    solicitation: Yup.string().required("Campo Obrigatório"),
    result: Yup.object().required('Campo Obrigatório'),
    providence: Yup.string().required('Campo Obrigatório'),
    technician_fk: Yup.object().required('Campo Obrigatório'),
    task_fk: Yup.object().required('Campo Obrigatório'),
    user_identify_fk: Yup.object().required('Campo Obrigatório'),
    description: Yup.string().required('Campo Obrigatório'),
  });

  useEffect(() => {
    if (allService) {
      if (allUserIdentify) {
        setService(allService);
      }
      if (allTechnician) {
        setTechnician(allTechnician);
      }
      setUserIdentify(allUserIdentify);
    }
    if (oneService && loading) {
      setServiceOne(oneService)
    }
  }, [allService, allTechnician, allUserIdentify, oneService, loading])



  const valueUserIdent = () => {
    const value = serviceOne ? userIdentify?.find(fil => fil.id === serviceOne?.user_identify_fk) : ""
    return value
  }

  const valueService = () => {
    const value = serviceOne ? service?.find(fil => fil.id === serviceOne?.task_fk) : ""
    return value
  }

  const valueTechnician = () => {
    const value = serviceOne ? technician?.find(fil => fil.id === serviceOne?.technician_fk) : ""
    return value
  }

  
  const result = [
    {
      id: "FINALIZADO",
      name: "Finalizado"
    },
    {
      id: "PENDENTE",
      name: "Pendente"
    }
  ]

  const valueResult = () => {
    const value = serviceOne ? result?.find(fil => fil.id === serviceOne?.result) : ""
    return value
  }
  const initialValue = {
    solicitation: serviceOne ? serviceOne.solicitation : "",
    result: valueResult(),
    providence: serviceOne ? serviceOne.providence : "",
    task_fk: valueService(),
    technician_fk: valueTechnician(),
    user_identify_fk: valueUserIdent(),
    data: serviceOne ? serviceOne.data : "",
    description: serviceOne ? serviceOne.description : ""
  }





  const handleCreateService = (data) => {

    const body = {
      solicitation: data.solicitation,
      result: data.result.id,
      providence: data.providence,
      task: data.task_fk.id,
      technician: data.technician_fk.id,
      user_identify: data.user_identify_fk.id,
      description: data.description,
      attendance_unity: 1,
    }

    EditServicesRequestMutation.mutate(body)

  }


  return {
    initialValue, service, technician, isLoadingService, isLoadingtechnician, result, handleCreateService, Schema, userIdentify, serviceOne, toast, show
  }
}