import React, { useState } from "react"
import HeaderToolBar from "./header-toolbar"

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
    <div style={{ height: "100%" }}>
      <HeaderToolBar handleOnclick={handleOnclick} />
      <SlideDrawer onShow={slideDrawerOpen} />
      {backdrop}
    </div>
  )
}

export default HeaderIndex
