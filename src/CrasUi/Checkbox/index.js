import React from "react";

import { Checkbox } from "primereact/checkbox";

const CrasCheckbox = ({ name, onChange, label, value, checked }) => {
    return (
        <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name={name} value={value} onChange={onChange} checked={checked} />
            <label htmlFor="ingredient1" className="ml-2">{label}</label>
        </div>
    )
}

export default CrasCheckbox;