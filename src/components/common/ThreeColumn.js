import React from "react"
import "../../styles/three-column.scss"

const ThreeColumn = ({ children }) => {
  return (
    <div className="three-column-container">
      <div className="row">
        <div className="column">{children[0]}</div>
        <div className="column">{children[1]}</div>
        <div className="column">{children[2]}</div>
      </div>
    </div>
  )
}

export default ThreeColumn
