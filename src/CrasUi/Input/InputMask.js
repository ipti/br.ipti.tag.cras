import { InputText } from "primereact/inputtext";
import React from "react";
import { withMask } from "use-mask-input";
import { Column } from "../styles/styles";

const CrasInputMask = ({label, smallLabel, placeholder, onChange, name, value, type, requerid, mask, style}) => {
    return(
        <Column>
            <label htmlFor="username" style={{marginBottom: "8px", marginLeft: "4px"}}>{label}</label>
            <InputText requerid={requerid} style={{  ...style }} type={type} ref={withMask(mask)}  name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInputMask;