import React from "react";

import { Button } from 'primereact/button';
        

const ButtonPrime = ({label, onClick, icon, iconPos}) => {
    return(
        <div className="card flex justify-content-center">
            <Button label={label} onClick={onClick} icon={icon} iconPos={iconPos} />
        </div>
    )
}

export default ButtonPrime;