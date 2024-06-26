import { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles"
import { AttendanceUnityContext } from "../../../context/AttendanceUnity/ListAttendanceUnity/context";

const ListAttendanceUnity = () => {

    const {isLoading, attendance, deleteAttendance} = useContext(AttendanceUnityContext)
    const columns = [
        {field: 'id', header: 'Identificação' },
        { field: 'name', header: 'Nome' },
    ];
    const filter = (filt, namefilter) => {
        return filt?.name?.toLowerCase()?.includes(namefilter)
    }

    return(
        <Container>
            {isLoading ?
                <div>carregando...</div> :
                <Table columns={columns} list={attendance} filter={filter} path="/criar/unidades" pathEdit={"/edit/unidades/"} name="Unidades"  delet={deleteAttendance}/>
            }
        </Container>
    )
}

export default ListAttendanceUnity;