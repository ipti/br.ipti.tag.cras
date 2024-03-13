import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Column } from "../styles/styles";
const CrasDropdown = ({ value, setValue, options, optionLabel, placeholder, label, name, onChange, filter, onFilter }) => {
    return (
        <Column>
            {label ? <label htmlFor="username" style={{ marginBottom: "8px", marginLeft: "4px" }}>{label}</label> : null}
            <Dropdown onFilter={onFilter} name={name} value={value} onChange={onChange} options={options} optionLabel={optionLabel} filter={filter}
                placeholder={label} />
        </Column>
    )
}

export default CrasDropdown;
