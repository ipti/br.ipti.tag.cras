import { useEffect, useState } from "react";
import { CreateServicesController } from "../../sdk/Services/CreateService/controller";
import * as Yup from 'yup';


export const CreateServicesState = () => {

  const [service, setService] = useState();
  const [technician, setTechnician] = useState();
  const [userIdentify, setUserIdentify] = useState();

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
    if (allService) {
      setService(allService.data.data);
    }
    if (allTechnician) {
      setTechnician(allTechnician.data.data);
    }
    if(allUserIdentify){
      setUserIdentify(allUserIdentify.data.data);
    }
  }, [allService, allTechnician, allUserIdentify])


  const handleCreateService = (data) => {

    var date = "2023-07-21";

    // if (data.data) {
    //   let day = data.data.getDay();
    //   let year = data.data.getYear();
    //   let month = data.data.getMonth();
    //   date = `${year}-${month}-${day}`
    // }

    console.log(data)

    const body = {
      solicitacao: data.solicitacao,
      resultado: data.resultado,
      encaminhamento: data.encaminhamento,
      servico: data.servico.name,
      tecnico: data.tecnico.name,
      id_identificacao_usuario: data.id_identificacao_usuario.id,
      id_membro_familiar: 1,
      data: date
    }

    console.log(body)
    CreateServicesRequestMutation.mutate(body)

  }

  return {
    initialValue, service, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema, userIdentify
  }
}