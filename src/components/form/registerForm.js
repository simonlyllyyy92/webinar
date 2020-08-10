import React from "react"
import { connect } from "react-redux"
import { postRegister } from "../../store/webinar/action"
import "../../styles/component/registerForm/registerForm.styles.scss"

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      errorMsg: "This field is required*",
      msgShown: false,
    }
  }

  handleSubmit = (e) => {
    const { firstName, lastName, email } = this.state
    this.setState({
      msgShown: true,
    })

    if (firstName !== "" && lastName !== "" && email !== "") {
      console.log("submit register")
      this.props.registerPost(this.props.registerTitle.id)
    }
  }

  //input handlers
  fnInput = (e) => {
    this.setState({
      firstName: e.target.value,
    })
  }

  lnInput = (e) => {
    this.setState({
      lastName: e.target.value,
    })
  }

  emailInput = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    return (
      <div className="register-form" id="register-form">
        <div className="register-form-container">
          <div className="register-form-content">
            <div className="form-header">
              <h4>Register for a Webinar now</h4>
              <p>
                Please fill in the form below and you will be contacted by one
                of our professional business experts
              </p>
            </div>
            <div className="form-container">
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault()
                  this.handleSubmit()
                }}
              >
                <div className="form-control">
                  <label>Topic</label>
                  <select>
                    <option value={this.props.registerTitle.title}>
                      {this.props.registerTitle.title}
                    </option>
                  </select>
                </div>
                <div className="form-control">
                  <div className="label-box">
                    <label>First Name</label>
                    {this.state.firstName === "" && this.state.msgShown && (
                      <label className="err-msg">{this.state.errorMsg}</label>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter First Name..."
                    value={this.state.firstName}
                    onChange={this.fnInput}
                  />
                </div>
                <div className="form-control">
                  <div className="label-box">
                    <label>Last Name</label>
                    {this.state.lastName === "" && this.state.msgShown && (
                      <label className="err-msg">{this.state.errorMsg}</label>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter Last Name..."
                    value={this.state.lastName}
                    onChange={this.lnInput}
                  />
                </div>
                <div className="form-control">
                  <div className="label-box">
                    <label>Email</label>
                    {this.state.email === "" && this.state.msgShown && (
                      <label className="err-msg">{this.state.errorMsg}</label>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter Email..."
                    onChange={this.emailInput}
                    value={this.state.email}
                  />
                </div>
                <div className="form-control">
                  <label>Phone</label>
                  <div className="form-control-child">
                    <select>
                      <option value="+61">+61</option>
                      <option value="+86">+86</option>
                    </select>
                    <input type="text" placeholder="Enter phone number..." />
                  </div>
                </div>
                <div className="form-control">
                  <label>Mobile Authentication</label>
                  <div className="form-control-child">
                    <button disabled>Get Code</button>
                    <input type="text" placeholder="Enter code" />
                  </div>
                </div>
                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  registerTitle: state.webinarReducer.register,
})

const mapDispatchToProps = (dispatch) => ({
  registerPost: (payload) => dispatch(postRegister(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
