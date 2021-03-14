import React from "react"
import Card from "./atoms/Card"
import main_data from "../../data/main-data"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h1>Work</h1>
          <div className="grid">
            {main_data.projects.map(project => (
              <Card
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
