import React from "react"
import ProjectCard from "../common/ProjectCard"
import data from "../../data/main-data"

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="work-wrapper">
          <h1>Projects</h1>
          <div className="grid">
            {data.projects.map(project => (
              <ProjectCard
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
