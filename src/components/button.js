import React from "react";

export default function Button(props){
    const variant = props.variant ? props.variant : "";
    const disableShadow = props.disableShadow ? "no-shadow" : "";
    const disableButton = props.disabled ? true : false;
    const color = props.color ? props.color : ""; 
    const icon = props.startIcon || props.endIcon ? "icon" : "";
    const size = props.size ? props.size : "";
    return(
        <button className={`${variant}${disableShadow}${color}${icon}${size}`} 
        disabled={disableButton}>
            {props.startIcon ? <span class="material-icons">{props.startIcon}</span> : <></>}
            {props.disabled ? "Disabled" : "Default"}
            {props.endIcon ? <span class="material-icons">{props.endIcon}</span> : <></>}
        </button>
    )
}