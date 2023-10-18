import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import { Column } from "../styles/styles";

const CrasInputArea = ({ label, smallLabel, placeholder, onChange, name, value, type, requerid, style }) => {
    return (
        <Column>
            <label htmlFor="username" style={{ marginBottom: "8px", marginLeft: "4px" }}>{label}</label>
            <InputTextarea autoResize rows={5} cols={30} requerid={requerid} style={{ ...style }} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInputArea;