import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { CreateServicesController } from "../../../sdk/Services/CreateService/controller";
import { GetIdAttendance } from "../../../services/localstorage";


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
    description: "",
    family: ""
  }

  const CreateUserSchema = Yup.object().shape({
    solicitation: Yup.string().required("Campo Obrigatório"),
    result: Yup.object().required('Campo Obrigatório'),
    providence: Yup.string().required('Campo Obrigatório'),
    technician_fk: Yup.object().required('Campo Obrigatório'),
    task_fk: Yup.object().required('Campo Obrigatório'),
    user_identify_fk: Yup.object().required('Campo Obrigatório'),
    description: Yup.string().required('Campo Obrigatório'),
  });

  const CreateNewUserSchema = Yup.object().shape({
    solicitation: Yup.string().required("Campo Obrigatório"),
    result: Yup.object().required('Campo Obrigatório'),
    providence: Yup.string().required('Campo Obrigatório'),
    technician_fk: Yup.object().required('Campo Obrigatório'),
    task_fk: Yup.object().required('Campo Obrigatório'),
    description: Yup.string().required('Campo Obrigatório'),
    name: Yup.string().required('Campo Obrigatório'),
  });

  const CreateAttendanceSchema = Yup.object().shape({
    solicitation: Yup.string().required("Campo Obrigatório"),
    result: Yup.object().required('Campo Obrigatório'),
    providence: Yup.string().required('Campo Obrigatório'),
    technician_fk: Yup.object().required('Campo Obrigatório'),
    task_fk: Yup.object().required('Campo Obrigatório'),
    family: Yup.array().required('Campo Obrigatório'),
    description: Yup.string().required('Campo Obrigatório'),
  });

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

  const { CreateServicesRequestMutation, allService, allTechnician, isLoadingService, isLoadingtechnician, allUserIdentify, CreateServicesAttendanceRequestMutation,CreateServicesAttendanceNewUserRequestMutation } = CreateServicesController();

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
      result: data.result.id,
      providence: data.providence,
      task: data.task_fk.id,
      technician: data.technician_fk.id,
      attendance_unity: parseInt(GetIdAttendance()),
      user_identify: data.user_identify_fk.id,
      description: data.description,
      date: new Date(Date.now())
    }

    CreateServicesRequestMutation.mutate(body);

  }


  const familyId = (value) => {
    var family = []
    value.forEach(element => {
      family.push(element?.id)
    });
    return family
  }
  const handleCreateServiceGroup = (data) => {
    const body = {
      solicitation: data.solicitation,
      result: data.result.id,
      providence: data.providence,
      task: data.task_fk.id,
      technician: data.technician_fk.id,
      attendance_unity: parseInt(GetIdAttendance()),
      families: familyId(data.family),
      description: data.description,
      date: new Date(Date.now())
    }

    CreateServicesAttendanceRequestMutation.mutate(body);

  }

  const handleCreateServiceNewUser = (data) => {
    const body = {
      solicitation: data.solicitation,
      result: data.result.id,
      providence: data.providence,
      task: data.task_fk.id,
      technician: data.technician_fk.id,
      attendance_unity: parseInt(GetIdAttendance()),
      name: data.name,
      cpf: data.cpf,
      description: data.description,
      date: new Date(Date.now())
    }

    CreateServicesAttendanceNewUserRequestMutation.mutate(body);
  }

  return {
    initialValue, technician, isLoadingService, isLoadingtechnician, handleCreateService, CreateUserSchema, service, userIdentify, result, handleCreateServiceGroup, CreateAttendanceSchema, CreateNewUserSchema, handleCreateServiceNewUser
  }
}