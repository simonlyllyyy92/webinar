import React from "react"
import "../../styles/component/IntroVideo/introVideo.styles.scss"

const IntroVideo = () => {
  return (
    <div className="intro-vedio">
      <div className="intro-vedio-container">
        <div className="intro-vedio-content-left">
          <h4>Meet Your Host - Alistair Schultz</h4>
          <p>
            ACY Securities is a global leader and true ECN forex broker. Using a
            no dealing desk system, we provide lightning-fast and seamless trade
            execution with direct market access to a deep source of liquidity
            provided by some of the world's leading banks. Based in Sydney
          </p>
          <div className="show-more">
            <button>See more</button>

            <i
              id="icon"
              style={{
                color: "rgba(0, 0, 0, 0.65)",
                fontSize: "0.8rem",
              }}
              class="fas fa-greater-than"
            ></i>
          </div>
        </div>
        <div className="intro-vedio-content-right">here is the vedio</div>
      </div>
    </div>
  )
}

export default IntroVideo
