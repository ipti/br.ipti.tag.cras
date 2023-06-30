import React from "react";

import { Checkbox } from "primereact/checkbox";

const CrasCheckbox = ({ name, onChange }) => {
    return (
        <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name={name} value="Cheese" onChange={onChange} checked={true} />
            <label htmlFor="ingredient1" className="ml-2">{name}</label>
        </div>
    )
}

export default CrasCheckbox;