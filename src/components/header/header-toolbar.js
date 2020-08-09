import React from "react"

import "../../styles/component/header/header-toolbar.styles.scss"
import HamburgerButton from "./hamburgerButton"
import HeaderDemoLink from "./headerDemoLink"
import Acy_image from "../../asset/acy_image.png"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { postUserLogOut } from "../../store/authentication/action"

class Toolbar extends React.Component {
  navToLoginPage = () => {
    this.props.history.push("/login")
  }

  handleLogout = () => {
    this.props.postUserLogOut()
  }

  render() {
    const token = this.props.loginData.token

    let showLogin = token
      ? "toolbar_navigation_items"
      : "toolbar_navigation_items single"

    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toggle-button">
            <HamburgerButton handleOnclick={this.props.handleOnclick} />
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

            <HeaderDemoLink />
          </div>

          <div className="spacer"></div>
          <div className={showLogin}>
            {token ? (
              <div className="userName">
                {this.props.loginData.user.nick_name}
              </div>
            ) : (
              <div className="login-button" onClick={this.navToLoginPage}>
                Login
              </div>
            )}
            {token && (
              <div className="logout-button" onClick={this.handleLogout}>
                Logout
              </div>
            )}
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer.loginUser.data,
})

const mapDispatchToProps = (dispatch) => ({
  postUserLogOut: () => dispatch(postUserLogOut()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar))
