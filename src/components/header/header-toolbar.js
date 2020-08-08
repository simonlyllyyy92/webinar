import React from "react"

import "../../styles/component/header/header-toolbar.styles.scss"
import HamburgerButton from "./hamburgerButton"
import Acy_image from "../../asset/acy_image.png"

const Toolbar = ({ handleOnclick }) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toggle-button">
        <HamburgerButton handleOnclick={handleOnclick} />
      </div>

      <div className="toolbar-container">
        <div className="toolbar_logo">
          <img
            src={Acy_image}
            style={{
              objectFit: "cover",
              height: "40px",
            }}
            alt="LOGO"
          />
        </div>

        <ul>
          <li className="dropdown">
            <a href="/" className="dropbtn">
              Why ACY
            </a>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/" className="dropbtn">
              Products
            </a>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/" className="dropbtn">
              Platforms
            </a>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/" className="dropbtn">
              Education
            </a>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/" className="dropbtn">
              Partners
            </a>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="spacer"></div>
      <div className="toolbar_navigation_items">
        <div className="login-button">Login</div>

        <div className="logout-button">Logout</div>
      </div>
    </nav>
  </header>
)

export default Toolbar
