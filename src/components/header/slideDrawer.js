import React from "react"
import "../../styles/header/slideDrawer.styles.scss"

const SlideDrawer = (props) => {
  let drawerClasses = "slide-drawer"
  if (props.onShow) {
    drawerClasses = "slide-drawer open"
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  )
}

export default SlideDrawer
