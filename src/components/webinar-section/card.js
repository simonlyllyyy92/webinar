import React from "react"
import { useSelector, useDispatch } from "react-redux"
import "../../styles/component/card/card.styles.scss"
import parse from "html-react-parser"
import { withRouter } from "react-router-dom"

//action
import {
  storeTitleForRegister,
  deleteFavoritePost,
} from "../../store/webinar/action"

const Card = ({ id, created_at, title, content, history, unregister }) => {
  //dispatch setup
  const dispatch = useDispatch()

  const htmlContent = parse(content)
  const token = useSelector((state) => state.authReducer.loginUser.data.token)

  const handleRegister = () => {
    alert("You need to login before register")
    history.push("/login")
  }

  const navToWebinarDetail = () => {
    history.push({
      pathname: `webinar/${id}`,
      state: { favourited: unregister },
    })
  }

  const transferTitle = (payload) => {
    dispatch(storeTitleForRegister(payload))
  }

  const removeFavoritePost = (payload) => {
    dispatch(deleteFavoritePost(payload))
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
              onClick={() => {
                if (unregister) {
                  removeFavoritePost({ id })
                } else {
                  transferTitle({ title, id })
                }
              }}
            >
              {unregister ? "Unregister" : "Register Now"}
            </a>
          ) : (
            <div onClick={handleRegister} className="register-button">
              Register Now
            </div>
          )}

          <i
            id="icon"
            style={{ color: "#01254f" }}
            className="fas fa-greater-than"
          ></i>
        </div>
      </div>
      <div className="overlay" onClick={navToWebinarDetail}>
        <div className="overlay-text">Click for detail</div>
      </div>
    </div>
  )
}

export default withRouter(Card)
