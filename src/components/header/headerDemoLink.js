import React from "react"
import { withRouter } from "react-router-dom"
import "../../styles/component/header/headerDemoLink.styles.scss"

const HeaderDemoLink = ({ history }) => {
  const navToRegistered = () => {
    history.push("/registerd")
  }
  return (
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
      <li style={{ cursor: "pointer" }} className="dropdown">
        <div onClick={navToRegistered} className="dropbtn">
          Registered
        </div>
      </li>
    </ul>
  )
}

export default withRouter(HeaderDemoLink)
