import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Column } from "../styles/styles";
const CrasDropdown = ({ value, setValue, options, optionLabel, placeholder, label }) => {
    return (
        <Column>
            <label htmlFor="username">{label}</label>
            <Dropdown value={value} onChange={(e) => setValue(e.value)} options={options} optionLabel={optionLabel}
                placeholder={placeholder} />
        </Column>
    )
}

export default CrasDropdown;
