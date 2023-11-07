
import { InputNumber } from 'primereact/inputnumber';
import React from "react";
import { Column } from "../styles/styles";

const CrasInputNumber = ({label, smallLabel, placeholder, onChange, name, value, type, requerid, showButtons, currency, locale, mode, style }) => {
    return(
        <Column>
            <label htmlFor="username" style={{marginBottom: "8px", marginLeft: "4px"}}>{label}</label>
            <InputNumber requerid={requerid} type={type} style={{ ...style }} showButtons={showButtons} mode={mode} currency={currency} locale={locale} name={name} value={value} placeholder={placeholder} onValueChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default CrasInputNumber;