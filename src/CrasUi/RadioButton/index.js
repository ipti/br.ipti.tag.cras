import React from "react";

import { RadioButton } from "primereact/radiobutton";
import { Padding } from "../styles/styles";

const CrasRadioButton = ({ value, setSelectValue, name, selectValue, label, onChange, checked }) => {
    return (
        <>
            <div className="flex align-items-center">
                <Padding>
                    <RadioButton inputId={value} name={name} value={value} onChange={onChange} checked={checked} />
                    <label className="ml-2">{label}</label>
                </Padding>
            </div>

        </>
    )
}

export default CrasRadioButton;