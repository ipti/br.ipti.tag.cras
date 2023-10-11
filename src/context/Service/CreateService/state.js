import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { CreateServicesController } from "../../../sdk/Services/CreateService/controller";


export const CreateServicesState = () => {

  // const [service, setService] = useState([]);
  const [technician, setTechnician] = useState();
  // const [userIdentify, setUserIdentify] = useState([]);

  const initialValue = {
    solicitacao: "",
    resultado: "",
    encaminhamento: "",
    servico: "",
    tecnico: "",
    id_identificacao_usuario: "",
    id_membro_familiar: "",
    data: ""
  }

  const CreateUserSchema = Yup.object().shape({
    solicitacao: Yup.string().required("Campo Obrigatório"),
    resultado: Yup.string().required('Campo Obrigatório'),
    data: Yup.string().required('Campo Obrigatório'),
    encaminhamento: Yup.string().required('Campo Obrigatório'),
    tecnico: Yup.object().required('Campo Obrigatório'),
    servico: Yup.object().required('Campo Obrigatório'),
    id_identificacao_usuario: Yup.object().required('Campo Obrigatório'),
});

  const { CreateServicesRequestMutation, allService, allTechnician, isLoadingService, isLoadingtechnician, allUserIdentify } = CreateServicesController();

  useEffect(() => {
    // if (allService) {
    //   setService(allService);
    // }
    if (allTechnician) {
      setTechnician(allTechnician);
    }
    // if(allUserIdentify){
    //   setUserIdentify(allUserIdentify);
    // }
  }, [allService, allTechnician, allUserIdentify])


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

    CreateServicesRequestMutation.mutate(body)

  }

  return {
    initialValue, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema
  }
}