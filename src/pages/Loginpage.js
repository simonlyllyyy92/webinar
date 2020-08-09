import React from "react"
//connection with redux
import { connect } from "react-redux"
//action
import { postUserLogin } from "../store/authentication/action"
import LoginForm from "../components/form/loginForm"
import "../styles/pages/loginPage.styles.scss"

class Loginpage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
  }
  // login form submit
  handleUserLogin = (e) => {
    e.preventDefault()
    this.props.postUserLogin({
      email: this.state.email,
      password: this.state.password,
    })
    // email: "yuntest@mailinator.com",
    // password: "A123456",
  }

  // change email input value
  inputEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  // change password input value
  inputPassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <div className="login-form-container" style={{ marginTop: "58px" }}>
        <LoginForm
          emailChange={this.inputEmail}
          passwordChange={this.inputPassword}
          onSubmit={this.handleUserLogin}
          email={this.state.email}
          password={this.state.password}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  postUserLogin: (payload) => dispatch(postUserLogin(payload)),
})

export default connect(null, mapDispatchToProps)(Loginpage)
