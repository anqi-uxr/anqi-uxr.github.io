import React from "react"
import "../../../styles/two-column.scss"

const TwoColumn = ({ children }) => {
  return (
    <div className="two-column-container">
      <div className="row">
        <div className="column">{children[0]}</div>
        <div className="column">{children[1]}</div>
      </div>
    </div>
  )
}
export default TwoColumn
