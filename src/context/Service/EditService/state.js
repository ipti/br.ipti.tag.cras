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

  const Schema = Yup.object().shape({
    solicitacao: Yup.string().required("Campo Obrigatório"),
    resultado: Yup.string().required('Campo Obrigatório'),
    data: Yup.string().required('Campo Obrigatório'),
    encaminhamento: Yup.string().required('Campo Obrigatório'),
    tecnico: Yup.object().required('Campo Obrigatório'),
    servico: Yup.object().required('Campo Obrigatório'),
    id_identificacao_usuario: Yup.object().required('Campo Obrigatório'),
  });

  const valueUserIdent = () => {
    const value = serviceOne ? userIdentify.find(fil => fil.id === serviceOne.id_identificacao_usuario) : ""
    return value
  }

  const valueService = () => {
    const value = serviceOne ? service.find(fil => fil.id === serviceOne.servico) : ""
    return value
  }

  const valueTechnician = () => {
    const value = serviceOne ? technician.find(fil => fil.id === serviceOne.tecnico) : ""
    return value
  }

  const toast = useRef(null);

  const show = () => {
      if (isVerify) {
          toast.current.show({ severity: 'success', summary: 'Success', detail: 'Alteração feita com Sucesso!' });
      } else {
          toast.current.show({ severity: 'error', summary: 'Error', detail: isError });
      }
  }


  const { EditServicesRequestMutation, allService, allTechnician, isLoadingService, isLoadingtechnician, allUserIdentify, oneService } = EditServicesController(id, setIsVerify, setIsError, show);

  const initialValue = {
    solicitacao: serviceOne ? serviceOne.solicitacao : "",
    resultado: serviceOne ? serviceOne.resultado : "",
    encaminhamento: serviceOne ? serviceOne.encaminhamento : "",
    servico: valueService(),
    tecnico: valueTechnician(),
    id_identificacao_usuario: valueUserIdent(),
    id_membro_familiar: "",
    data: serviceOne ? serviceOne.data : ""
  }

  useEffect(() => {
    if (allService) {
      setService(allService.data);
    }
    if (allTechnician) {
      setTechnician(allTechnician.data);
    }
    if (allUserIdentify) {
      setUserIdentify(allUserIdentify.data);
    }
    if (oneService && loading) {
      setServiceOne(oneService.data)
    }
  }, [allService, allTechnician, allUserIdentify, oneService, loading])




  const handleCreateService = (data) => {

    const body = {
      solicitacao: data.solicitacao,
      resultado: data.resultado,
      encaminhamento: data.encaminhamento,
      servico: data.servico.id,
      tecnico: data.tecnico.id,
      id_identificacao_usuario: data.id_identificacao_usuario.id,
      id_membro_familiar: 1,
      data: data.data
    }

    EditServicesRequestMutation.mutate(body)

  }


  return {
    initialValue, service, technician, isLoadingService, isLoadingtechnician, handleCreateService, Schema, userIdentify, serviceOne, toast, show
  }
}