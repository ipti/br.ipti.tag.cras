import { useEffect, useState } from "react"
import { CreateTechnicianVisitwsController } from "../../../sdk/FamilyRefered/TechnicianVisits/CreateTechnicianVisits/controller"
import { ListTechnicianController } from "../../../sdk/FamilyRefered/TechnicianVisits/ListTechnicianVisits/controller"
import { useParams } from "react-router-dom"

const TechnicianVisitsState = () => {

    const { id } = useParams()

    const { technicianVisitsRequests } = ListTechnicianController()

    const { CreateTechnicianVisitsRequestMutation } = CreateTechnicianVisitwsController()

    const CreateTechnicianVisits = (body) => {
        CreateTechnicianVisitsRequestMutation.mutate(body)
    }

    const [technicianVisits, setTechnicianVisits] = useState([]);

    useEffect(() => {
        if (technicianVisitsRequests) {
            const filterFamily = technicianVisitsRequests.filter(props => props.family_fk === parseInt(id))
            setTechnicianVisits(filterFamily.reverse())
        }
    }, [technicianVisitsRequests, id])

    return {
        CreateTechnicianVisits, technicianVisits
    }
}

export default TechnicianVisitsState