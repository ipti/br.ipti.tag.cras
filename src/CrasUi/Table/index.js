import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from '../styles/styles';


const CrasTable = ({ products, columns, header, pathEdit, delet, onEdit, onView }) => {
    const [visible, setVisible] = useState();
    const [id, setId] = useState();


    const history = useNavigate()
    const actionBodyTemplate = (rowData) => {

        return (
            <React.Fragment>
                <Row id='end'>
                    {pathEdit || onEdit ? <Button icon="pi pi-pencil" rounded className="mr-2" onClick={onEdit ? () => onEdit(rowData) : () => history(`${pathEdit}${rowData.family_fk ? rowData.family_fk : rowData.id}`)} /> : null}
                    {delet ? <Button icon="pi pi-trash" rounded type="button" severity="danger" onClick={() => { setVisible(true); setId(rowData.id) }} /> : null}
                </Row>
            </React.Fragment>
        );
    };

    const viewBodyTemplate = (rowData) => {

        return (
            <React.Fragment>
                <Row id='end'>
                    <Button icon="pi pi-eye" rounded className="mr-2" onClick={onView ? () => onView(rowData) : () => history(`${pathEdit}${rowData.family_fk ? rowData.family_fk : rowData.id}`)} />
                </Row>
            </React.Fragment>
        );
    };


    return (
        <>
            <DataTable rows={5} paginator rowsPerPageOptions={[5, 10, 25, 50]} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column align="center" key={col.field} field={col.field} header={col.header} />
                ))}
                {pathEdit || delet || onEdit ? <Column align="right" body={actionBodyTemplate} header={"Editar"} exportable={false} style={{ minWidth: '12rem' }}></Column> : null}
                {onView ? <Column align="right" body={viewBodyTemplate} header={""} exportable={false} style={{ minWidth: '12rem' }}></Column> : null}

            </DataTable>
            <ConfirmPopup visible={visible} onHide={() => setVisible(false)} message="Deseja excluir? Essa ação é irreversível!"
                acceptLabel='Sim'
                rejectLabel='Não'
                header="Confirmação" icon="pi pi-exclamation-triangle" accept={() => { delet(id) }} reject={() => setVisible(false)} />
        </>
    )
}

export default CrasTable;