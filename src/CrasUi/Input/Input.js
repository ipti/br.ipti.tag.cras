import { InputText } from "primereact/inputtext";
import React from "react";
import { Column } from "../styles/styles";

const CrasInput = ({ label, smallLabel, placeholder, onChange, name, value, type, requerid, style }) => {
    return (
        <Column>
            <label htmlFor="username" style={{marginBottom: "8px", marginLeft: "4px"}}>{label}</label>
            <InputText requerid={requerid} style={{ ...style }} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInput;