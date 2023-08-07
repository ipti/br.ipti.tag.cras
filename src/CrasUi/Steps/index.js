import React from "react";
import { Steps } from 'primereact/steps';

const CrasSteps = ({ items, activeIndex, setActiveIndex, readOnly }) => {

    return (
            <Steps model={items} pt={{
                action: { style:{
                    backgroundColor: "transparent"
                }},
                menuitem: {
                    color: "transparent",
                    style: {
                        color: "transparent"
                    }
                }
            }} expanded={false} readOnly={readOnly} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} />

    )
}

export default CrasSteps;