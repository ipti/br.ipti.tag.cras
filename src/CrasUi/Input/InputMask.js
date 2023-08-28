import { InputText } from "primereact/inputtext";
import React from "react";
import { withMask } from "use-mask-input";
import { Column } from "../styles/styles";

const CrasInputMask = ({label, smallLabel, placeholder, onChange, name, value, type, requerid, mask}) => {
    return(
        <Column>
            <label htmlFor="username">{label}</label>
            <InputText requerid={requerid} type={type} ref={withMask(mask)}  name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInputMask;