import React from "react"

const LoginForm = ({
  email,
  password,
  emailChange,
  passwordChange,
  onSubmit,
}) => {
  return (
    <div className="login-form-content-box">
      <div className="login-form-form-box">
        <div className="login-form-header">
          <h2>Login</h2>
        </div>
        <div className="login-form-input-container">
          <form className="login-form" onSubmit={onSubmit}>
            <div className="login-form-control">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                required
                value={email}
                onChange={emailChange}
              />
            </div>
            <div className="login-form-control">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password..."
                required
                value={password}
                onChange={passwordChange}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
