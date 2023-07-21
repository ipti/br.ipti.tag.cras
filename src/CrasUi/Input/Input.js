import { InputText } from "primereact/inputtext";
import React from "react";
import { Column } from "../styles/styles";

const CrasInput = ({label, smallLabel, placeholder, onChange, name, value}) => {
    return(
        <Column>
            <label htmlFor="username">{label}</label>
            <InputText name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInput;