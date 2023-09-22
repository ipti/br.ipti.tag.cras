import React from "react";

import { RadioButton } from "primereact/radiobutton";
import { Column, Padding } from "../styles/styles";

const CrasRadioButton = ({ value, setSelectValue, name, selectValue, label, onChange, checked }) => {
    return (
        <Padding padding="8px">
            <Column id="center">
                <div className="flex align-items-center">
                    <RadioButton inputId={value} name={name} value={value} onChange={onChange} checked={checked} />
                    <label className="ml-2">{label}</label>
                </div>
            </Column>

        </Padding>
    )
}

export default CrasRadioButton;