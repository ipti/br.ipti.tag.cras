import React from "react";

import { RadioButton } from "primereact/radiobutton";
import { Padding } from "../styles/styles";

const CrasRadioButton = ({ value, setSelectValue, name, selectValue, label }) => {
    return (
        <>
            <div className="flex align-items-center">
                <Padding>
                    <RadioButton inputId={value} name={name} value={value} onChange={(e) => setSelectValue(e.value)} checked={selectValue.key === value} />
                    <label className="ml-2">{name}</label>
                </Padding>
            </div>

        </>
    )
}

export default CrasRadioButton;