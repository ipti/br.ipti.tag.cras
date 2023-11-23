import React from "react";



const ButtonPrime = ({ label, onClick, icon, iconPos, severity, type }) => {
    return (
        <div className="card flex justify-content-center">
            <button className={severity === "danger" ? "t-button-danger" : severity === "warning" ? "t-button-secondary t-warning" : severity === "success" ? "t-button-secondary t-success" : "t-button-primary"} type={type} label={label} style={{ width: "100%" }} onClick={onClick}>
                {label}
            </button>
        </div>
    )
}

export default ButtonPrime;