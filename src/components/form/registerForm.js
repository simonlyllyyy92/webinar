import React from "react"
import "../../styles/component/registerForm/registerForm.styles.scss"

const RegisterForm = () => {
  return (
    <div className="register-form" id="register-form">
      <div className="register-form-container">
        <div className="register-form-content">
          <div className="form-header">
            <h4>Register for a Webinar now</h4>
            <p>
              Please fill in the form below and you will be contacted by one of
              our professional business experts
            </p>
          </div>
          <div className="form-container">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
                console.log("submitted")
              }}
            >
              <div className="form-control">
                <label>Topic</label>
                <select>
                  <option value="Topic1">This is the topic 1</option>
                  <option value="Topic2">This is the topic 2</option>
                </select>
              </div>
              <div className="form-control">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name..." required />
              </div>
              <div className="form-control">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name..." required />
              </div>
              <div className="form-control">
                <label>Email</label>
                <input type="text" placeholder="Enter Email..." required />
              </div>
              <div className="form-control">
                <label>Phone</label>
                <div className="form-control-child">
                  <select>
                    <option value="+61">+61</option>
                    <option value="+86">+86</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter phone number..."
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label>Mobile Authentication</label>
                <div className="form-control-child">
                  <button disabled>Get Code</button>
                  <input type="text" placeholder="Enter code" required />
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
export default RegisterForm
