import React from "react";

import { Button } from 'primereact/button';
        

const ButtonPrime = ({label, onClick, icon, iconPos, severity, type}) => {
    return(
        <div className="card flex justify-content-center">
            <Button type={type} label={label} onClick={onClick} icon={icon} iconPos={iconPos} severity={severity} />
        </div>
    )
}

export default ButtonPrime;