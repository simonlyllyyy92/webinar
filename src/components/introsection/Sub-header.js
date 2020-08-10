import React from "react"
import "../../styles/component/introSection/introSection.styles.scss"

const SubHeaders = (props) => {
  const HomePageSubheader =
    "Whether you are nuew to foreign exchange trading or already have some market experience, we believe that a solid Fx trading education is vital to your success as a trader"
  return (
    <div className="intro-section" style={{ marginTop: "56px" }}>
      <div className="intro-section-content">
        <div className="intro-section-content-container">
          <h3>{props.title || "Forex Webinars"}</h3>
          <div className={props.startAlign ? "start-align" : "start-align no"}>
            {props.subTitle || HomePageSubheader}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeaders
