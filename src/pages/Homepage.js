import React from "react"
import "../styles/pages/homepage.styles.scss"

//components
import HeaderIndex from "../components/header/headerIndex"
import SubHeaders from "../components/introsection/Sub-header"
import WebinarSection from "../components/webinar-section/webinar-section"
import IntroVideo from "../components/introVideo/introVideo"
import Form from "../components/form/registerForm"

function HomePage() {
  return (
    <div className="App">
      <SubHeaders />
      <WebinarSection />
      <IntroVideo />
      <Form />
    </div>
  )
}

export default HomePage
