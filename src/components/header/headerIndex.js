import React, { useState } from "react"
import HeaderToolBar from "./header-toolbar"
import "../../styles/component/header/headerIndex.styles.scss"

import SlideDrawer from "./slideDrawer"

import Backdrop from "./backdrop"

const HeaderIndex = () => {
  const [slideDrawerOpen, setSlideDrawerOpen] = useState(false)

  const handleOnclick = () => {
    setSlideDrawerOpen((prevState) => !prevState)
  }

  const handleCloseDrawer = () => {
    setSlideDrawerOpen(false)
  }

  let backdrop

  if (slideDrawerOpen) {
    backdrop = <Backdrop handleCloseDrawer={handleCloseDrawer} />
  }

  return (
    <div className="headerContainer">
      <HeaderToolBar handleOnclick={handleOnclick} />
      <SlideDrawer onShow={slideDrawerOpen} />
      {backdrop}
    </div>
  )
}

export default HeaderIndex
