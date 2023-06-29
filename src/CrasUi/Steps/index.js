import React from "react";
import { Steps } from 'primereact/steps';

const CrasSteps = ({ items, activeIndex, setActiveIndex }) => {

    return (
        <div className="card">
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        </div>
    )
}

export default CrasSteps;