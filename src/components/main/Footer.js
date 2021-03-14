import React from "react"
import main_data from "../../data/main-data"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1>Contact</h1>
          <a className="email-link" href={`mailto:${main_data.contactEmail}`}>
            {main_data.contactEmail}
          </a>
          <div className="social-icons">
            {main_data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
