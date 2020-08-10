import React from "react"
import ReactPlayer from "react-player"
import "../styles/pages/test.css"
const Test = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <label for="myInput">Label Text</label>
      <input type="text" name="special" id="myInput" required></input>
      <label class="error" for="myInput">
        This field is required.
      </label>
    </div>
  )
}

export default Test
