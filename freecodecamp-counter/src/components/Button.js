import React from "react";
import '../stylesheets/Button.css'

function Button({text, isButtonClick, manageClick}) {
  return(
    <button
    className={isButtonClick ? 'button-click' : 'button-reset'}
    onClick={manageClick}>
      {text}
    </button>
  )
}

export default Button;