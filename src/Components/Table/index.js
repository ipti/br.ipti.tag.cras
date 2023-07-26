import React from "react";
import { Column, Padding, Row } from "../../CrasUi/styles/styles";
import { InputText } from "primereact/inputtext";
import ButtonPrime from "../../CrasUi/Button/ButtonPrime";
import CrasTable from "../../CrasUi/Table";
import { useNavigate } from "react-router-dom";

const Table = ({columns, list, path, name}) => {

    const history = useNavigate()

    const header = (
        <Row id="end">
                
                <div className="p-inputgroup" style={{width: "30%"}}>
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-search"></i>
                    </span>
                    <InputText placeholder={name} />
                </div>
        </Row>
    );
    return(
            <Column>
                    <h1>
                        {name}
                    </h1>
                    <Row>
                        <ButtonPrime label={"Adicionar"} onClick={() => history(path)} />
                    </Row>
                    <Padding padding="16px 0">
                        <CrasTable columns={columns} products={list} header={header} />
                    </Padding>
            </Column>
    )
}

export default Table;