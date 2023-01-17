import React from "react";
import '../stylesheets/ButtonClear.css'

const ButtonClear = (props) => {
    return(
    <div className="button-clear-container" onClick={props.manageClear}>
        C
    </div>)
};

export default ButtonClear