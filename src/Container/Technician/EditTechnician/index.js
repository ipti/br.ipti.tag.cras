import EditTechnicianScreen from "../../../Page/Technician/EditTechcian"
import EditTechnicianProvider from "../../../context/Technician/EditTechnician/context"

const EditTechnician = () => {
    return(
        <EditTechnicianProvider>
            <EditTechnicianScreen />
        </EditTechnicianProvider>
    )
}

export default EditTechnician;