import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React from 'react';
import { Button } from 'primereact/button';
import { Row } from '../styles/styles';


const CrasTable = ({ products, columns, header }) => {

    const actionBodyTemplate = (rowData) => {
        console.log(rowData)
        return (
            <React.Fragment>
                <Row id='center'>
                    <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
                    <Button icon="pi pi-trash" rounded outlined severity="danger" />
                </Row>
            </React.Fragment>
        );
    };

    return (
        <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
            ))}
            <Column body={actionBodyTemplate} header={"Editar"} exportable={false} style={{ minWidth: '12rem' }}></Column>

        </DataTable>
    )
}

export default CrasTable;