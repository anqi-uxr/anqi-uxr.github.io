import React from "react"
import main_data from "../../data/main-data"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h1>Anqi Li</h1>
          {main_data.headerParagraph.map(function (val) {
            return <p>{val}</p>;
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
