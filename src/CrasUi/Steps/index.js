import React from "react";
import { Steps } from 'primereact/steps';

const CrasSteps = ({ items, activeIndex, setActiveIndex }) => {

    return (
            <Steps model={items} pt={{
                action: { style:{
                    backgroundColor: "transparent"
                }}
            }} expanded={false} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} />

    )
}

export default CrasSteps;