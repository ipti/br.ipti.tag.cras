import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { CreateServicesController } from "../../../sdk/Services/CreateService/controller";


export const CreateServicesState = () => {

  const [service, setService] = useState([]);
  const [technician, setTechnician] = useState();
  const [userIdentify, setUserIdentify] = useState([]);

  const initialValue = {
    solicitation: "",
    result: "",
    providence: "",
    task_fk: "",
    technician_fk: "",
    user_identify_fk: "",
    description: ""
  }

  const CreateUserSchema = Yup.object().shape({
    solicitation: Yup.string().required("Campo Obrigatório"),
    result: Yup.string().required('Campo Obrigatório'),
    providence: Yup.string().required('Campo Obrigatório'),
    technician_fk: Yup.object().required('Campo Obrigatório'),
    task_fk: Yup.object().required('Campo Obrigatório'),
    user_identify_fk: Yup.object().required('Campo Obrigatório'),
    description: Yup.string().required('Campo Obrigatório'),
  });

  const { CreateServicesRequestMutation, allService, allTechnician, isLoadingService, isLoadingtechnician, allUserIdentify } = CreateServicesController();

  useEffect(() => {
    if (allService) {
      setService(allService);
    }
    if (allTechnician) {
      setTechnician(allTechnician);
    }
    if (allUserIdentify) {
      setUserIdentify(allUserIdentify);
    }
  }, [allService, allTechnician, allUserIdentify])


  const handleCreateService = (data) => {


    const body = {
      solicitation: data.solicitation,
      result: data.result,
      providence: data.providence,
      task_fk: data.task_fk.id,
      technician_fk: data.technician_fk.id,
      attendance_unity_fk: 1,
      user_identify_fk: data.user_identify_fk.id,
      description: data.description,
      date: new Date(Date.now())
    }

    CreateServicesRequestMutation.mutate(body)

  }

  return {
    initialValue, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema, service, userIdentify
  }
}