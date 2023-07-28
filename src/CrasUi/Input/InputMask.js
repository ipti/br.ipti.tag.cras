import { InputMask } from "primereact/inputmask";import React from "react";
import { Column } from "../styles/styles";

const CrasInputMask = ({label, smallLabel, placeholder, onChange, name, value, type, requerid, mask}) => {
    return(
        <Column>
            <label htmlFor="username">{label}</label>
            <InputMask requerid={requerid} type={type} mask={mask} name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInputMask;