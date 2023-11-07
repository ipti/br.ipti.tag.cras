import React, { useState } from "react";
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import { InputText } from "primereact/inputtext";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";
import CrasTable from "../../CrasUi/Table";
import { useNavigate } from "react-router-dom";

const Table = ({ columns, list, path, name, pathEdit, delet }) => {

    const history = useNavigate();
    const [nameFilter, setNameFilter] = useState("");

    const larguraTela = window.innerWidth;


    const header = (
        <Row id="end">
            <div className="p-inputgroup" style={{ width: larguraTela < 700 ? "60%" : "30%" }}>
                <span className="p-inputgroup-addon">
                    <i className="pi pi-search"></i>
                </span>
                <InputText placeholder={name} value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
            </div>
        </Row>
    );

    const filterName = nameFilter !== "" ? list.filter(filt => filt?.name?.toLowerCase()?.includes(nameFilter) || filt?.cpf?.toLowerCase()?.includes(nameFilter)) : list

    return (
        <Column>
            {path ? <> <h1>
                {name}
            </h1>
                <Padding padding="16px" />
                <Row>
                    <ButtonPrime label={"Adicionar"} onClick={() => history(path)} />
                </Row></> : null}
            <Padding padding="16px 0">
                <CrasTable columns={columns} products={filterName} header={header} pathEdit={pathEdit} delet={delet} />
            </Padding>
            <Padding />
        </Column>
    )
}

export default Table;