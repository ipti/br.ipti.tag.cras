import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Column } from "../styles/styles";
const CrasDropdown = ({ value, setValue, options, optionLabel, placeholder, label, name, onChange }) => {
    return (
        <Column>
            <label htmlFor="username" style={{marginBottom: "8px", marginLeft: "4px"}}>{label}</label>
            <Dropdown name={name} value={value} onChange={onChange} options={options} optionLabel={optionLabel} filter
                placeholder={label} />
        </Column>
    )
}

export default CrasDropdown;
