import React from "react";

        

const ButtonPrime = ({label, onClick, icon, iconPos, severity, type}) => {
    return(
        <div className="card flex justify-content-center">
            <button className="t-button-primary" type={type} label={label} style={{width: "100%"}} onClick={onClick} icon={icon} iconPos={iconPos} severity={severity}>
                {label}
            </button>
        </div>
    )
}

export default ButtonPrime;