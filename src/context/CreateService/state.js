import { useEffect, useState } from "react";
import { CreateServicesController } from "../../sdk/Services/CreateService/controller"

export const CreateServicesState = () => {

    const [service, setService] = useState();
    const [technician, setTechnician] = useState()

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

    const { CreateServicesRequestMutation, allService, allTechnician, isLoadingService, isLoadingtechnician } = CreateServicesController();

    useEffect(() => {
      if(allService){
        setService(allService.data.data)
      }
      if(allTechnician){
        setTechnician(allTechnician.data.data)
      }
    }, [allService, allTechnician])
    

    return {
        initialValue, service, technician, isLoadingService,isLoadingtechnician
    }
}