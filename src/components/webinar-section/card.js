import React from "react"
import "../../styles/card/card.styles.scss"

const Card = () => {
  return (
    <div className="webinar-card">
      <div className="card-content">
        <p>31/10/2019</p>
        <h4>A card title is shown</h4>
        <p>this is the card content</p>
        <p>7pm-8:30pm EST</p>
        <div className="card-content-register">
          <button>Register Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
