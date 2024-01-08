import TechnicianVisitsPage from "../../../Page/FamilyRefered/TechnicianVisits"
import TechnicianVisitsProvider from "../../../context/FamilyRefered/TechnicianVisits/context"

const TechnicianVisits = () => {
    return (
        <TechnicianVisitsProvider>
            <TechnicianVisitsPage></TechnicianVisitsPage>
        </TechnicianVisitsProvider>
    )
}

export default TechnicianVisits