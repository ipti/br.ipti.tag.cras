import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const CrasTable = ({ products, columns, header }) => {

    return (
        <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
            ))}
        </DataTable>
    )
}

export default CrasTable;