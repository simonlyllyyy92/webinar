import React from "react"
import "../../styles/component/header/backdrop.styles.scss"

const Backdrop = ({ handleCloseDrawer }) => (
  <div className="backdrop" onClick={handleCloseDrawer} />
)

export default Backdrop
