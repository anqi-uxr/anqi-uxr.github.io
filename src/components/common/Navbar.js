import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = ({ data }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-title">{data.title}</div>
          <div className="links-wrapper">
            {data.buttons.map(buttonData => buttonFromData(buttonData))}
          </div>
        </div>
      </div>
    </div>
  )
}

function buttonFromData(data) {
  if (data.type === "scroll") {
    return <button onClick={() => scrollTo(data.link)}>{data.name}</button>
  }
  return null;
}

export default Navbar
