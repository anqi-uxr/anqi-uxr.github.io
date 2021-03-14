import React from "react"
import main_data from "../../data/main-data"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <h1>About Me</h1>
            <p>
              {main_data.aboutParaOne}
              <br></br>
              <br></br>
              {main_data.aboutParaTwo}
              <br></br>
              <br></br>
              {main_data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={main_data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
