import React from "react"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h1>Anqi Li</h1>
          {data.headerParagraph.map(function (val) {
            return <p>{val}</p>;
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
