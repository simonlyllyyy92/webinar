import React from "react"

import "../../styles/header/hamburger-button.styles.scss"

const HamburgerButton = ({ handleOnclick }) => {
  return (
    <button className="toggle-button" onClick={handleOnclick}>
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
    </button>
  )
}

export default HamburgerButton
