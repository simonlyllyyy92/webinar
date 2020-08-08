import React from "react"
import "../../styles/component/header/slideDrawer.styles.scss"

const SlideDrawer = (props) => {
  let drawerClasses = "slide-drawer"
  if (props.onShow) {
    drawerClasses = "slide-drawer open"
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <div style={{ marginBottom: "12px" }}>
          <li>
            <a href="/">Why ACY</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Platforms</a>
          </li>
          <li>
            <a href="/">Education</a>
          </li>
          <li>
            <a href="/">Partners</a>
          </li>
        </div>
        <div>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default SlideDrawer
