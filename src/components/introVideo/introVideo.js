import React from "react"
import "../../styles/component/IntroVideo/introVideo.styles.scss"
import YoutubePlayer from "react-player"

const IntroVideo = (props) => {
  const HomePageContent = (
    <p>
      With more than 15 years of experience covering both the FX and CFD
      markets, Alistair has extensive knowledge covering algorithmic trading,
      market analysis and an impressive educational background.
      <br />
      <br />
      As the author of ‘Essentials for Trading Students – An Overview of the
      Basics for Aspiring Traders’, which was released in 2017, Alistair will
      take any aspiring trader from the basics right through to advanced
      analytics used in institutional funds.
      <br />
      <br />
      At the core of Alistair’s teachings is the ability to help each trader
      uncover their ‘Trading DNA', helping them flourish with the skills and
      timeframes that work best for them.
    </p>
  )

  return (
    <div className="intro-vedio">
      <div className="intro-vedio-container">
        <div className="intro-vedio-content-left">
          <h4>{props.content_title || "Meet Your Host - Alistair Schultz"}</h4>
          <div>{props.content_body || HomePageContent}</div>
          <div className="show-more">
            <div>{props.cn ? "查看详情" : "See more"}</div>

            <i
              id="icon"
              style={{
                color: "rgba(0, 0, 0, 0.65)",
                fontSize: "0.8rem",
              }}
              className="fas fa-greater-than"
            ></i>
          </div>
        </div>
        <div className="intro-vedio-content-right">
          <div className="player-wrapper">
            <YoutubePlayer url="https://www.youtube.com/watch?v=PPDNjvHUdzQ&origin=http://localhost:3000" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroVideo
