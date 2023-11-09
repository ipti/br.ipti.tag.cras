import { useContext } from "react";
import Table from "../../../Components/Table";
import { Container } from "../../../CrasUi/styles/styles"
import { AttendanceUnityContext } from "../../../context/AttendanceUnity/ListAttendanceUnity/context";

const ListAttendanceUnity = () => {

    const {isLoading, attendance, deleteAttendance} = useContext(AttendanceUnityContext)
    const columns = [
        {field: 'id', header: 'id' },
        { field: 'name', header: 'Nome' },
    ];
    const filter = (filt, namefilter) => {
        return filt?.name?.toLowerCase()?.includes(namefilter)
    }

    console.log(attendance)
    return(
        <Container>
            {isLoading ?
                <div>carregando...</div> :
                <Table columns={columns} list={attendance} filter={filter} path="/criar/unidades" name="Unidades"  delet={deleteAttendance}/>
            }
        </Container>
    )
}

export default ListAttendanceUnity;