import React from "react"
import Card from "./card"
import "../../styles/component/webiar-section/webinarSection.styles.scss"

import Spinner from "../spinner/spinner"

const WebinarSection = (props) => {
  return (
    <div className="webinar-section">
      {props.loadingStatus ? (
        <Spinner />
      ) : (
        <div className="webinar-card-container" onScroll={props.handleScroll}>
          {props.webinarList
            .filter((item) => {
              return item.favourited === false
            })
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                created_at={item.created_at}
                title={item.title}
                content={item.content}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default WebinarSection
