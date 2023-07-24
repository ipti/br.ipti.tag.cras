import React, { useContext, useState } from "react";
import { Column, Padding, Row } from "../../../../CrasUi/styles/styles";
import CrasTable from "../../../../CrasUi/Table";
import ButtonPrime from "../../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../../CrasUi/Input/Input";
import CrasDropdown from "../../../../CrasUi/Dropdown";
import { CreateFamilyReferedContext } from "../../../../Container/FamilyRefered/CreateFamilyRefered/context/context";

const FormFamilyComposition = () => {
    const [addMember, setAddMember] = useState(false)
    const {backStep, nextStep} = useContext(CreateFamilyReferedContext)


    const columns = [
        { field: 'name', header: 'Name' },
        { field: 'nis', header: 'NIS' },
        { field: 'parentesco', header: 'Parentesco' },
        { field: 'idade', header: 'Idade' },
        { field: 'sexo', header: 'Sexo' },
        { field: 'beneficio', header: 'Beneficio' },
        { field: 'acoes', header: 'Ações' },
    ];

    return (
        <Column>
            <Padding padding="16px" />
            {!addMember ? <Row id="end">
                <ButtonPrime onClick={() => setAddMember(true)} label="Adicionar Membro" />
            </Row> : null}
            <h3>Composição Familiar</h3>
            {addMember ?
                <Column>
                    <Row>
                        <div className="col"><CrasInput label="Nome" /></div>
                        <div className="col"><CrasInput label="NIS" /></div>
                    </Row>
                    <Row>
                        <div className="col"><CrasDropdown label="Parentesco" /></div>
                        <div className="col"><CrasInput label="Idade" /></div>
                        <div className="col"><CrasDropdown label="Sexo" /></div>
                    </Row>
                    <Row>
                        <div className="col"><CrasInput label="LOAS/BPC" /></div>
                        <div className="col"><CrasInput label="Previdência Social" /></div>
                        <div className="col"><CrasInput label="Bolsa Família" /></div>
                        <div className="col"><CrasInput label="Renda Mensal" /></div>
                    </Row>
                    <Padding padding="16px" />
                    <Row id="end">
                        <ButtonPrime label="Canelar" onClick={() => setAddMember(false)} severity="danger" />
                        <Padding />
                        <ButtonPrime label="Adicionar membro" />
                    </Row>
                </Column>
                : <CrasTable columns={columns} />
            }
            <Padding padding="16px" />
            <Row id="center">
                <ButtonPrime label="Voltar" onClick={backStep} />
                <Padding />
                <ButtonPrime label="Finalizar" onClick={nextStep} />
            </Row>
        </Column>
    )
};

export default FormFamilyComposition;