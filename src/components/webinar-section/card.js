import React from "react"
import { useSelector } from "react-redux"
import "../../styles/component/card/card.styles.scss"
import parse from "html-react-parser"
import { withRouter } from "react-router-dom"

const Card = ({ created_at, title, content, history }) => {
  const htmlContent = parse(content)
  const token = useSelector((state) => state.authReducer.loginUser.data.token)

  const handleRegister = () => {
    alert("You need to login before register")
    history.push("/login")
  }

  return (
    <div className="webinar-card">
      <div className="card-content">
        <div className="card-content-title">
          <p className="card-content-timeline">{created_at}</p>
          <p className="card-content-subtitle">{title}</p>
          <div className="card-content-subscription">{htmlContent}</div>
          <p className="card-content-timeZone">{created_at}</p>
        </div>
        <div className="card-content-register">
          {token ? (
            <a
              style={{ textDecoration: "none" }}
              href="#register-form"
              className="register-button"
            >
              Register Now
            </a>
          ) : (
            <div onClick={handleRegister} className="register-button">
              Register Now
            </div>
          )}

          <i
            id="icon"
            style={{ color: "#6BB718" }}
            className="fas fa-greater-than"
          ></i>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Card)
