import React from "react"
import "../../styles/component/card/card.styles.scss"

const Card = () => {
  return (
    <div className="webinar-card">
      <div className="card-content">
        <div className="card-content-title">
          <p className="card-content-timeline">31/10/2019</p>
          <p className="card-content-subtitle">A card title is shown</p>
          <p className="card-content-subscription">this is the card content</p>
          <p className="card-content-timeZone">7pm-8:30pm EST</p>
        </div>
        <div className="card-content-register">
          <button>Register Now</button>

          <i
            id="icon"
            style={{ color: "#6BB718" }}
            class="fas fa-greater-than"
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Card
