import React from "react"
import Card from "./card"
import "../../styles/webiar-section/webinarSection.styles.scss"

const WebinarSection = () => {
  return (
    <div className="webinar-section">
      <div className="webinar-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default WebinarSection
